// DATOs GLOBALES
let inicioSesion = false;
let socioActual;

// Usuarios
const socios = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        dni: 40147963,
        usuario: 'juancitoPerez',
        contraseña: 'juanperez963',
        cuotas: [],
        reservas: []
    },
    {
        nombre: 'Daniela',
        apellido: 'Mendez',
        dni: 20145698,
        usuario: 'daniMendez',
        contraseña: 'danimendez698',
        cuotas: [],
        reservas: []
    },
    {
        nombre: 'Javier',
        apellido: 'Diaz',
        dni: 8153759,
        usuario: 'donJavier',
        contraseña: 'javierDiaz759',
        cuotas: [],
        reservas: []
    }
];

const existeUsuarioContraseña = (user, password) =>{
    if(socios.some(socio => {
        return socio['usuario'] === user && socio['contraseña'] === password;
    })){
        return true;
    }else{
        return false;
    };
};

const busquedaDeSocio = (user, password) =>{
    let socioBusqueda = socios.find(socio => socio.usuario === user && socio.contraseña === password);
    return socioBusqueda;
}

// Class Socio
class Socio{
    constructor(nombre, apellido, dni, usuario, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.cuotas = [];
        this.reservas = [];
    }

    pagarCuotas(mes, año){
        let cuota = {
            mes: mes,
            año: año,
            fecha: new Date()
        }

        if((mes === '1' || mes === '2' || mes === '3' || mes === '4' || mes === '5' || mes === '6' || mes === '7' || mes === '8' || mes === '9' || mes === '10' || mes === '11' || mes === '12') && (año === '2023')){
            if(!this.cuotas.find(cuota => cuota.mes === mes && cuota.año === año)){
                this.cuotas.push(cuota);
                alert(`Cuota del periodo ${mes}/${año} abonada!`);
            }else{
                alert(`La cuota del periodo ${mes}/${año} ya fue abonada`);
            } 
        }else{
            alert('Ingrese un periodo valido. Recuerde solo puede ser del corriente año!\nEjemplo: 1/2023 representa enero de este año');
        }       
    }

    realizarReserva(lugar, estado){
        let reserva = {
            lugar: lugar,
            estado: estado,
            fecha: new Date()
        }

        if(!this.reservas.find(reserva => reserva.lugar === lugar || estado)){
            this.reservas.push(reserva);
            alert(`Reserva de ${reserva.lugar} realizada`);
        }else{
            alert(`Ya tiene una reserva activa`);
        }        
    }

    consultarCuotas() {
        const cuotasPagadas = this.cuotas.map(cuota => `${cuota.mes}/${cuota.año}`);
        let cantidadCuotas = 0; 
        if(this.cuotas.length !== 0){
            alert(`Las cuotas pagadas son: ${cuotasPagadas.join(', ')}`);
            cantidadCuotas = 12 - this.cuotas.length;
            alert(`Les queda un total de ${cantidadCuotas} cuotas por abonar. La cuál implica una deuda de $${cantidadCuotas*5000}`);
        }else{
            alert(`No abonó ninguna cuota. La cuál implica una deuda de $${12*5000}`);
        }        
    }

    consultarReservas() {
        if(this.reservas.length !== 0){
            const reservasRealizadas = this.reservas.map(reserva => `Reserva de ${reserva.lugar} realizada el día ${reserva.fecha.toLocaleDateString()}`);
            alert(`Las realizadas son: ${reservasRealizadas.join(', ')}\n`);
        }else{
            alert('No tiene reserva a su nombre');
        }        
    }
}

let opcionInicial = prompt('Bienvenido al sistema de socios del club atletico CoderHouse. Para continuar elija algunas de las siguientes opciones: \n1: Iniciar Sesión\n2: Registrarse\n3: Ver info\n4: Salir');

while (opcionInicial != '4') {
    switch (opcionInicial) {
        case '1':
            login();
            break;
        case '2':
            registrarse();
            break;
        case '3':
            alert('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo nihil quam quisquam ipsa id, ab, impedit quod alias perspiciatis fugiat ratione saepe repudiandae rem illo unde laboriosam repellat hic.');
            break;
        default:
            alert('Opcion incorrecta. Intente nuevamente');
            break;
    }
    opcionInicial = prompt('Bienvenido al sistema de socios del club atletico CoderHouse. Para continuar elija algunas de las siguientes opciones: \n1: Iniciar Sesión\n2: Registrarse\n3: Ver info\n4: Salir');
}

function login() {
    while (inicioSesion == false) {
        let usuario = prompt('Login\nIngrese su usuario: ');
        let contraseña = prompt('Ingrese su contraseña: ');
        if (existeUsuarioContraseña(usuario,contraseña)) {
            alert('Sesion iniciada con exito');
            let socioEncontrado = busquedaDeSocio(usuario,contraseña)
            socioActual = new Socio(socioEncontrado.nombre,socioEncontrado.apellido,socioEncontrado.dni,socioEncontrado.usuario,socioEncontrado.contraseña,socioEncontrado.cuotas,socioEncontrado.reservas);
            console.log(socioActual);
            inicioSesion = true;
        } else {
            alert('Usuario y contraseña no validos. Intente nuevamente');
        }
    }

    let opcionMenu = prompt('Bienvenido ' + socioActual.nombre + '. Que desea realizar: \n1: Reservas\n2: Cuotas\n3: Cerrar sesion');

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
            opcionMenu = prompt('Bienvenido ' + socioActual.nombre + '. Que desea realizar: \n1: Reservas\n2: Cuotas\n3: Cerrar sesion');
        }
    }
}

function registrarse(){
    let nombre = prompt('Nombre: ');
    let apellido = prompt('Apellido: ');
    let dni = parseInt(prompt('DNI: '));
    let usuario = prompt('Usuario: ');
    let contraseña = prompt('Contraseña: ');

    if(existeUsuarioContraseña(usuario,contraseña) === false){
        const socioNuevo = new Socio(nombre, apellido, dni, usuario, contraseña);
        socios.push(socioNuevo);
        alert('Usuario registrado');
    }else{
        alert('Usuario existente proceda a realizar el login');
    }   
}

function reservas() {
    let opcionReserva = prompt('Ingrese la opcion deseada: \n1: Reservar cancha\n2: Consultar reserva\n3: Volver atras');

    while (opcionReserva != 3) {
        switch (opcionReserva) {
            case '1':
                socioActual.realizarReserva('cancha');
                break;
            case '2':
                socioActual.consultarReservas();
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

    while (opcionCuotas != 3) {
        switch (opcionCuotas) {
            case '1':
                socioActual.consultarCuotas(socioActual);
                break;
            case '2':
                let mesAbonar = prompt('Ingrese el mes a abonar: ');
                let anioAbonar = prompt('Ingrese el año a abonar: ');
                socioActual.pagarCuotas(mesAbonar,anioAbonar);
                break;
            default:
                alert('Opcion incorrecta. Intente nuevamente');
                break;
        }
        opcionCuotas = prompt('Ingrese la opcion deseada: \n1: Consultar cuotas\n2: Pagar cuotas\n3: Volver atras');
    }
}


