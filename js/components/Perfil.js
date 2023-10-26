export const Perfil = () => {
    let section = document.createElement('section');
    section.setAttribute('class','menu-buttons');

    section.innerHTML = 
    `
    <button id="btn-cuota"><p>Cuotas</p></button>
    <button id="btn-reserva"><p>Reservas</p></button>
    <button id="btn-informacion" disabled><p>Información</p></button>   
    <button id="btn-cerrar"><p>Cerrar Sesión</p></button>   
    `

    return section;
}