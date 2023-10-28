import { ExisteUsuarioContraseña } from "./existeUsuarioContraseña.js";
import { BusquedaSocio } from "./busquedaSocio.js";
import { ChangeRoute } from "../helpers/routes/changeRoute.js";
import { CargarCuota } from "./cargarCuota.js";
import { CerrarSesion } from "./cerrarSesion.js";
import { cargarReserva } from "./cargarReserva.js";

export const CargarLogin = (props) => {

    let { socios, appRoot } = props;

    const formLogin = document.querySelector('#form-login');
        
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        const usuario = formLogin.usuario.value;
        const contraseña = formLogin.contraseña.value;

        if (ExisteUsuarioContraseña({ user: usuario, password: contraseña, socios: socios })) {
            let socioEncontrado = BusquedaSocio({ user: usuario, password: contraseña, socios: socios })
            
            const nombreE = socioEncontrado.nombre;
            const apellidoE = socioEncontrado.apellido;
            const fotoE = socioEncontrado.foto;
            const usuarioE = socioEncontrado.usuario;
            const socioDatos = {
                nombre: nombreE,
                apellido: apellidoE,
                foto: fotoE,
                usuario: usuarioE,
            }
            localStorage.setItem('socioDatos', JSON.stringify(socioDatos));

            ChangeRoute({routes: ['perfil'], appRoot: appRoot});
            let listNav = document.querySelector('#list-nav');
            let liNav = listNav.querySelectorAll('li');

            liNav.forEach(li => {
                li.parentNode.removeChild(li);
            });

            let liNombre = document.createElement('li');
            liNombre.innerHTML = `<h2>Bienvenido, ${JSON.parse(localStorage.getItem('socioDatos')).nombre} ${JSON.parse(localStorage.getItem('socioDatos')).apellido}</h2>`;
            let liFoto = document.createElement('li');
            liFoto.setAttribute('id', 'id-foto');
            liFoto.innerHTML = `<img src="${JSON.parse(localStorage.getItem('socioDatos')).foto}" alt="usuario">`;

            listNav.appendChild(liNombre);
            listNav.appendChild(liFoto);

            const fotoID = document.querySelector('#id-foto');
            fotoID.addEventListener('click', () => {
                ChangeRoute({routes: ['perfil'], appRoot: appRoot});
            });

            const btnCuota = document.querySelector('#btn-cuota');
            btnCuota.addEventListener('click', () => {
                ChangeRoute({routes: ['pago'], appRoot: appRoot});
                CargarCuota({socios: socios, appRoot: appRoot})
            });

            const btnReserva = document.querySelector('#btn-reserva');
            btnReserva.addEventListener('click', () => {
                ChangeRoute({routes: ['reserva'], appRoot: appRoot});
                cargarReserva({socios: socios});
            });

            const btnCerrar = document.querySelector('#btn-cerrar');
            btnCerrar.addEventListener('click', () => {
                CerrarSesion();
            });
        } else {
            let mensaje = document.querySelector('#mensaje');
            mensaje.innerHTML = 'Usuario y/o contraseña no validos. Intente nuevamente';
        }
    });
}
