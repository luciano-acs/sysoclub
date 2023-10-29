export const cargarReserva = (props) => {

    let { socios } = props;

    // const socioActual = socios.find(socio => socio.usuario === JSON.parse(localStorage.getItem('socioDatos')).usuario);
    const socioActual = JSON.parse(localStorage.getItem('socioDatos'));

    socioActual.reservas.forEach(reserva => {
        const formReserva = document.querySelectorAll('.form-reserva');
        formReserva.forEach(form => {
            if(form.querySelector('.lugar').innerHTML === reserva.lugar && reserva.estado === 'Reservado') {
                form.querySelector('.fecha').value = reserva.fecha;
                form.querySelector('.hora').value = reserva.hora;
                
                let btnReserva = form.querySelector('.btn-reserva');
                btnReserva.innerHTML = reserva.estado;
                btnReserva.disabled = true;                
            }
        });
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
            btn.disabled = true;
        });
    });
}


