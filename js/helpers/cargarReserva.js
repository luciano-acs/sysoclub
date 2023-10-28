export const cargarReserva = (props) => {

    let { socios } = props;

    const socioActual = socios.find(socio => socio.usuario === JSON.parse(localStorage.getItem('socioDatos')).usuario);

    const reservas = [];
    const btnReserva = document.querySelectorAll('.btn-reserva');
    btnReserva.forEach(btn => {
        btn.addEventListener('click', () => {
            const formReserva = document.querySelectorAll('.form-reserva');
            formReserva.forEach(form => {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const fecha = form.querySelector('.fecha').value;
                    const hora = form.querySelector('.hora').value;
                    const lugar = form.querySelector('.lugar').textContent;

                    const reserva = {
                        lugar: lugar,
                        fecha: fecha,
                        hora: hora,
                        estado: 'asignada'
                    };

                    let reservaExistente = localStorage.getItem('reservas');
                    reservaExistente = reservaExistente ? JSON.parse(reservaExistente) : [];

                    const existeReserva = reservaExistente.find(reserva => reserva.lugar === lugar);
                    if (!existeReserva) {
                        socios.forEach(socio => {
                            if (socio === socioActual) {
                                socio.reservas.push(reserva);
                            }
                        });

                        reservas.push(reserva);
                        localStorage.setItem('reservas', JSON.stringify(reservas));
                        console.log(socios);
                    }
                    btn.setAttribute('disabled', 'disabled');
                });
            });
        });
    });
}