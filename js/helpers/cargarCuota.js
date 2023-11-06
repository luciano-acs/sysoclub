export const CargarCuota = () => {

    const tableCuotas = document.querySelector('#table');
    const body = tableCuotas.querySelector('#table-body');

    let cantidadFilas = tableCuotas.rows.length;
    if (cantidadFilas >= 12) {
        forEach(body.childNodes, (child) => {
            body.removeChild(child);
        });
    }

    const socioActual = JSON.parse(localStorage.getItem('socioDatos'));

    socioActual.cuotas.forEach((cuota) => {
        const fila = document.createElement('tr');

        const conceptoCelda = document.createElement('td');
        conceptoCelda.innerHTML = `${cuota.concepto}`
        fila.appendChild(conceptoCelda);

        const mesCelda = document.createElement('td');
        mesCelda.innerHTML = `${cuota.mes}`
        fila.appendChild(mesCelda);

        const valorCelda = document.createElement('td');
        valorCelda.innerHTML = `${cuota.valor}`
        fila.appendChild(valorCelda);

        const añoCelda = document.createElement('td');
        añoCelda.innerHTML = `${cuota.año}`
        fila.appendChild(añoCelda);

        const fechaCelda = document.createElement('td');
        fechaCelda.innerHTML = `${cuota.fecha}`
        fila.appendChild(fechaCelda);

        const pagadoCelda = document.createElement('td');
        if (cuota.estado === 'pendiente') {
            pagadoCelda.innerHTML = `-`
            fila.appendChild(pagadoCelda);
        } else {
            pagadoCelda.innerHTML = `${cuota.pagado}`;
            fila.appendChild(pagadoCelda);
        }

        const fechaPagoCelda = document.createElement('td');
        if(cuota.estado === 'pendiente') {
            fechaPagoCelda.innerHTML = `-`
            fila.appendChild(fechaPagoCelda);
        }else{
            fechaPagoCelda.innerHTML = cuota.fechaPago;
            fila.appendChild(fechaPagoCelda);
        }

        const estadoCelda = document.createElement('td');
        if (cuota.estado === 'pendiente') {
            estadoCelda.innerHTML = `<i class="fa-solid fa-exclamation"></i>`
            fila.appendChild(estadoCelda);

            const btnsCelda = document.createElement('td');
            btnsCelda.innerHTML = `<button class="btn-pagar">Pagar</button>`;
            fila.appendChild(btnsCelda);
        } else {
            estadoCelda.innerHTML = `<i class="fa-solid fa-check"></i>`
            fila.appendChild(estadoCelda);

            const btnsCelda = document.createElement('td');
            btnsCelda.innerHTML = `<button class="btn-pagar">Pagar</button>`;
            btnsCelda.querySelector('.btn-pagar').setAttribute('disabled', 'disabled');
            fila.appendChild(btnsCelda);
        }        

        body.appendChild(fila);
    });

    const impuestos = (mesCuota) => {
        let mesActual = new Date().getMonth();
        let impuesto = (mesActual - mesCuota) * 200;

        if(impuesto < 0) {
            impuesto = 0;
        }else{
            impuesto = impuesto;
        }
        return impuesto;
    }


    const btnPagar = document.querySelectorAll('.btn-pagar');
    btnPagar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let fila = btn.parentNode.parentNode;
            let celdaEstado = fila.cells[7];
            celdaEstado.innerHTML = `<i class="fa-solid fa-check"></i>`;
            let celdaPagado = fila.cells[5];
            celdaPagado.innerHTML = `$${2000+impuestos(fila.cells[1].innerHTML)}`;
            let fechaPago = fila.cells[6];
            let fecha = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
            fechaPago.innerHTML = fecha;

            btn.setAttribute('disabled', 'disabled');

            socioActual.cuotas.forEach(cuota => {
                
                if (cuota.concepto === fila.cells[0].innerHTML) {
                    cuota.estado = 'pagada';
                    cuota.pagado = celdaPagado.innerHTML;
                    cuota.fechaPago = fecha;
                }
                if(cuota.estado === 'pagado') {
                    cantidadCuotasPagas++;
                }
            });

            localStorage.setItem('socioDatos', JSON.stringify(socioActual));
            console.log(socioActual.cuotas)
        });
    });
}