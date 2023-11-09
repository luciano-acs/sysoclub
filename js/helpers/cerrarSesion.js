export const CerrarSesion = () => {

    // Este codigo permite modificar el nav acorde a si se encuentra o no iniciada la sesion del socio actual

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
}