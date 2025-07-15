document.addEventListener('DOMContentLoaded', function() {
      const selects = document.querySelectorAll('select');
      if (selects.length >= 2) {
        selects[0].id = 'origen';
        selects[1].id = 'destino';
      }

      const origen = document.getElementById('origen');
      const destino = document.getElementById('destino');
      const ciudades = [
        "Lima", "Ayacucho", "Arequipa", "Abancay", "Ica", "Nazca", "Puquio"
      ];

      // Inicializa opciones de origen con "Seleccione el origen"
      origen.innerHTML = '<option value="" disabled selected>Seleccione el origen</option>' +
        ciudades.map(ciudad => <option value="${ciudad}">${ciudad}</option>).join('');

      function updateDestinoOptions() {
        const selectedOrigen = origen.value;
        destino.innerHTML = '<option value="" disabled selected>Selecciona Destino</option>';
        ciudades.forEach(ciudad => {
          if (ciudad !== selectedOrigen) {
            const opt = document.createElement('option');
            opt.value = ciudad;
            opt.textContent = ciudad;
            destino.appendChild(opt);
          }
        });
      }

      // Actualiza las opciones de destino cuando cambia el origen
      origen.addEventListener('change', updateDestinoOptions);

    }); // <-- Cierra el primer DOMContentLoaded

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío normal del formulario

        const selects = form.querySelectorAll('select');
        const inputs = form.querySelectorAll('input');

        const data = {
            origen: selects[0].value,
            destino: selects[1].value,
            fecha_salida: inputs[0].value,
            pasajeros: parseInt(inputs[1].value)
        };

        console.log("Formulario enviado. JSON:", data);
        window.location.href = `/disponibilidad/?${queryString}`;
    });
});