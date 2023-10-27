// helpers
import { ExisteUsuario } from "../helpers/existeUsuario.js";

export const Registrarse = (props) => {

    let { socios } = props;

    const formRegistro = document.querySelector('#form-register');
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = formRegistro.nombre.value;
            const apellido = formRegistro.apellido.value;
            const dni = parseInt(formRegistro.dni.value);
            const direccion = formRegistro.direccion.value;
            const telefono = formRegistro.telefono.value;
            const usuario = formRegistro.email.value;
            const contraseña = formRegistro.contraseña.value;

            let mensajeRegistro = document.querySelector('#mensajeRegistro');
            if (ExisteUsuario({user: usuario,  socios: socios }) === false) {
                const nuevoSocio = {
                    nombre: nombre,
                    apellido: apellido,
                    dni: dni,
                    direccion: direccion,
                    telefono: telefono,
                    usuario: usuario,
                    contraseña: contraseña,
                    cuotas: [],
                    reservas: [],
                    foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                };
                console.log(nuevoSocio);
                socios.push(nuevoSocio);

                mensajeRegistro.innerHTML = 'Usuario registrado con exito. Inicie sesión';
            } else {
                mensajeRegistro.innerHTML = 'Usuario ya registrado. Inicie sesión';
            }
        });
};