// * Variables globales compartidas
window.modo = "objetivo";               // puede ser "objetivo", "meta" o "habito"
window.cardObjetivoSeleccionada = null; // tarjeta padre donde se insertará meta/hábito

// *Cargar modal.html solo una vez y ponerlo en el contenedor
fetch('modal.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('contenedorModal').innerHTML = html;

    // *Inicializar el modal 
    const modalElemento = document.getElementById("miModal");
    const modalBootstrap = new bootstrap.Modal(modalElemento);
    const btnNuevoObjetivo = document.getElementById("btnNuevoObjetivo");

    const input = modalElemento.querySelector("#modalInput");
    const boton = modalElemento.querySelector("#modalBoton");
    const emojis = modalElemento.querySelectorAll('.emoji-btn');

    // *Obtiene el botón “Agregar” dentro del modal
    const btnAgregar = modalElemento.querySelector(".btnAgregar");
    const inputTitulo = input;

    // *Exponer referencias necesarias al global
    window.modalBootstrap = modalBootstrap;
    window.btnAgregar = btnAgregar;
    window.inputTitulo = inputTitulo;

    // *Función para configurar el modal según la función Objetivos, Metas o Hábitos
    function configurarModal(tipo) {
      window.modo = tipo; // guardamos el modo actual

      const titulo = modalElemento.querySelector("#modalTitulo");
      const descripcion = modalElemento.querySelector("#modalDescripcion");
      const label = modalElemento.querySelector("#modalLabel");

      if (tipo === "objetivo") {
        titulo.textContent = "Agregar Objetivo Principal";
        descripcion.textContent = "Define un objetivo importante que quieras alcanzar.";
        label.textContent = "Título del Objetivo";
        input.placeholder = "Ej: Comprar una casa, viajar";
        boton.textContent = "Agregar Objetivo";
      } else if (tipo === "meta") {
        titulo.textContent = "Agregar Meta";
        descripcion.textContent = "Define una meta importante para alcanzar tu objetivo.";
        label.textContent = "Título de la Meta";
        input.placeholder = "Ej: Ahorrar para la cuota inicial, estudiar inglés";
        boton.textContent = "Agregar Meta";
      } else if (tipo === "habito") {
        titulo.textContent = "Agregar Hábito";
        descripcion.textContent = "Define un hábito importante para cumplir tu meta.";
        label.textContent = "Nombre del Hábito";
        input.placeholder = "Ej: Ahorrar $500 este mes, correr 3 veces por semana";
        boton.textContent = "Agregar Hábito";
      }
    }

    // *Función para resetear el modal
    function resetModal() {
      inputTitulo.value = '';
      btnAgregar.disabled = true;
      emojis.forEach(e => e.classList.remove('selected'));
    }

    // *Función para abrir el modal en cualquier modo
    function abrirModal(tipo, card) {
      window.modo = tipo;
      window.cardObjetivoSeleccionada = card || null;
      configurarModal(tipo);
      resetModal();
      modalBootstrap.show();
    }

    // *Exponer funciones al global
    window.configurarModal = configurarModal;
    window.resetModal = resetModal;
    window.abrirModal = abrirModal;

    // *Botón en index.html que abre el modal para OBJETIVOS
    btnNuevoObjetivo.addEventListener("click", () => {
      configurarModal("objetivo"); // configuramos modo objetivo
      resetModal();
      modalBootstrap.show();
    });

    // *Activar botón "Agregar" solo si hay texto en el input
    input.addEventListener('input', () => {
      btnAgregar.disabled = input.value.trim() === '';
    });

    // *Selección de emojis (solo uno puede estar seleccionado)
    emojis.forEach(emoji => {
      emoji.addEventListener('click', () => {
        emojis.forEach(e => e.classList.remove('selected'));
        emoji.classList.add('selected');
      });
    });

    // *Cuando se hace clic en "Agregar" dentro del modal, activar cada función
    btnAgregar.addEventListener("click", () => {
      if (window.modo === "objetivo") window.agregarObjetivo?.();
      else if (window.modo === "meta") window.agregarMeta?.();
      else if (window.modo === "habito") window.agregarHabito?.();
    });
  });