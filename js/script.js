// DATOs GLOBALES
let inicioSesion = false;

// Datos usuario
let usuarioAlmacenado = 'prueba';
let contraseñaAlmacenada = '123456';

let opcionInicial = prompt('Bienvenido al sistema de socios del club atletico CoderHouse. Para continuar elija algunas de las siguientes opciones: \n1: Iniciar Sesión\n2: Ver info\n3: Salir');

while (opcionInicial != '3') {
    switch (opcionInicial) {
        case '1':
            login();
            break;
        case '2':
            alert('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo nihil quam quisquam ipsa id, ab, impedit quod alias perspiciatis fugiat ratione saepe repudiandae rem illo unde laboriosam repellat hic.');
            break;
        default:
            alert('Opcion incorrecta. Intente nuevamente');
            break;
    }
    opcionInicial = prompt('Bienvenido al sistema de socios del club atletico CoderHouse. Para continuar elija algunas de las siguientes opciones: \n1: Iniciar Sesión\n2: Ver info\n3: Salir');
}

function login() {
    while (inicioSesion == false) {
        let usuario = prompt('Ingrese su usuario: ');
        let contraseña = prompt('Ingrese su contraseña: ');
        if (usuario === usuarioAlmacenado && contraseña === contraseñaAlmacenada) {
            alert('Sesion iniciada con exito');
            inicioSesion = true;
        } else {
            alert('Usuario y contraseña no validos. Intente nuevamente');
        }
    }

    let opcionMenu = prompt('Bienvenido ' + usuarioAlmacenado + '. Que desea realizar: \n1: Reservas\n2: Cuotas\n3: Cerrar sesion');

    while (inicioSesion) {
        switch (opcionMenu) {
            case '1':
                reservas();
                break;
            case '2':
                cuotas();
                break;
            case '3':
                inicioSesion = false;
                break;
            default:
                alert('Opcion incorrecta. Intente nuevamente');
                break;
        }
        if (inicioSesion) {
            opcionMenu = prompt('Bienvenido ' + usuarioAlmacenado + '. Que desea realizar: \n1: Reservas\n2: Cuotas\n3: Cerrar sesion');
        }
    }
}

function reservas() {
    let opcionReserva = prompt('Ingrese la opcion deseada: \n1: Reservar cancha\n2: Consultar reserva\n3: Volver atras');
    let reserva = false;
    let reservaCantidad = 0;

    while (opcionReserva != 3) {
        switch (opcionReserva) {
            case '1':
                if (reservaCantidad < 1) {
                    reserva = true;
                    reservaCantidad = 1;
                    alert('Reserva en gestion. Verifique confirmacion');
                } else {
                    alert('Ya realizó la reserva permitida. Consulte la misma en el menú de reservas');
                }
                break;
            case '2':
                if (reserva) {
                    alert('Su reserva esta confirmada. Dirijase a administracion del club para más detalles');
                } else {
                    alert('No cuenta con reservas a su nombre');
                }
                break;
            default:
                alert('Opcion incorrecta. Intente nuevamente');
                break;
        }
        opcionReserva = prompt('Ingrese la opcion deseada: \n1: Reservar cancha\n2: Consultar reserva\n3: Volver atras');
    }
}

function cuotas() {
    let opcionCuotas = prompt('Ingrese la opcion deseada: \n1: Consultar cuotas\n2: Pagar cuotas\n3: Volver atras');
    let cuotasCantidad = 12;

    while (opcionCuotas != 3) {
        switch (opcionCuotas) {
            case '1':
                alert('La cantidad de cuotas adeudadas es de: ' + cuotasCantidad + ' lo cual implica una deuda de $' + (5000 * cuotasCantidad));
                break;
            case '2':
                let cuotasAbonar = prompt('Ingrese la cantidad de cuotas a abonar: \n');
                if ((cuotasCantidad - cuotasAbonar) < 0) {
                    alert('No puede pagar esa cantidad. Sus cuotas adeudadas son: ' + cuotasCantidad + '\nVuelva a intentarlo');
                } else {
                    alert('Se abonaron: ' + cuotasAbonar + ' donde se debitaron $' + cuotasAbonar * 5000);
                    cuotasCantidad -= cuotasAbonar;
                }
                break;
            default:
                alert('Opcion incorrecta. Intente nuevamente');
                break;
        }
        opcionCuotas = prompt('Ingrese la opcion deseada: \n1: Consultar cuotas\n2: Pagar cuotas\n3: Volver atras');
    }
}


