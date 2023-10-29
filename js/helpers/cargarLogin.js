import { ExisteUsuarioContraseña } from "./existeUsuarioContraseña.js";
import { BusquedaSocio } from "./busquedaSocio.js";
import { ChangeRoute } from "../helpers/routes/changeRoute.js";
import { CargarCuota } from "./cargarCuota.js";
import { CerrarSesion } from "./cerrarSesion.js";
import { cargarReserva } from "./cargarReserva.js";
import { Datos } from "../components/Datos.js";
import { CargarPerfil } from "./cargarPerfil.js";

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
            const cuotasE = socioEncontrado.cuotas;
            const reservasE = socioEncontrado.reservas;
            const socioDatos = {
                nombre: nombreE,
                apellido: apellidoE,
                foto: fotoE,
                usuario: usuarioE,
                cuotas: cuotasE,
                reservas: reservasE
            }
            localStorage.setItem('socioDatos', JSON.stringify(socioDatos));

            ChangeRoute({routes: ['perfil'], appRoot: appRoot});
            Datos();
            CargarPerfil({ socios: socios, appRoot: appRoot });
        } else {
            let mensaje = document.querySelector('#mensaje');
            mensaje.innerHTML = 'Usuario y/o contraseña no validos. Intente nuevamente';
        }
    });
}
