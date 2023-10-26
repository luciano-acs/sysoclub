import { Inicio } from "./components/inicio.js";
import { Asociate } from "./components/Asociate.js";
import { Login } from "./components/Login.js";
import { Registro } from "./components/Registro.js";
import { Reserva } from "./components/Reserva.js";
import { Perfil } from "./components/Perfil.js";
import { Pago } from "./components/Pago.js";
import { Socios } from "./helpers/data.js";

export const App = () => {
    let appRoot = document.querySelector('#root');

    const mostrarIncio = () => {
        appRoot.innerHTML = '';
        appRoot.append(Inicio());
        appRoot.append(Asociate());
    }

    mostrarIncio();

    const routes = {
        inicio: Inicio(),
        asociate: Asociate(),
        login: Login(),
        registro: Registro(),
        perfil: Perfil(),
        pago: Pago(),
        reserva: Reserva(),
    }

    const renderPage = (page) => {
        appRoot.innerHTML = '';
        appRoot.append(page);
    };

    const changeRoute = (route) => {
        const page = routes[route];
        if (page) {
            renderPage(page);
        }
    };

    const buttonRegister = document.querySelector('#btn-registro');
    buttonRegister.addEventListener('click', () => {
        changeRoute('registro');

        const existeUsuario = (user) => {
            if (Socios.some(socio => {
                return socio['usuario'] === user;
            })) {
                return true;
            } else {
                return false;
            };
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

            let mensajeRegistro = document.querySelector('#mensajeRegistro');
            if (existeUsuario(usuario) === false) {
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
                Socios.push(nuevoSocio);

                mensajeRegistro.innerHTML = 'Usuario registrado con exito. Inicie sesión';
            } else {
                mensajeRegistro.innerHTML = 'Usuario ya registrado. Inicie sesión';
            }
        });
    });

    const buttonAsociate = document.querySelector('#btn-asociate');
    buttonAsociate.addEventListener('click', () => {
        changeRoute('registro');
        const existeUsuario = (user) => {
            if (Socios.some(socio => {
                return socio['usuario'] === user;
            })) {
                return true;
            } else {
                return false;
            };
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

            let mensajeRegistro = document.querySelector('#mensajeRegistro');
            if (existeUsuario(usuario) === false) {
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
                Socios.push(nuevoSocio);

                mensajeRegistro.innerHTML = 'Usuario registrado con exito. Inicie sesión';
            } else {
                mensajeRegistro.innerHTML = 'Usuario ya registrado. Inicie sesión';
            }
        });
    });

    const buttonLogin = document.querySelector('#btn-inicio');
    buttonLogin.addEventListener('click', () => {
        changeRoute('login');

        const existeUsuarioContraseña = (user, password) => {
            if (Socios.some(socio => {
                return socio['usuario'] === user && socio['contraseña'] === password;
            })) {
                return true;
            } else {
                return false;
            };
        };

        const busquedaDeSocio = (user, password) => {
            let socioBusqueda = Socios.find(socio => socio.usuario === user && socio.contraseña === password);
            return socioBusqueda;
        }

        const cargarLogin = (e) => {
            e.preventDefault();
            const formLogin = document.querySelector('#form-login');
            const usuario = formLogin.usuario.value;
            const contraseña = formLogin.contraseña.value;

            if (existeUsuarioContraseña(usuario, contraseña)) {
                let socioEncontrado = busquedaDeSocio(usuario, contraseña)
                localStorage.setItem('socio', JSON.stringify(socioEncontrado));

                changeRoute('perfil');
                let listNav = document.querySelector('#list-nav');
                let liNav = listNav.querySelectorAll('li');

                liNav.forEach(li => {
                    li.parentNode.removeChild(li);
                });

                let liNombre = document.createElement('li');
                liNombre.innerHTML = `<h2>Bienvenido, ${JSON.parse(localStorage.getItem('socio')).nombre} ${JSON.parse(localStorage.getItem('socio')).apellido}</h2>`;
                let liFoto = document.createElement('li');
                liFoto.setAttribute('id', 'id-foto');
                liFoto.innerHTML = `<img src="${JSON.parse(localStorage.getItem('socio')).foto}" alt="usuario">`;

                listNav.appendChild(liNombre);
                listNav.appendChild(liFoto);

                const foto = document.querySelector('#id-foto');
                foto.addEventListener('click', () => {
                    changeRoute('perfil');
                });

                const btnCuota = document.querySelector('#btn-cuota');
                btnCuota.addEventListener('click', () => {
                    changeRoute('pago');
                    const tableCuotas = document.querySelector('#table');
                    const body = tableCuotas.querySelector('#table-body');

                    let cantidadFilas = tableCuotas.rows.length;
                    if (cantidadFilas > JSON.parse(localStorage.getItem('socio')).cuotas.length && cantidadFilas > 0) {
                        forEach(body.childNodes, (child) => {
                            body.removeChild(child);
                        });
                    }

                    const socioJSON = JSON.parse(localStorage.getItem('socio'));
                    socioJSON.cuotas.forEach((cuota) => {
                        const fila = document.createElement('tr');

                        const conceptoCelda = document.createElement('td');
                        conceptoCelda.innerHTML = `${cuota.concepto}`
                        fila.appendChild(conceptoCelda);

                        const mesCelda = document.createElement('td');
                        mesCelda.innerHTML = `${cuota.mes}`
                        fila.appendChild(mesCelda);

                        const añoCelda = document.createElement('td');
                        añoCelda.innerHTML = `${cuota.año}`
                        fila.appendChild(añoCelda);

                        const fechaCelda = document.createElement('td');
                        fechaCelda.innerHTML = `${cuota.fecha}`
                        fila.appendChild(fechaCelda);

                        const estadoCelda = document.createElement('td');
                        if (cuota.estado === 'pendiente') {
                            estadoCelda.innerHTML = `<i class="fa-solid fa-exclamation"></i>`
                            fila.appendChild(estadoCelda);
                        } else {
                            estadoCelda.innerHTML = `<i class="fa-solid fa-check"></i>`
                            fila.appendChild(estadoCelda);
                        }

                        const btnsCelda = document.createElement('td');
                        btnsCelda.innerHTML = `<button id="btn-pagar">Pagar</button>`;
                        fila.appendChild(btnsCelda);

                        body.appendChild(fila);

                        const btnPagar = document.querySelector('#btn-pagar');
                        btnPagar.addEventListener('click', () => {
                            let fila = btnPagar.parentNode.parentNode;
                            let celdaEstado = fila.cells[4];
                            celdaEstado.innerHTML = `<i class="fa-solid fa-check"></i>`;
                            // cuota.estado = 'pagado';
                        });
                    });
                });

                const btnReserva = document.querySelector('#btn-reserva');
                btnReserva.addEventListener('click', (e) => {
                    e.preventDefault();
                    changeRoute('reserva');
                    const btnReserva = document.querySelector('#btn-reserva');
                    btnReserva.addEventListener('click', (e) => {
                        e.preventDefault();
                        const formReserva = document.querySelector('#form-reserva');
                        const fecha = formReserva.fecha.value;
                        const hora = formReserva.hora.value;
                        const lugar = document.querySelector('#lugar').value;

                        const reserva = {
                            lugar: lugar,
                            fecha: fecha,
                            hora: hora,
                            estado: 'asignada'
                        };

                        localStorage.setItem('reserva', JSON.stringify(reserva));

                        console.log(JSON.parse(localStorage.getItem('reserva')));
                        btnReserva.setAttribute('disabled', 'disabled');
                })});

                const btnCerrar = document.querySelector('#btn-cerrar');
                btnCerrar.addEventListener('click', () => {
                    localStorage.clear();
                    let listNav = document.querySelector('#list-nav');
                    let liNav = listNav.querySelectorAll('li');
                    liNav.forEach(li => {
                        li.parentNode.removeChild(li);
                    });

                    let listNavInicio = document.createElement('li');
                    listNavInicio.innerHTML = `<button id="btn-inicio">Iniciar Sesión</button>`;
                    listNav.appendChild(listNavInicio);

                    let listNavRegistro = document.createElement('li');
                    listNavRegistro.innerHTML = `<button id="btn-registro">Registrarse</button>`;
                    listNav.appendChild(listNavRegistro);

                    window.location.reload();
                });
            } else {
                let mensaje = document.querySelector('#mensaje');
                mensaje.innerHTML = 'Usuario y/o contraseña no validos. Intente nuevamente';
            }
        }

        const btnLoginForm = document.querySelector('#button-login');
        btnLoginForm.addEventListener('click', cargarLogin);
    });

}