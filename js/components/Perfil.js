export const Perfil = () => {
    let section = document.createElement('section');
    section.setAttribute('class','perfil');

    section.innerHTML = 
    `    
    <div class="carnetDigital">
        <div class="carnet">
            <div class="item1">SYSOCLUB</div>
            <div class="item2"><img src="${JSON.parse(localStorage.getItem('socioDatos')).foto}"></div>             
            <div class="item3">
            <p>Nombre: ${JSON.parse(localStorage.getItem('socioDatos')).nombre}</p>
            <p>Apellido: ${JSON.parse(localStorage.getItem('socioDatos')).apellido}</p>
            <p>DNI: ${JSON.parse(localStorage.getItem('socioDatos')).dni}</p>
            <p>Inicio de Actividades: ${JSON.parse(localStorage.getItem('socioDatos')).fechaNacimiento}</p>                
            </div>
            <div class="item4">Estado: ${JSON.parse(localStorage.getItem('socioDatos')).estado}</div>
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