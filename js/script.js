// DATOs GLOBALES
//let inicioSesion = false;
let socioActual;

// const socios = [
//     {
//         nombre: 'Juan',
//         apellido: 'Perez',
//         dni: 40147963,
//         direccion: 'Av. Libertador 123',
//         telefono: 1122334455,
//         usuario: 'juanperez@gmail.com',
//         contraseña: 'juanperez963',
//         cuotas: [
//             {
//                 concepto: 'Cuota 1',
//                 mes: '1',
//                 año: '2023',
//                 fecha: '01/01/2023'
//             },
//             {
//                 concepto: 'Cuota 2',
//                 mes: '2',
//                 año: '2023',
//                 fecha: '10/02/2023'
//             }
//         ],
//         reservas: [{
//             concepto: 'Reserva 1',
//             lugar: 'cancha',
//             fechaReserva: '10/01/2023',
//             estado: 'usada',
//             fecha: '01/01/2023'
//         }]
//     },
//     {
//         nombre: 'Daniela',
//         apellido: 'Mendez',
//         dni: 20145698,
//         usuario: 'danimendez@gmail.com',
//         contraseña: 'danimendez698',
//         cuotas: [],
//         reservas: []
//     },
//     {
//         nombre: 'Javier',
//         apellido: 'Diaz',
//         dni: 8153759,
//         usuario: 'donJavier@gmail.com',
//         contraseña: 'javierDiaz759',
//         cuotas: [],
//         reservas: []
//     }
// ];

// const existeUsuarioContraseña = (user, password) => {
//     if (socios.some(socio => {
//         return socio['usuario'] === user && socio['contraseña'] === password;
//     })) {
//         return true;
//     } else {
//         return false;
//     };
// };

// const existeUsuario = (user) => {
//     if (socios.some(socio => {
//         return socio['usuario'] === user;
//     })) {
//         return true;
//     } else {
//         return false;
//     };
// };

// const busquedaDeSocio = (user, password) => {
//     let socioBusqueda = socios.find(socio => socio.usuario === user && socio.contraseña === password);
//     return socioBusqueda;
// }

class Socio {
    constructor(nombre, apellido, dni, direccion, telefono, usuario, contraseña, cuotas, reservas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.cuotas = cuotas;
        this.reservas = reservas;
    }

    pagarCuotas(mes, año) {
        let cuota = {
            mes: mes,
            año: año,
            fecha: new Date()
        }

        if ((mes === '1' || mes === '2' || mes === '3' || mes === '4' || mes === '5' || mes === '6' || mes === '7' || mes === '8' || mes === '9' || mes === '10' || mes === '11' || mes === '12') && (año === '2023')) {
            if (!this.cuotas.find(cuota => cuota.mes === mes && cuota.año === año)) {
                this.cuotas.push(cuota);
                alert(`Cuota del periodo ${mes}/${año} abonada!`);
            } else {
                alert(`La cuota del periodo ${mes}/${año} ya fue abonada`);
            }
        } else {
            alert('Ingrese un periodo valido. Recuerde solo puede ser del corriente año!\nEjemplo: 1/2023 representa enero de este año');
        }
    }

    realizarReserva(lugar, estado) {
        let reserva = {
            lugar: lugar,
            estado: estado,
            fecha: new Date()
        }

        if (!this.reservas.find(reserva => reserva.lugar === lugar || estado)) {
            this.reservas.push(reserva);
            alert(`Reserva de ${reserva.lugar} realizada`);
        } else {
            alert(`Ya tiene una reserva activa`);
        }
    }

    consultarCuotas() {
        const cuotasPagadas = this.cuotas.map(cuota => `${cuota.mes}/${cuota.año}`);
        let cantidadCuotas = 0;
        if (this.cuotas.length !== 0) {
            alert(`Las cuotas pagadas son: ${cuotasPagadas.join(', ')}`);
            cantidadCuotas = 12 - this.cuotas.length;
            alert(`Les queda un total de ${cantidadCuotas} cuotas por abonar. La cuál implica una deuda de $${cantidadCuotas * 5000}`);
        } else {
            alert(`No abonó ninguna cuota. La cuál implica una deuda de $${12 * 5000}`);
        }
    }

    consultarReservas() {
        if (this.reservas.length !== 0) {
            const reservasRealizadas = this.reservas.map(reserva => `Reserva de ${reserva.lugar} realizada el día ${reserva.fecha.toLocaleDateString()}`);
            alert(`Las realizadas son: ${reservasRealizadas.join(', ')}\n`);
        } else {
            alert('No tiene reserva a su nombre');
        }
    }
}

// const formLogin = document.querySelector('#form-login');
// formLogin.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const usuario = formLogin.usuario.value;
//     const contraseña = formLogin.contraseña.value;
    
//     if (existeUsuarioContraseña(usuario, contraseña)) {
//         let socioEncontrado = busquedaDeSocio(usuario, contraseña)
//         socioActual = new Socio(socioEncontrado.nombre, socioEncontrado.apellido, socioEncontrado.dni, socioEncontrado.direccion, socioEncontrado.telefono, socioEncontrado.usuario, socioEncontrado.contraseña, socioEncontrado.cuotas, socioEncontrado.reservas);
//         //inicioSesion = true;

//         localStorage.setItem('socioActual', JSON.stringify(socioActual));
//         localStorage.setItem('nombreUsuario', socioActual.nombre);
//         localStorage.setItem('apellidoUsuario', socioActual.apellido);

//         window.location.href = '../pages/perfil.html';

//         let bienvenidoUsuario = document.querySelector('#bienvenido-usuario');
//         bienvenidoUsuario.innerHTML = 'Bienvenido, ' + localStorage.getItem('nombreUsuario');
//     } else {
//         let mensaje = document.querySelector('#mensaje');
//         mensaje.innerHTML = 'Usuario y/o contraseña no validos. Intente nuevamente';
//     }
// });

// const formRegistro = document.querySelector('#form-register');
// formRegistro.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const nombre = formRegistro.nombre.value;
//     const apellido = formRegistro.apellido.value;
//     const dni = parseInt(formRegistro.dni.value);
//     const direccion = formRegistro.direccion.value;
//     const telefono = formRegistro.telefono.value;
//     const usuario = formRegistro.email.value;
//     const contraseña = formRegistro.contraseña.value;

//     console.log(nombre, apellido, dni, direccion, telefono, usuario, contraseña);

//     let mensajeRegistro = document.querySelector('#mensajeRegistro');
//     if (existeUsuario(usuario) === false) {
//         const nuevoSocio = new Socio(nombre, apellido, dni, direccion, telefono, usuario, contraseña);
//         socios.push(nuevoSocio);

//         mensajeRegistro.innerHTML = 'Usuario registrado con exito. Inicie sesión';
//         console.log(socios);
//     } else {
//         mensajeRegistro.innerHTML = 'Usuario ya registrado. Inicie sesión';
//     }
// });

// function reservas() {
//     let opcionReserva = prompt('Ingrese la opcion deseada: \n1: Reservar cancha\n2: Consultar reserva\n3: Volver atras');

//     while (opcionReserva != 3) {
//         switch (opcionReserva) {
//             case '1':
//                 socioActual.realizarReserva('cancha');
//                 break;
//             case '2':
//                 socioActual.consultarReservas();
//                 break;
//             default:
//                 alert('Opcion incorrecta. Intente nuevamente');
//                 break;
//         }
//         opcionReserva = prompt('Ingrese la opcion deseada: \n1: Reservar cancha\n2: Consultar reserva\n3: Volver atras');
//     }
// }

// const tableCuotas = document.querySelector('#table');
// const body = tableCuotas.querySelector('#table-body');
// const socioJSON = JSON.parse(localStorage.getItem('socioActual'));
// socioJSON.cuotas.forEach((cuota) => {
//     const fila = document.createElement('tr');

//     const conceptoCelda = document.createElement('td');
//     conceptoCelda.innerHTML = `${cuota.concepto}`
//     fila.appendChild(conceptoCelda);

//     const mesCelda = document.createElement('td');
//     mesCelda.innerHTML = `${cuota.mes}`
//     fila.appendChild(mesCelda);

//     const añoCelda = document.createElement('td');
//     añoCelda.innerHTML = `${cuota.año}`
//     fila.appendChild(añoCelda);

//     const fechaCelda = document.createElement('td');
//     fechaCelda.innerHTML = `${cuota.fecha}`
//     fila.appendChild(fechaCelda);

//     body.appendChild(fila);
// });


