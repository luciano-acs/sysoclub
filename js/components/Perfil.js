export const Perfil = () => {
    let section = document.createElement('section');
    section.setAttribute('class','perfil');

    section.innerHTML = 
    `    
    <div class="carnetDigital">
        <div class="carnet">
            <div class="item1">SYSOCLUB</div>
            <div class="item2"></div>             
            <div class="item3"></div>
            <div class="item4"></div>
        </div>
    </div>
    <div class="btn-perfil">
        <button id="btn-cuota"><p>Cuotas</p></button>
        <button id="btn-reserva"><p>Reservas</p></button>
        <button id="btn-informacion" disabled><p>Información</p></button>   
        <button id="btn-cerrar"><p>Cerrar Sesión</p></button> 
    </div>         
    `

    return section;
}