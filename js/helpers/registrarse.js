import { ExisteUsuario } from "../helpers/existeUsuario.js";

export const Registrarse = (props) => {

    let { socios } = props;

    // Esta funcion crea cuotas de forma aleatoria al momento de crear un nuevo socio
    const generarCuotas = () => {
        let cantidadCuotasAdeudadas = Math.round(Math.random() * 12);

        let cuotas = [];
        let mes = 1;

        for (let i = 12; i > 0; i--) {           
            if (i < cantidadCuotasAdeudadas) {
                let cuota = {
                    concepto: `Cuota ${mes}`,
                    mes: mes,
                    año: '2023',
                    valor: "$2000",
                    fecha: `${15}/${mes}/2023`,
                    pagado: 0,
                    fechaPago: '-',
                    estado: 'pendiente',
                };
                cuotas.push(cuota);
            } else {
                let cuota = {
                    concepto: `Cuota ${mes}`,
                    mes: mes,
                    año: '2023',
                    valor: "$2000",
                    fecha: `${15}/${mes}/2023`,
                    pagado: 1,
                    fechaPago: `${15}/${mes}/2023`,
                    estado: 'pago',
                };
                cuotas.push(cuota);
            }
            mes++;
        }
        return cuotas;
    };

    // Form registro donde se capturan los datos del nuevo socio validando si el mismo ya existia en la base de datos
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

        if (ExisteUsuario({ user: usuario, socios: socios }) === false) {
            const nuevoSocio = {
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                direccion: direccion,
                telefono: telefono,
                foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                usuario: usuario,
                contraseña: contraseña,
                cuotas: generarCuotas(),
                reservas: [],
                estado: '',
                fechaActivo: fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear(),                
            };
            
            let cantidad = 0;
            nuevoSocio.cuotas.forEach((cuota) => {
                if (cuota.estado === 'pago') {
                    cantidad++;
                }
            });

            cantidad < (fecha.getMonth() + 1) ? nuevoSocio.estado = 'inactivo' : nuevoSocio.estado = 'activo';

            socios.push(nuevoSocio);

            formRegistro.reset();
            Swal.fire({
                icon: 'success',
                title: 'Usuario registrado con exito',
                text: `Inicie Sesión para continuar`,
            })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Usuario ya registrado',
                text: `Inicie Sesión para continuar`,
            })
        }
    });
};