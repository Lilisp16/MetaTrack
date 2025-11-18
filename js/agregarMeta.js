
//   FUNCIÓN PARA AGREGAR META
//  *Listener para abrir modal y agregar meta 
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".agregarMetaBtn");
    if (!btn) return;

    // Guardamos la card objetivo donde se quiere agregar la meta
    cardObjetivoSeleccionada = btn.closest(".objetivo-card");

    if (!cardObjetivoSeleccionada) {
        console.error("❌ No se encontró la card objetivo.");
        return;
    }

    // Abrir modal en modo META
    abrirModal("meta");
});



function agregarMeta() {
    if (!cardObjetivoSeleccionada) {
        console.error("❌ No hay objetivo seleccionado.");
        return;
    }

    // *Obtener valores del modal

  /*  const texto = inputTitulo.value.trim();
    const emojiSeleccionado = document.querySelector('.emoji-btn.selected');*/

     // *Validamos si falta título o emoji

   /* if (!texto || !emojiSeleccionado) {
        alert("Por favor escribe un título y selecciona un emoji 😅");
        return;
    }*/

    // * Crear contenedor de la META 
    const nuevaMeta = document.createElement("div");
    nuevaMeta.classList.add("card", "p-3", "mt-3", "sombra-suave", "meta-card");

    nuevaMeta.innerHTML = `
      <div class="titulo-meta">

        <!-- Fila 1: agregar hábitos -->
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="d-flex align-items-center">
            <button class="btn btn-link p-0 me-2 toggle-meta">
              <i data-lucide="chevron-down"></i>
            </button>
            <p class="card-title mb-0">${emojiSeleccionado.textContent} ${texto}</p>
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

        <!-- Barra de progreso -->
        <div class="d-flex align-items-center mb-2">
          <div class="progress flex-grow-1 me-3" style="height: 8px;">
            <div class="progress-bar" style="width: 0%;"></div>
          </div>
        </div>

        <!-- Contador -->
        <small class="text-muted mb-2 d-block">0 hábitos</small>

      </div>

      <!-- Lista de hábitos (vacía por ahora) -->
      <div class="habitos-meta" style="display: none;"></div>
    `;

    // Obtener contenedor de metas dentro del objetivo
    const listaMetas = cardObjetivoSeleccionada.querySelector(".listaMetas");
    listaMetas.style.display = "block"; // Mostrar si estaba oculto

    listaMetas.appendChild(nuevaMeta);

    //  *Cerrar modal y limpiar 
    modalBootstrap.hide();
    inputTitulo.value = "";
    btnAgregar.disabled = true;
    document.querySelectorAll('.emoji-btn').forEach(e => e.classList.remove('selected'));

    lucide.createIcons();

      // *Mensaje positivo al usuario
  alert("✅ Meta agregada con éxito");

}
