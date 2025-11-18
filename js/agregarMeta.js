//   FUNCIÓN PARA AGREGAR META
document.addEventListener('DOMContentLoaded', () => {

  // *Definimos la función global que será llamada desde modal.js
  window.agregarMeta = function() {
    const tituloMeta = window.inputTitulo.value.trim();
    const emojiSeleccionado = document.querySelector('#miModal .emoji-btn.selected');

    // *Validación: título y emoji
   /* if (!tituloMeta || !emojiSeleccionado) {
      alert("Por favor escribe un título y selecciona un emoji");
      return;
    }*/

    // *Obtener la card objetivo seleccionada (se guarda en window.cardObjetivoSeleccionada)
    const cardObjetivo = window.cardObjetivoSeleccionada;
    if (!cardObjetivo) {
      console.error("No hay objetivo seleccionado para agregar la meta");
      return;
    }

    // *Crear la card meta con el diseño
    const nuevaMeta = document.createElement("div");
    nuevaMeta.classList.add("card", "p-3", "mt-3", "sombra-suave", "meta-card");
    nuevaMeta.innerHTML = `
      <div class="titulo-meta">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="d-flex align-items-center">
            <button class="btn btn-link p-0 me-2 toggle-meta">
              <i data-lucide="chevron-down"></i>
            </button>
            <p class="card-title mb-0">${emojiSeleccionado.textContent} ${tituloMeta}</p>
          </div>
          <div>
            <button class="btn btn-sm btn-light me-2 fondoBoton agregarHabitoBtn">
              <i data-lucide="plus"></i>
            </button>
            <button class="btn btn-sm btn-light fondoBoton eliminarMetaBtn">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="progress flex-grow-1 me-3" style="height: 8px;">
            <div class="progress-bar" style="width: 0%;"></div>
          </div>
        </div>
        <small class="text-muted mb-2 d-block">0 hábitos</small>
      </div>
      <div class="habitos-meta" style="display: none;"></div>
    `;

    // *Insertar la meta dentro del contenedor de metas del objetivo
    const listaMetas = cardObjetivo.querySelector(".listaMetas");
    listaMetas.style.display = "block";
    listaMetas.appendChild(nuevaMeta);

    // *Actualizar botón Ver Metas
    const botonVerMetas = cardObjetivo.querySelector("button.verMetas");
    if (botonVerMetas) {
      botonVerMetas.innerHTML = `Ocultar <i data-lucide="chevron-up"></i>`;
    }

    // *Reconstruir iconos Lucide
    lucide.createIcons();

    // *Cerrar modal y limpiar
    window.modalBootstrap.hide();
    window.inputTitulo.value = "";
    window.btnAgregar.disabled = true;

    alert("✅Meta agregada con éxito");
  };

});