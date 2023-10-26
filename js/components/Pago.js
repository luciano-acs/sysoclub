export const Pago = () => {
    let section = document.createElement('section');
    section.setAttribute('class','pagos');

    section.innerHTML = 
    `
    <table class="table" id="table">
                    <thead>
                        <tr>
                            <th scope="col">Cuota</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Año</th>
                            <th scope="col">Vencimiento</th>
                            <th scope="col">Estado</th>
                            <th scope="acciones">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="table-body" id="table-body">
                        <!-- <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> -->
                    </tbody>
                </table>
    `

    return section;
}