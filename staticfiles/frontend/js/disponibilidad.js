    const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab'];

    const datesContainer = document.getElementById('datesContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const fechaValue = document.getElementById('fechaValue');

    const visibleCount = 7;
    const centerIndex = Math.floor(visibleCount / 2);

    let currentStartDate = new Date();
    currentStartDate.setHours(0, 0, 0, 0);
    currentStartDate.setDate(currentStartDate.getDate() - centerIndex);

    let selectedDate = new Date();
    selectedDate.setHours(0, 0, 0, 0);

    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    function generateDates(startDate, count) {
      const dates = [];
      for (let i = 0; i < count; i++) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + i);
        dates.push(d);
      }
      return dates;
    }

    function isSameDay(a, b) {
      return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
      );
    }

    function formatFechaValue(date) {
      // Format as "04 Mayo" with capitalized month
      const day = pad(date.getDate());
      const month = date.toLocaleString('es-ES', { month: 'long' });
      return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
    }

    function renderDates(startDate) {
      datesContainer.innerHTML = '';
      const dates = generateDates(startDate, visibleCount);
      dates.forEach((date, index) => {
        const day = pad(date.getDate());
        const month = date.toLocaleString('es-ES', { month: 'short' }).toLowerCase();
        const weekday = weekdays[date.getDay()];
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        if (isSameDay(date, selectedDate)) {
          dateDiv.classList.add('selected');
          // Update the top bar Fecha value when selected date changes
          fechaValue.textContent = formatFechaValue(date);
        }
        if (index === centerIndex) {
          dateDiv.classList.add('border-sides');
        }
        dateDiv.setAttribute('tabindex', '0');
        dateDiv.setAttribute(
          'aria-label',
          `Fecha ${day} de ${month}, día ${weekday}`
        );
        dateDiv.innerHTML = `
          <span class="day">${day}</span>
          <div class="right-col">
            <span class="month">${month}</span>
            <span class="weekday">${weekday}</span>
          </div>
        `;
        // Click event to select date and center it
        dateDiv.addEventListener('click', () => {
          selectedDate = new Date(date);
          currentStartDate = new Date(date);
          currentStartDate.setDate(currentStartDate.getDate() - centerIndex);
          renderDates(currentStartDate);
        });
        datesContainer.appendChild(dateDiv);
      });
    }

    renderDates(currentStartDate);

    prevBtn.addEventListener('click', () => {
      currentStartDate.setDate(currentStartDate.getDate() - 1);
      selectedDate = new Date(currentStartDate);
      selectedDate.setDate(selectedDate.getDate() + centerIndex);
      renderDates(currentStartDate);
    });

    nextBtn.addEventListener('click', () => {
      currentStartDate.setDate(currentStartDate.getDate() + 1);
      selectedDate = new Date(currentStartDate);
      selectedDate.setDate(selectedDate.getDate() + centerIndex);
      renderDates(currentStartDate);
    });
