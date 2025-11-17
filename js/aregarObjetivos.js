document.addEventListener('DOMContentLoaded', () => {
  const modalElemento = document.getElementById("miModal");
  const btnAgregar = modalElemento?.querySelector('.btnAgregar');
  const inputTitulo = modalElemento?.querySelector('input[type="text"]');
  const emojis = modalElemento?.querySelectorAll('.emoji-btn');
  const contenedorObjetivos = document.getElementById('listaObjetivos');

  if (!modalElemento || !btnAgregar) return;

  // *Listener para agregar objetivo
  btnAgregar.addEventListener('click', () => {
    const texto = inputTitulo.value.trim();
    const emojiSeleccionado = modalElemento.querySelector('.emoji-btn.selected');

    if (!texto || !emojiSeleccionado) {
      alert("Por favor escribe un título y selecciona un emoji 😅");
      return;
    }

    // *Crear nueva card
    const nuevaCard = document.createElement('div');
    nuevaCard.classList.add('card', 'p-3', 'mb-3', 'cardProgreso', 'objetivo-card');
    nuevaCard.setAttribute('data-progress', '0');

    // HTML completo de la tarjeta, incluyendo el menú oculto
    nuevaCard.innerHTML = `
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div>
          <div class="d-flex align-items-center">
            <p class="card-title mb-0">${emojiSeleccionado.textContent} ${texto}</p>
          </div>
          <small class="text-muted ms-4">0 metas • 0 hábitos</small>
        </div>
        <button class="btn btn-light btn-sm config">
          <i data-lucide="more-vertical"></i>
        </button>
      </div>

      <!-- Menú oculto dentro de la card -->
      <div class="menuConfig card p-2 sombra-suave" style="display:none; position:absolute; right:10px; top:40px; z-index:10;">
        <button class="btn btn-link text-violet agregarMetaBtn">➕ Agregar Meta</button>
        <button class="btn btn-link text-danger eliminarObjetivoBtn">🗑 Eliminar objetivo</button>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="circle-progress">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path class="circle-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path class="circle" stroke-dasharray="0, 100"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <text x="18" y="20" class="percentage">0%</text>
          </svg>
        </div>
        <div class="text-end">
          <button class="btn btn-link p-0 verMetas">Ver Metas <i data-lucide="chevron-down"></i></button>
          <br>
          <small class="text-muted">0/0 completados</small>
        </div>
      </div>

      <div class="listaMetas" style="display: none;"></div>
    `;

    // *Agregar card al contenedor
    contenedorObjetivos.appendChild(nuevaCard);

    // *Cerrar modal y resetear
    const modalBootstrap = bootstrap.Modal.getInstance(modalElemento);
    modalBootstrap.hide();
    inputTitulo.value = '';
    btnAgregar.disabled = true;
    emojis.forEach(e => e.classList.remove('selected'));

    // *Reconstruir iconos Lucide en la nueva tarjeta
    lucide.createIcons();
  });
});
