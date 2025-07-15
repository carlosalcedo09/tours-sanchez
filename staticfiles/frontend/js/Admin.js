  (function () {
      const sidebar = document.getElementById('sidebar');
      const toggleBtn = document.getElementById('toggleBtn');
      const icon = toggleBtn.querySelector('i');
      const mainContent = document.getElementById('mainContent');
      const navLinks = document.querySelectorAll('#sidebarNav a');

      function setExpanded(expanded) {
        if (expanded) {
          sidebar.classList.add('expanded');
          toggleBtn.setAttribute('aria-expanded', 'true');
          icon.classList.remove('fa-chevron-right');
          icon.classList.add('fa-chevron-left');
          navLinks.forEach(link => {
            const span = link.querySelector('span');
            if (span) {
              span.style.opacity = '1';
              span.style.pointerEvents = 'auto';
            }
          });
          sidebar.style.width = '260px';
          mainContent.style.marginLeft = '260px';
        } else {
          sidebar.classList.remove('expanded');
          toggleBtn.setAttribute('aria-expanded', 'false');
          icon.classList.remove('fa-chevron-left');
          icon.classList.add('fa-chevron-right');
          navLinks.forEach(link => {
            const span = link.querySelector('span');
            if (span) {
              span.style.opacity = '0';
              span.style.pointerEvents = 'none';
            }
          });
          sidebar.style.width = '72px';
          mainContent.style.marginLeft = '72px';
        }
      }

      toggleBtn.addEventListener('click', () => {
        setExpanded(!sidebar.classList.contains('expanded'));
      });

      toggleBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBtn.click();
        }
      });

      setExpanded(false);

      function clearActive() {
        navLinks.forEach(link => link.classList.remove('active'));
      }

      const forms = {
        usuario: `
          <div class="user-forms-container">
            <form class="user-data-form" aria-label="Formulario Datos del Usuario" novalidate>
              <h2>Datos del Usuario</h2>
              <div>
                <label for="tipo-documento">Tipo de documento</label>
                <select id="tipo-documento" name="tipo-documento" required>
                  <option value="" disabled selected>Seleccione tipo</option>
                  <option value="dni">DNI</option>
                  <option value="pasaporte">Pasaporte</option>
                  <option value="carnet">Carnet de extranjería</option>
                </select>
              </div>
              <div>
                <label for="numero-documento">Número de documento</label>
                <input type="text" id="numero-documento" name="numero-documento" placeholder="Ingrese número de documento" required />
              </div>
              <div>
                <label for="nombres">Nombres</label>
                <input type="text" id="nombres" name="nombres" placeholder="Ingrese nombres" required />
              </div>
              <div>
                <label for="apellido-paterno">Apellido Paterno</label>
                <input type="text" id="apellido-paterno" name="apellido-paterno" placeholder="Ingrese apellido paterno" required />
              </div>
              <div>
                <label for="apellido-materno">Apellido Materno</label>
                <input type="text" id="apellido-materno" name="apellido-materno" placeholder="Ingrese apellido materno" required />
              </div>
              <div>
                <label for="fecha-nacimiento">Fecha de nacimiento</label>
                <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required />
              </div>
              <div>
                <label for="direccion">Dirección</label>
                <input type="text" id="direccion" name="direccion" placeholder="Ingrese dirección" required />
              </div>
              <div>
                <label for="telefono">Número de teléfono</label>
                <input type="tel" id="telefono" name="telefono" placeholder="+51 955 356 191" />
              </div>
              <div>
                <label for="email-personal">Correo personal</label>
                <input type="email" id="email-personal" name="email-personal" placeholder="personal@correo.com" required />
              </div>
              <div>
                <label for="email-empresa">Correo de la empresa</label>
                <input type="email" id="email-empresa" name="email-empresa" placeholder="empresa@correo.com" required />
              </div>
              <div class="button-row" style="display:flex; gap:20px; margin-top:20px;">
                <button type="button" id="crearDatosBtn">Crear</button>
                <button type="button" id="modificarDatosBtn" disabled>Modificar</button>
              </div>
            </form>

            <form class="user-credentials-form" aria-label="Formulario Crear Usuario y Contraseña" novalidate>
              <h2>Crear Usuario y Contraseña</h2>
              <div>
                <label for="exclusive-usuario-username">Usuario</label>
                <input type="text" id="exclusive-usuario-username" name="exclusive-usuario-username" placeholder="Ingrese usuario" required />
              </div>
              <div>
                <label for="exclusive-usuario-email">Correo electrónico</label>
                <input type="email" id="exclusive-usuario-email" name="exclusive-usuario-email" readonly />
              </div>
              <div>
                <label for="exclusive-usuario-password">Contraseña</label>
                <input type="password" id="exclusive-usuario-password" name="exclusive-usuario-password" placeholder="Ingrese contraseña" required />
              </div>
              <div>
                <label for="exclusive-usuario-password-confirm">Confirmar contraseña</label>
                <input type="password" id="exclusive-usuario-password-confirm" name="exclusive-usuario-password-confirm" placeholder="Confirme contraseña" required />
              </div>
              <div class="button-row" style="display:flex; gap:14px; margin-top:12px; justify-content:center;">
                <button type="button" id="exclusive-crearUsuarioBtn" style="max-width: 100px;">Crear</button>
                <button type="button" id="exclusive-modificarUsuarioBtn" disabled style="max-width: 100px;">Modificar</button>
              </div>
            </form>
          </div>
        `,
     bus: `
          <div id="formbusWrapper" style="width: 100%; max-width: 700px; position: relative;">
            <form id="busForm" class="formbus-container" aria-label="Formulario Crear Bus" novalidate>
              <h2>Crear Bus</h2>
              <div>
                <label for="placa" class="formbus-label">Placa</label>
                <input type="text" id="placa" name="placa" placeholder="ABC-123" required autocomplete="off" class="formbus-input" />
              </div>

              <div>
                <label for="marca" class="formbus-label">Marca</label>
                <select id="marca" name="marca" required class="formbus-select">
                  <option value="" disabled selected>Seleccione marca</option>
                  <option value="mercedes-benz">Mercedes Benz</option>
                  <option value="volvo">Volvo</option>
                  <option value="scania">Scania</option>
                  <option value="man">MAN</option>
                  <option value="iveco">Iveco</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label for="carroceria" class="formbus-label">Carrocería</label>
                <select id="carroceria" name="carroceria" required class="formbus-select">
                  <option value="" disabled selected>Seleccione carrocería</option>
                  <option value="marcopolo">Marcopolo</option>
                  <option value="comil">Comil</option>
                  <option value="vegutzi">Vegutzi</option>
                  <option value="modasa">Modasa</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label for="pisos" class="formbus-label">Pisos</label>
                <select id="pisos" name="pisos" required class="formbus-select">
                  <option value="1" selected>1 Piso</option>
                  <option value="2">2 Pisos</option>
                </select>
              </div>

              <div>
                <label for="asientosPrimerPiso" class="formbus-label">Asientos Piso 1</label>
                <input type="number" id="asientosPrimerPiso" name="asientosPrimerPiso" min="1" placeholder="Cantidad de asientos" required class="formbus-input" />
              </div>

              <div id="formbus-asientosSegundoPisoContainer">
                <label for="asientosSegundoPiso" class="formbus-label">Asientos Piso 2</label>
                <input type="number" id="asientosSegundoPiso" name="asientosSegundoPiso" min="1" placeholder="Cantidad de asientos" class="formbus-input" />
              </div>

              <div class="formbus-button-row">
                <button type="submit">Crear</button>
              </div>
            </form>
          </div>
        `,
        asignarAsientos: (data) => {
          const { placa, pisos, asientosPrimerPiso, asientosSegundoPiso, marca, carroceria } = data;
          const filasPrimer = `
            <div>
              <label for="filasPrimer" class="formbus-label">Filas del Primer Piso</label>
              <select id="filasPrimer" class="formbus-select" required>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          `;
          const filasSegundo = pisos === '2' ? `
            <div>
              <label for="filasSegundo" class="formbus-label">Filas del Segundo Piso</label>
              <select id="filasSegundo" class="formbus-select" required>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          ` : '';
          const segundoPisoAsientos = pisos === '2' ? `
            <div>
              <label for="asientosSegundo" class="formbus-label">Asientos de Segundo Piso</label>
              <input type="number" id="asientosSegundo" value="${asientosSegundoPiso || ''}" min="0" placeholder="Cantidad de asientos" class="formbus-input" readonly />
            </div>
          ` : '';
          return `
            <form id="asignarAsientosForm" class="formbus-container" aria-label="Asignar Asientos" novalidate>
              <h2>Asignar asientos</h2>
              <div style="grid-column: 1 / -1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px 24px;">
                <div>
                  <label for="placaBus" class="formbus-label">Placa de Bus</label>
                  <input type="text" id="placaBus" value="${placa}" readonly class="formbus-input" />
                </div>
                <div>
                  <label for="marcaBus" class="formbus-label">Marca</label>
                  <input type="text" id="marcaBus" value="${marca}" readonly class="formbus-input" />
                </div>
                <div>
                  <label for="carroceriaBus" class="formbus-label">Carrocería</label>
                  <input type="text" id="carroceriaBus" value="${carroceria}" readonly class="formbus-input" />
                </div>
                <div>
                  <label for="pisosBus" class="formbus-label">Pisos de autobús</label>
                  <input type="text" id="pisosBus" value="${pisos === '1' ? '1 piso' : '2 pisos'}" readonly class="formbus-input" />
                </div>
                <div>
                  <label for="asientosPrimer" class="formbus-label">Asientos de primer piso</label>
                  <input type="number" id="asientosPrimer" value="${asientosPrimerPiso}" min="0" placeholder="Cantidad de asientos" class="formbus-input" readonly />
                </div>
                ${segundoPisoAsientos}
                ${filasPrimer}
                ${filasSegundo}
              </div>
              <div class="formbus-button-row">
                <button type="submit">Generar Asientos</button>
              </div>
            </form>
          `;
        }
      };

      function loadForm(key, data) {
        if (key === 'asignarAsientos' && data) {
          mainContent.innerHTML = forms.asignarAsientos(data);
          const asignarForm = document.getElementById('asignarAsientosForm');
          asignarForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('Asientos generados con éxito.');
          });
          return;
        }
        if (forms[key]) {
          mainContent.innerHTML = forms[key];
          mainContent.querySelector('form').scrollIntoView({ behavior: 'smooth' });
          mainContent.focus();

          if (key === 'bus') {
            const pisosSelect = document.getElementById('pisos');
            const asientosSegundoPisoContainer = document.getElementById('formbus-asientosSegundoPisoContainer');
            const asientosSegundoPisoInput = document.getElementById('asientosSegundoPiso');
            const busForm = document.getElementById('busForm');

            function toggleSegundoPiso() {
              if (pisosSelect.value === '2') {
                asientosSegundoPisoContainer.style.display = 'block';
                asientosSegundoPisoInput.setAttribute('required', 'required');
              } else {
                asientosSegundoPisoContainer.style.display = 'none';
                asientosSegundoPisoInput.removeAttribute('required');
                asientosSegundoPisoInput.value = '';
              }
            }
            pisosSelect.addEventListener('change', toggleSegundoPiso);
            toggleSegundoPiso();

            busForm.addEventListener('submit', e => {
              e.preventDefault();
              if (!busForm.checkValidity()) {
                busForm.reportValidity();
                return;
              }
              const data = {
                placa: busForm.placa.value.trim(),
                pisos: busForm.pisos.value,
                asientosPrimerPiso: busForm.asientosPrimerPiso.value.trim(),
                asientosSegundoPiso: busForm.asientosSegundoPiso.value.trim(),
                marca: busForm.marca.value,
                carroceria: busForm.carroceria.value
              };
              loadForm('asignarAsientos', data);
            });
          }
          if (key === 'usuario') {
            // Existing usuario form logic if needed
          }
        } else {
          mainContent.innerHTML = '';
        }
      }

      function clearActive() {
        navLinks.forEach(link => link.classList.remove('active'));
      }

      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          clearActive();
          link.classList.add('active');
          const formKey = link.getAttribute('data-form');
          loadForm(formKey);
        });
      });

      // Optionally load default form
      // navLinks[0].click();
    })();