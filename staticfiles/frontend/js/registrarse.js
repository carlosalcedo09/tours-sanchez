function toggleForm(formClass) {
      const form = document.querySelector(`.${formClass}`);
      if (!form) return;
      if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'grid';
      } else {
        form.style.display = 'none';
      }
    }

    function togglePermisoNotarial() {
      const acompananteSelect = document.getElementById('acompanante');
      const permisoContainer = document.getElementById('permiso-notarial-container');
      if (acompananteSelect.value === 'Apoderado' || acompananteSelect.value === 'Familiar') {
        permisoContainer.style.display = 'block';
      } else {
        permisoContainer.style.display = 'none';
      }
    }

    function checkEdad() {
      const fechaNacInput = document.getElementById('fecha-nac');
      const menorContainer = document.querySelector('.menor-container');
      const menorForm = document.querySelector('.menor-form');
      if (!fechaNacInput.value) {
        menorContainer.style.display = 'none';
        menorForm.style.display = 'none';
        return;
      }
      const hoy = new Date();
      const fechaNac = new Date(fechaNacInput.value);
      let edad = hoy.getFullYear() - fechaNac.getFullYear();
      const m = hoy.getMonth() - fechaNac.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
      }
      if (edad < 18) {
        menorContainer.style.display = 'block';
        menorForm.style.display = 'grid';
      } else {
        menorContainer.style.display = 'none';
        menorForm.style.display = 'none';
      }
    }