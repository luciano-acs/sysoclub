import { ExisteUsuarioContraseña } from "./existeUsuarioContraseña.js";
import { BusquedaSocio } from "./busquedaSocio.js";
import { ChangeRoute } from "../helpers/routes/changeRoute.js";
import { Datos } from "../components/Datos.js";
import { CargarPerfil } from "./cargarPerfil.js";

export const CargarLogin = (props) => {

    // Este codigo permite validar si el usuario ingresado por el usuario existe en la base de datos. En caso de que exista, se carga el perfil del socio en el DOM
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
            const fecha = socioEncontrado.fechaActivo;
            const dni = socioEncontrado.dni;
            const estado = socioEncontrado.estado;
            
            const socioDatos = {
                nombre: nombreE,
                apellido: apellidoE,
                foto: fotoE,
                usuario: usuarioE,
                cuotas: cuotasE,
                reservas: reservasE,
                fecha: fecha,
                dni: dni,
                estado: estado
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
