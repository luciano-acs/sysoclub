export const cargarReserva = (props) => {

    let { socios } = props;

    const socioActual = JSON.parse(localStorage.getItem('socioDatos'));

    // Las siguientes 2 funciones permiten determinar los horarios disponibles para cada lugar

    const obtenerHorarios = async () => {
        try {
            const res = await fetch("js/helpers/horarios.json");
            if (!res.ok) {
                throw new Error('Error al cargar los horarios');
            }
            return await res.json();
        } catch (error) {
            console.log("El error es: ", error);
        }
    };

    const horariosLugar = async (fecha, lugar) => {
        const data = await obtenerHorarios();
        let horariosLugar = [];
        data.forEach(horario => {
            if (horario.lugar === lugar) {
                horario.disponibilidad.forEach(hora => {
                    if (hora.fecha === fecha && hora.disponibilidad === true) {
                        horariosLugar.push(hora.hora);
                    }
                });
            }
        });
        return horariosLugar;
    };

    // El siguiente evento permiten capturar la eleccion de fecha y a partir de esta los horarios disponibles para cada lugar
    const inputFecha = document.querySelectorAll('.fecha');
    inputFecha.forEach(input => {
        input.addEventListener('change', async (e) => {
            e.preventDefault();
            let fecha = input.value;
            let lugar = input.parentElement.querySelector('.lugar').innerHTML;

            if (lugar === 'Cancha') {
                let selectCancha = input.parentElement.querySelector('#selectCancha');
                selectCancha.innerHTML = '';

                const horarios = await horariosLugar(fecha, "Cancha");
                horarios.forEach(hora => {
                    let option = document.createElement('option');
                    option.innerHTML = hora;
                    selectCancha.appendChild(option);
                });
            } else if (lugar === 'Piscina') {
                let selectPiscina = input.parentElement.querySelector('#selectPiscina');
                selectPiscina.innerHTML = '';

                const horarios = await horariosLugar(fecha, "Piscina");
                horarios.forEach(hora => {
                    let option = document.createElement('option');
                    option.innerHTML = hora;
                    selectPiscina.appendChild(option);
                });
            } else {
                let selectSalon = input.parentElement.querySelector('#selectSalon');
                selectSalon.innerHTML = '';

                const horarios = await horariosLugar(fecha, "Salón");
                horarios.forEach(hora => {
                    let option = document.createElement('option');
                    option.innerHTML = hora;
                    selectSalon.appendChild(option);
                });
            }
        });
    });

    // En este evento tiene en cuenta el socio actual verificando si para el mismo existe reservas y modificando el boton en este caso.
    socioActual.reservas.forEach(reserva => {
        const formReserva = document.querySelectorAll('.form-reserva');
        formReserva.forEach(form => {
            if (form.querySelector('.lugar').innerHTML === reserva.lugar && reserva.estado === 'Reservado') {
                form.querySelector('.fecha').value = reserva.fecha;
                let select = form.querySelector(('#select' + reserva.lugar))
                let option = document.createElement('option');
                option.innerHTML = reserva.hora;
                select.appendChild(option);

                let btnReserva = form.querySelector('.btn-reserva');
                btnReserva.innerHTML = reserva.estado;
                btnReserva.disabled = true;
                form.querySelector('.fecha').disabled = true;
                form.querySelector('.hora').disabled = true;
            }
        });
    });

    // La siguiente funcion permite verificar si existe una reserva para el lugar, fecha y hora seleccionados
    const existeReserva = (lugar, fecha, hora) => {
        return socios.some(socio => {
            return socio.reservas.some(reserva => {
                return reserva.lugar === lugar && reserva.fecha === fecha && reserva.hora === hora;
            });
        });
    }

    // En este evento permite capturar el boton de la reserva guardando la misma en el local storage y modificando el estado del boton.
    const btnReserva = document.querySelectorAll('.btn-reserva');
    btnReserva.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let lugar = btn.parentElement.querySelector('.lugar').innerHTML;
            let fecha = btn.parentElement.querySelector('.fecha').value;
            let hora = btn.parentElement.querySelector('.hora').value;
            let estado = 'Reservado';

            console.log(existeReserva(lugar, fecha, hora));

            if (fecha !== '' && hora !== '') {
                if (!existeReserva(lugar, fecha, hora)) {
                    let reserva = {
                        lugar,
                        fecha,
                        hora,
                        estado
                    }
                    socioActual.reservas.push(reserva);

                    localStorage.setItem('socioDatos', JSON.stringify(socioActual));

                    btn.innerHTML = 'Reservado';
                    btn.parentElement.querySelector('.fecha').disabled = true;
                    btn.parentElement.querySelector('.hora').disabled = true;
                    btn.disabled = true;
                    Swal.fire({
                        icon: 'success',
                        title: 'Reserva realizada',
                        text: `Se realizo la reserva de ${lugar} para el ${fecha} a las ${hora}`,
                    })
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Reserva existente',
                        text: 'Ya existe una reserva para el lugar, fecha y hora seleccionados'
                    })
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Datos incompletos',
                    text: 'Debes indicar una fecha y un horario para reservar'
                })
            }
        });
    });
}


