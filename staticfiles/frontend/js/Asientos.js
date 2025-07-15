  // Datos de asientos para ambos pisos con grado y piso
  const asientoDatos = [
    // Piso 2 (bus principal)
    { numero: '10', dataSeat: '1A', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '11', dataSeat: '1B', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '12', dataSeat: '2A', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '13', dataSeat: '2B', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '14', dataSeat: '2C', precio: 90, ocupado: true, grado: '160º', piso: 'Segundo nivel' },
    { numero: '15', dataSeat: '3A', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '16', dataSeat: '3B', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '17', dataSeat: '3C', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '18', dataSeat: '4A', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '19', dataSeat: '4B', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '20', dataSeat: '4C', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '21', dataSeat: '5A', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '22', dataSeat: '5B', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '23', dataSeat: '5C', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '24', dataSeat: '6A', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '25', dataSeat: '6B', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    { numero: '26', dataSeat: '6C', precio: 90, ocupado: false, grado: '160º', piso: 'Segundo nivel' },
    // Piso 1 (exclusivo)
    { numero: '1', dataSeat: 'P1-1A', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '2', dataSeat: 'P1-1B', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '3', dataSeat: 'P1-1C', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '4', dataSeat: 'P1-2A', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '5', dataSeat: 'P1-2B', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '6', dataSeat: 'P1-2C', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '7', dataSeat: 'P1-3A', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '8', dataSeat: 'P1-3B', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' },
    { numero: '9', dataSeat: 'P1-3C', precio: 120, ocupado: false, grado: '180º', piso: 'Primer nivel' }
  ];

  // Selección de asientos en el bus visual
  const seatButtons = document.querySelectorAll('.seat, .seat-piso1');
  const asientoNumeroSpan = document.getElementById('asiento-numero');
  const asientoTotalP = document.getElementById('asiento-total');
  const asientoPrecioSpan = document.querySelector('#asiento-precio span');
  const asientoRegistrarBtn = document.getElementById('asiento-registrar');
  const radioCirculo = document.getElementById('radio-circulo');

  let asientosSeleccionados = [];
  let asientoActualIndex = 0;

  // Inicializar botones ocupados y agregar eventos
  seatButtons.forEach(btn => {
    const label = btn.querySelector('label');
    const numero = label ? label.textContent.trim() : '';
    const dataSeat = btn.getAttribute('data-seat');
    const info = asientoDatos.find(a => a.numero === numero && a.dataSeat === dataSeat);
    if (info && info.ocupado) {
      btn.classList.add('asiento-ocupado');
      btn.disabled = true;
    }
    btn.addEventListener('click', () => {
      if (btn.classList.contains('asiento-ocupado')) return;
      const idx = asientosSeleccionados.findIndex(sel => sel.numero === numero && sel.dataSeat === dataSeat);
      if (idx !== -1) {
        asientosSeleccionados.splice(idx, 1);
        if (asientoActualIndex >= asientosSeleccionados.length) {
          asientoActualIndex = Math.max(0, asientosSeleccionados.length - 1);
        }
      } else {
        asientosSeleccionados.push({ numero, dataSeat });
        asientoActualIndex = asientosSeleccionados.length - 1;
      }
      actualizarInfo();
      actualizarResumenDeAsiento();
    });
  });

  // Actualiza el panel de resumen con el asiento actual
  function actualizarResumenDeAsiento() {
    if (asientosSeleccionados.length === 0) {
      document.getElementById('ResumenDeAsiento_seatText').textContent = 'Asiento - Sin selección';
      document.getElementById('ResumenDeAsiento_degreeText').textContent = '---';
      document.getElementById('ResumenDeAsiento_piso').textContent = '---';
      return;
    }
    const asiento = asientosSeleccionados[asientoActualIndex];
    const asientoInfo = asientoDatos.find(a => a.numero === asiento.numero && a.dataSeat === asiento.dataSeat);
    if (asientoInfo) {
      document.getElementById('ResumenDeAsiento_seatText').textContent = `Asiento - ${asientoInfo.numero}`;
      document.getElementById('ResumenDeAsiento_degreeText').textContent = asientoInfo.grado;
      document.getElementById('ResumenDeAsiento_piso').textContent = asientoInfo.piso;
    }
  }

  // Actualiza la info general y el estado visual de los botones
  function actualizarInfo() {
    if (asientosSeleccionados.length === 0) {
      asientoNumeroSpan.textContent = 'Sin selección';
      asientoTotalP.textContent = 'Total de Asientos : 0';
      asientoPrecioSpan.textContent = 'S/0';
      asientoRegistrarBtn.disabled = true;
      radioCirculo.style.display = '';
    } else {
      const asientosOrdenados = asientosSeleccionados
        .slice()
        .sort((a, b) => Number(a.numero) - Number(b.numero))
        .map(a => a.numero);
      asientoNumeroSpan.textContent = `Asiento${asientosSeleccionados.length > 1 ? 's' : ''} Nº ${asientosOrdenados.join(', ')}`;
      asientoTotalP.textContent = `Total de Asientos : ${asientosSeleccionados.length}`;
      let precioTotal = 0;
      asientosSeleccionados.forEach(sel => {
        const asiento = asientoDatos.find(a => a.numero === sel.numero && a.dataSeat === sel.dataSeat);
        if (asiento) precioTotal += asiento.precio;
      });
      asientoPrecioSpan.textContent = `S/${precioTotal}`;
      asientoRegistrarBtn.disabled = false;
      radioCirculo.style.display = 'none';
    }
    // Marcar visualmente los asientos seleccionados
    seatButtons.forEach(btn => {
      const label = btn.querySelector('label');
      const numero = label ? label.textContent.trim() : '';
      const dataSeat = btn.getAttribute('data-seat');
      const seleccionado = asientosSeleccionados.some(sel => sel.numero === numero && sel.dataSeat === dataSeat);
      if (seleccionado) {
        btn.classList.add('asiento-seleccionado');
      } else {
        btn.classList.remove('asiento-seleccionado');
      }
    });
  }

  // Navegar entre asientos seleccionados
  function navegarAsiento(direccion) {
    if (asientosSeleccionados.length === 0) return;
    asientoActualIndex = (asientoActualIndex + direccion + asientosSeleccionados.length) % asientosSeleccionados.length;
    actualizarResumenDeAsiento();
  }

  // Botones de navegación
  document.querySelector('.ResumenDeAsiento_navLeft').addEventListener('click', () => navegarAsiento(-1));
  document.querySelector('.ResumenDeAsiento_navRight').addEventListener('click', () => navegarAsiento(1));

  // Inicializar estado
  actualizarInfo();
  actualizarResumenDeAsiento();
