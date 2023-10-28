export const CargarCuota = (props) => {

    let { socios, appRoot } = props;

    const tableCuotas = document.querySelector('#table');
    const body = tableCuotas.querySelector('#table-body');

    let cantidadFilas = tableCuotas.rows.length;
    if (cantidadFilas >= 12) {
        forEach(body.childNodes, (child) => {
            body.removeChild(child);
        });
    }

    const socioActual = socios.find(socio => socio.usuario === JSON.parse(localStorage.getItem('socioDatos')).usuario);

    socioActual.cuotas.forEach((cuota) => {
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
        btnsCelda.innerHTML = `<button class="btn-pagar">Pagar</button>`;
        fila.appendChild(btnsCelda);

        body.appendChild(fila);
    });

    const btnPagar = document.querySelectorAll('.btn-pagar');
    btnPagar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e.target);
            let fila = btn.parentNode.parentNode;
            let celdaEstado = fila.cells[4];
            celdaEstado.innerHTML = `<i class="fa-solid fa-check"></i>`;
            btn.setAttribute('disabled', 'disabled');

            socios.forEach(socio => {
                if (socio === socioActual) {
                    socio.cuotas.forEach(cuota => {
                        if (cuota.concepto === fila.cells[0].innerHTML) {
                            cuota.estado = 'pagada';
                        }
                    });
                }
            });
        });
    });
}