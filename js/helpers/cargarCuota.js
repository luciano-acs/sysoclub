export const CargarCuota = () => {

    // Este codigo permite cargar las cuotas del socio actual en el DOM. Tambien permite pagar las cuotas pendientes y mostrar el comprobante de pago. Se realizan los calculos de los impuestos correspondientes ante el caso de que se abone cuotas atrasadas.

    const tableCuotas = document.querySelector('#table');
    const body = tableCuotas.querySelector('#table-body');

    // Fragmento para evitar duplicacion de filas
    let cantidadFilas = tableCuotas.rows.length;
    if (cantidadFilas >= 12) {
        forEach(body.childNodes, (child) => {
            body.removeChild(child);
        });
    }

    const socioActual = JSON.parse(localStorage.getItem('socioDatos'));

    // Carga de datos en la tabla de acuerdo a las cuotas del socio actual
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

        const valorCelda = document.createElement('td');
        valorCelda.innerHTML = `${cuota.valor}`
        fila.appendChild(valorCelda);        

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
            btnsCelda.innerHTML = `<button class="btn-pagar">Pagado</button>`;
            btnsCelda.querySelector('.btn-pagar').setAttribute('disabled', 'disabled');
            fila.appendChild(btnsCelda);
        }        

        body.appendChild(fila);
    });

    // Funcion para calcular los impuestos de las cuotas atrasadas
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

    // Funcion para pagar las cuotas pendientes
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
            });

            Swal.fire({
                icon: 'success',
                title: 'Cuota pagada',
                text: `Se pago la cuota del periodo ${fila.cells[1].innerHTML}/${fila.cells[2].innerHTML}
                por un valor de ${fila.cells[5].innerHTML}.\nNumero de comprobante: 0000002023${Math.floor(Math.random()*90)+10}`,
            })

            btn.innerHTML = 'Pagado';
            localStorage.setItem('socioDatos', JSON.stringify(socioActual));
        });
    });
}