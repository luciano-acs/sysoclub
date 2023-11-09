export const Informacion = () =>{
    const section = document.createElement('section');
    section.setAttribute('class', 'informacion');


    section.innerHTML = `
    <h2>Información</h2>
    <h3>¿Cómo reservar?</h3>
    <p>Para realizar una reserva, debe seleccionar el lugar, la fecha y el horario que desea reservar.
    <h3>¿Cómo pagar?</h3>
    <p>Para pagar una cuota, debe seleccionar el mes y el año de la cuota que desea pagar.
    <h3>Observaciones</h3>
    <ul>
        <li>
            Para mantener su membresia en estado activo debe estar al dia con el pago de las cuotas.
        </li>
        <li>
            Solo pueden reservar los socios activos. Ademas, solo pueden tener 3 reservas activas por socio.
        </li>
    </ul>`;

    return section;
}