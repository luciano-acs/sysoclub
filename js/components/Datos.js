export const Datos = () => {
    let listNav = document.querySelector('#list-nav');
    let liNav = listNav.querySelectorAll('li');

    liNav.forEach(li => {
        li.parentNode.removeChild(li);
    });

    let liNombre = document.createElement('li');
    liNombre.innerHTML = `<h2>Bienvenido, ${JSON.parse(localStorage.getItem('socioDatos')).nombre} ${JSON.parse(localStorage.getItem('socioDatos')).apellido}</h2>`;
    let liFoto = document.createElement('li');
    liFoto.setAttribute('id', 'id-foto');
    liFoto.innerHTML = `<img src="${JSON.parse(localStorage.getItem('socioDatos')).foto}" alt="usuario">`;

    let textoPerfil = document.createElement('p');
    textoPerfil.setAttribute('id', 'texto-perfil');
    textoPerfil.textContent = 'Perfil';
    liFoto.appendChild(textoPerfil);

    listNav.appendChild(liNombre);
    listNav.appendChild(liFoto);

    return listNav;
}