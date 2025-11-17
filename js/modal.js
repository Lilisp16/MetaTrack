//  script para el modal
// Este script maneja todo lo del modal: abrir, cerrar, seleccionar emojis y agregar un objetivo
//lo uso para los 3 modales agregar objetivo metas y habitos
//agrega una variable para saber si el modal está en modo META o OBJETIVO

      let modo = "objetivo";
      let cardObjetivoSeleccionada = null;


//  Cargar modal.html solo una vez y ponerlo en el contenedor
fetch('modal.html')
  .then(response => response.text())
  .then(html => {
      document.getElementById('contenedorModal').innerHTML = html;

      //  Inicializar el modal de Bootstrap
      const modalElemento = document.getElementById("miModal");
      const modalBootstrap = new bootstrap.Modal(modalElemento);
      const btnNuevoObjetivo = document.getElementById("btnNuevoObjetivo");

      // Botón en index.html que abre el modal
      btnNuevoObjetivo.addEventListener("click", () => {
          modalBootstrap.show();

          // Resetear input y botón cada vez que se abre el modal
          const inputTitulo = modalElemento.querySelector('input[type="text"]');
          const btnAgregar = modalElemento.querySelector('.btnAgregar');
          inputTitulo.value = '';
          btnAgregar.disabled = true;

          //  Deseleccionar cualquier emoji seleccionado al abrir
          const emojis = modalElemento.querySelectorAll('.emoji-btn');
          emojis.forEach(e => e.classList.remove('selected'));
      });

      //  Activar botón "Agregar Objetivo" solo si hay texto en el input
      const inputTitulo = modalElemento.querySelector('input[type="text"]');
      const btnAgregar = modalElemento.querySelector('.btnAgregar');
      inputTitulo.addEventListener('input', () => {
          btnAgregar.disabled = inputTitulo.value.trim() === '';
      });

      //  Selección de emojis (solo uno puede estar seleccionado)
      const emojis = modalElemento.querySelectorAll('.emoji-btn');
      emojis.forEach(emoji => {
          emoji.addEventListener('click', () => {
              emojis.forEach(e => e.classList.remove('selected'));
              emoji.classList.add('selected');
          });
      });

      
      
  });
