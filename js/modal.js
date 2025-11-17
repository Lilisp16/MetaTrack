// Script para el modal para Objetivos, Metas y Hábitos
// Maneja abrir, cerrar, seleccionar emojis y reutilizar el mismo modal


let modo = "objetivo";              // puede ser "objetivo", "meta" o "habito"
let cardObjetivoSeleccionada = null; // tarjeta padre donde se insertará meta/hábito

// *Cargar modal.html solo una vez y ponerlo en el contenedor
fetch('modal.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('contenedorModal').innerHTML = html;

    // *Inicializar el modal 
    const modalElemento = document.getElementById("miModal");
    const modalBootstrap = new bootstrap.Modal(modalElemento);
    const btnNuevoObjetivo = document.getElementById("btnNuevoObjetivo");

  
    // *Función para configurar el modal según la  fucion Objetivos Metas o Habitos
  
    function configurarModal(tipo) {
      modo = tipo; // guardamos el modo actual

      const titulo = modalElemento.querySelector("#modalTitulo");
      const descripcion = modalElemento.querySelector("#modalDescripcion");
      const label = modalElemento.querySelector("#modalLabel");
      const input = modalElemento.querySelector("#modalInput");
      const boton = modalElemento.querySelector("#modalBoton");

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

  
    // *Botón en index.html que abre el modal para Objetivo

    btnNuevoObjetivo.addEventListener("click", () => {
      configurarModal("objetivo"); // configuramos modo objetivo
      modalBootstrap.show();

      // *Resetear input y botón cada vez que se abre el modal
      const inputTitulo = modalElemento.querySelector('input[type="text"]');
      const btnAgregar = modalElemento.querySelector('.btnAgregar');
      inputTitulo.value = '';
      btnAgregar.disabled = true;

      // *Deseleccionar cualquier emoji seleccionado al abrir
      const emojis = modalElemento.querySelectorAll('.emoji-btn');
      emojis.forEach(e => e.classList.remove('selected'));
    });

  
    // *Activar botón "Agregar" solo si hay texto en el input
 
    const inputTitulo = modalElemento.querySelector('input[type="text"]');
    const btnAgregar = modalElemento.querySelector('.btnAgregar');
    inputTitulo.addEventListener('input', () => {
      btnAgregar.disabled = inputTitulo.value.trim() === '';
    });

  
    // *Selección de emojis (solo uno puede estar seleccionado)

    const emojis = modalElemento.querySelectorAll('.emoji-btn');
    emojis.forEach(emoji => {
      emoji.addEventListener('click', () => {
        emojis.forEach(e => e.classList.remove('selected'));
        emoji.classList.add('selected');
      });
    });


  });