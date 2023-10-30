export const cargarReserva = (props) => {

    let { socios, horarios } = props;

    const socioActual = JSON.parse(localStorage.getItem('socioDatos'));

    console.log('Horarios: ', horarios);

    const horariosCancha = (fecha) => {
        let horariosCancha = [];
        horarios.forEach(horario => {
            if(horario.lugar === 'Cancha'){       
                horario.disponibilidad.forEach(hora => {
                    if(hora.fecha === fecha && hora.disponibilidad === true){
                        horariosCancha.push(hora.hora);
                    }
                });       
            }
        });
        return horariosCancha;
    }
    const horariosPiscina = (fecha) => {
        let horariosPiscina = [];
        horarios.forEach(horario => {
            if(horario.lugar === 'Piscina'){       
                horario.disponibilidad.forEach(hora => {
                    if(hora.fecha === fecha && hora.disponibilidad === true){
                        horariosPiscina.push(hora.hora);
                    }
                });    
            }
        });
        return horariosPiscina;
    }
    const horariosSalon = (fecha) => {
        let horariosSalon = [];
        horarios.forEach(horario => {
            if(horario.lugar === 'Salón'){       
                horario.disponibilidad.forEach(hora => {
                    if(hora.fecha === fecha && hora.disponibilidad === true){
                        horariosSalon.push(hora.hora);
                    }
                });    
            }
        });
        return horariosSalon;
    }

    const inputFecha = document.querySelectorAll('.fecha');
    inputFecha.forEach(input => {
        input.addEventListener('change', (e) => {
            e.preventDefault();
            let fecha = input.value;
            let lugar = input.parentElement.querySelector('.lugar').innerHTML;

            if(lugar === 'Cancha'){
                let selectCancha = input.parentElement.querySelector('#selectCancha');
                selectCancha.innerHTML = '';

                const horarios = horariosCancha(fecha);
                console.log('Horarios cancha' , horarios);

                horarios.forEach(hora => {
                    let option = document.createElement('option');
                    option.innerHTML = hora;
                    selectCancha.appendChild(option);
                });
            }else if(lugar === 'Piscina'){
                let selectPiscina = input.parentElement.querySelector('#selectPiscina');
                selectPiscina.innerHTML = '';

                horariosPiscina(fecha).forEach(hora => {
                    let option = document.createElement('option');
                    option.innerHTML = hora;
                    selectPiscina.appendChild(option);
                });
            }else{
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

    socioActual.reservas.forEach(reserva => {
        const formReserva = document.querySelectorAll('.form-reserva');
        formReserva.forEach(form => {
            if (form.querySelector('.lugar').innerHTML === reserva.lugar && reserva.estado === 'Reservado') {
                form.querySelector('.fecha').value = reserva.fecha;
                form.querySelector('.hora').value = reserva.hora;

                let btnReserva = form.querySelector('.btn-reserva');
                btnReserva.innerHTML = reserva.estado;
                btnReserva.disabled = true;
                form.querySelector('.fecha').disabled = true;
                form.querySelector('.hora').disabled = true;
            }
        });
    });

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

    const btnReserva = document.querySelectorAll('.btn-reserva');
    btnReserva.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let lugar = btn.parentElement.querySelector('.lugar').innerHTML;
            let fecha = btn.parentElement.querySelector('.fecha').value;
            let hora = btn.parentElement.querySelector('.hora').value;
            let estado = 'Reservado';

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
        });
    });
}


