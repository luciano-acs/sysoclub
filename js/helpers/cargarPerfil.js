import { ChangeRoute } from "./routes/changeRoute.js";
import { CargarCuota } from "./cargarCuota.js";
import { CerrarSesion } from "./cerrarSesion.js";
import { cargarReserva } from "./cargarReserva.js";
//import { Horarios } from "../helpers/horarios.js";

export const CargarPerfil = (props) => {
    let { socios, appRoot } = props;

    const fotoID = document.querySelector('#id-foto');
    fotoID.addEventListener('click', () => {
        ChangeRoute({ routes: ['perfil'], appRoot: appRoot });
        botones();
    });

    const botones = () => {
        const btnCuota = document.querySelector('#btn-cuota');
        btnCuota.addEventListener('click', () => {
            ChangeRoute({ routes: ['pago'], appRoot: appRoot });
            CargarCuota()
        });

        const btnReserva = document.querySelector('#btn-reserva');
        btnReserva.addEventListener('click', () => {
            ChangeRoute({ routes: ['reserva'], appRoot: appRoot });
            cargarReserva({ socios: socios});
        });

        const btnCerrar = document.querySelector('#btn-cerrar');
        btnCerrar.addEventListener('click', () => {
            CerrarSesion();
        });

        let cantidadCuotasPagas = 0;
        const socioActual = JSON.parse(localStorage.getItem('socioDatos'));
        console.log(socioActual)
        socioActual.cuotas.forEach(cuota => {
            if (cuota.estado === 'pagada') {
                cantidadCuotasPagas++;
            }
        });

        const item2 = document.querySelector('.item2');
        const item3 = document.querySelector('.item3');
        const item4 = document.querySelector('.item4');
        
        item2.innerHTML = `<img src="${JSON.parse(localStorage.getItem('socioDatos')).foto}">`;
        item3.innerHTML = `<p>Nombre: ${localStorage.getItem('socioDatos') ? JSON.parse(localStorage.getItem('socioDatos')).nombre : null}</p>
        <p>Apellido: ${localStorage.getItem('socioDatos') ? JSON.parse(localStorage.getItem('socioDatos')).apellido : null}</p>
        <p>DNI: ${localStorage.getItem('socioDatos') ?  JSON.parse(localStorage.getItem('socioDatos')).dni : null}</p>
        <p>Inicio de Actividades: ${localStorage.getItem('socioDatos') ? JSON.parse(localStorage.getItem('socioDatos')).fecha : null}</p>
        `;
        item4.innerHTML = `Estado: ${cantidadCuotasPagas > new Date().getMonth() ? 'Activo' : 'Inactivo'}`;
    }
    localStorage.getItem('socioDatos') ? botones() : null;
}