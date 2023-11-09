import { ChangeRoute } from "./routes/changeRoute.js";
import { CargarCuota } from "./cargarCuota.js";
import { CerrarSesion } from "./cerrarSesion.js";
import { cargarReserva } from "./cargarReserva.js";

export const CargarPerfil = (props) => {

    // Lo que se hace en este codigo es cargar el perfil del socio actual en el DOM. Habilitanto los distintos botones segun sea el caso (socio activo o no) y mostrando el carnet del socio con sus datos personales

    let { socios, appRoot } = props;

    const fotoID = document.querySelector('#id-foto');
    fotoID.addEventListener('click', () => {
        ChangeRoute({ routes: ['perfil'], appRoot: appRoot });
        botones();
    });

    const botones = () => {
        let cantidadCuotasPagas = 0;
        const socioActual = JSON.parse(localStorage.getItem('socioDatos'));

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

        const btnInformacion = document.querySelector('#btn-informacion');
        btnInformacion.addEventListener('click', () => {
            ChangeRoute({ routes: ['informacion'], appRoot: appRoot });
        });

        const btnCerrar = document.querySelector('#btn-cerrar');
        btnCerrar.addEventListener('click', () => {
            CerrarSesion();
        });        
        
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

        if(cantidadCuotasPagas > new Date().getMonth()){
            btnReserva.disabled = false;
        }else{
            btnReserva.disabled = true;
        }
    }
    localStorage.getItem('socioDatos') ? botones() : null;
}