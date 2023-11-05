export const cargarReserva = (props) => {

    let { socios } = props;

    const socioActual = JSON.parse(localStorage.getItem('socioDatos'));

    // Las siguientes 3 funciones permiten determinar los horarios disponibles para cada lugar
    const horariosCancha = (fecha) => {
        let horariosCancha = [];
        fetch("js/helpers/horarios.json")
            .then(res => {
                if(!res.ok){
                    throw new Error('Error al cargar los horarios');
                }
                return res.json();
            })
            .then(data => {
                data.forEach(horario => {
                    if (horario.lugar === 'Cancha') {
                        horario.disponibilidad.forEach(hora => {
                            if (hora.fecha === fecha && hora.disponibilidad === true) {
                                horariosCancha.push(hora.hora);
                            }
                        });
                    }
                });
            })
            .catch(err => console.log("El error es: " , err));
        return horariosCancha;
    }
    const horariosPiscina = (fecha) => {
        let horariosPiscina = [];
        fetch("js/helpers/horarios.json")
            .then(res => {
                if(!res.ok){
                    throw new Error('Error al cargar los horarios');
                }
                return res.json();
            })
            .then(data => {
                data.forEach(horario => {
                    if (horario.lugar === 'Piscina') {
                        horario.disponibilidad.forEach(hora => {
                            if (hora.fecha === fecha && hora.disponibilidad === true) {
                                horariosPiscina.push(hora.hora);
                            }
                        });
                    }
                });
            })
            .catch(err => console.log("El error es: " , err));
        return horariosPiscina;
    }
    const horariosSalon = (fecha) => {
        let horariosSalon = [];
        fetch("js/helpers/horarios.json")
            .then(res => {
                if(!res.ok){
                    throw new Error('Error al cargar los horarios');
                }
                return res.json();
            })
            .then(data => {
                data.forEach(horario => {
                    if (horario.lugar === 'Salón') {
                        horario.disponibilidad.forEach(hora => {
                            if (hora.fecha === fecha && hora.disponibilidad === true) {
                                horariosSalon.push(hora.hora);
                            }
                        });
                    }
                });
            })
            .catch(err => console.log("El error es: " , err));
        return horariosSalon;
    }

    // El siguiente evento permiten capturar la eleccion de fecha y a partir de esta los horarios disponibles para cada lugar
    const inputFecha = document.querySelectorAll('.fecha');
    inputFecha.forEach(input => {
        input.addEventListener('change', (e) => {
            e.preventDefault();
            let fecha = input.value;
            let lugar = input.parentElement.querySelector('.lugar').innerHTML;

            if (lugar === 'Cancha') {
                let selectCancha = input.parentElement.querySelector('#selectCancha');
                selectCancha.innerHTML = '';

                horariosCancha(fecha).forEach(hora => {
                    let option = document.createElement('option');
                    option.innerHTML = hora;
                    selectCancha.appendChild(option);
                });
            } else if (lugar === 'Piscina') {
                let selectPiscina = input.parentElement.querySelector('#selectPiscina');
                selectPiscina.innerHTML = '';

                horariosPiscina(fecha).forEach(hora => {
                    let option = document.createElement('option');
                    option.innerHTML = hora;
                    selectPiscina.appendChild(option);
                });
            } else {
                let selectSalon = input.parentElement.querySelector('#selectSalon');
                selectSalon.innerHTML = '';

                horariosSalon(fecha).forEach(hora => {
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

    // En este evento teniendo en cuenta los socios y sus reservas modifica el estado del boton de reserva por cada uno de los formularios de la paginna actual
    socios.forEach(socio => {
        if (socio.usuario !== socioActual.usuario) {
            socio.reservas.forEach(reserva => {
                const formReserva = document.querySelectorAll('.form-reserva');
                formReserva.forEach(form => {
                    if (form.querySelector('.lugar').innerHTML === reserva.lugar && reserva.estado === 'Reservado') {
                        form.querySelector('.fecha').value = reserva.fecha;
                        form.querySelector('.hora').value = reserva.hora;

                        let btnReserva = form.querySelector('.btn-reserva');
                        btnReserva.innerHTML = "No disponible";
                        btnReserva.disabled = true;
                        form.querySelector('.fecha').disabled = true;
                        form.querySelector('.hora').disabled = true;
                    }
                });
            });
        }
    });

    // En este evento permite capturar el bonton de la reserva guardando la misma en el local storage y modificando el estado del boton.
    const btnReserva = document.querySelectorAll('.btn-reserva');
    btnReserva.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let lugar = btn.parentElement.querySelector('.lugar').innerHTML;
            let fecha = btn.parentElement.querySelector('.fecha').value;
            let hora = btn.parentElement.querySelector('.hora').value;
            let estado = 'Reservado';

            if (fecha !== '' && hora !== '') {
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
                    icon: 'error',
                    title: 'Datos incompletos',
                    text: 'Debes indicar una fecha y un horario para reservar'
                })
            }
        });
    });
}


