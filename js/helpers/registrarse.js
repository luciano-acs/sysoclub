import { ExisteUsuario } from "../helpers/existeUsuario.js";

export const Registrarse = (props) => {

    let { socios } = props;

    const generarCuotas = () => {
        let cantidadCuotasAdeudadas = Math.round(Math.random() * 12);

        let cuotas = [];
        let mes = 1;

        for (let i = 12; i > 0; i--) {
            //let dia = Math.round(Math.random() * 28)+1;            
            if (i < cantidadCuotasAdeudadas) {
                let cuota = {
                    concepto: `Cuota ${mes}`,
                    mes: mes,
                    año: '2023',
                    fecha: `${15}/${mes}/2023`,
                    estado: 'pendiente',
                };
                cuotas.push(cuota);
            } else {
                let cuota = {
                    concepto: `Cuota ${mes}`,
                    mes: mes,
                    año: '2023',
                    fecha: `${15}/${mes}/2023`,
                    estado: 'pago',
                };
                cuotas.push(cuota);
            }
            mes++;
        }
        return cuotas;
    };

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
        const fecha = new Date();

        let mensajeRegistro = document.querySelector('#mensajeRegistro');
        if (ExisteUsuario({ user: usuario, socios: socios }) === false) {
            const nuevoSocio = {
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                direccion: direccion,
                telefono: telefono,
                usuario: usuario,
                contraseña: contraseña,
                cuotas: generarCuotas(),
                reservas: [],
                estado: 'activo',
                fechaAlta: fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear(),
                foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            };
            console.log(nuevoSocio);
            socios.push(nuevoSocio);

            formRegistro.reset();
            mensajeRegistro.innerHTML = 'Usuario registrado con exito. Inicie sesión';
        } else {
            mensajeRegistro.innerHTML = 'Usuario ya registrado. Inicie sesión';
        }
    });
};