import { ChangeRoute } from "./routes/changeRoute.js";
import { CargarCuota } from "./cargarCuota.js";
import { CerrarSesion } from "./cerrarSesion.js";
import { cargarReserva } from "./cargarReserva.js";
import { Horarios } from "../helpers/horarios.js";

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
            cargarReserva({ socios: socios, horarios: Horarios });
        });

        const btnCerrar = document.querySelector('#btn-cerrar');
        btnCerrar.addEventListener('click', () => {
            CerrarSesion();
        });
    }
    localStorage.getItem('socioDatos') ? botones() : null;
}