// Seleccionamos todos los checkbox que están dentro de un div con clase "hover-habit"
document.querySelectorAll(".hover-habit input[type='checkbox']").forEach(check => {

    // Agregamos un "listener" a cada checkbox que detecta cuando cambia su estado (marcado o desmarcado)
    check.addEventListener("change", function () {

        // Buscamos el div más cercano que tenga la clase "hover-habit"
        // Esto es para saber cuál contenedor corresponde a este checkbox
        const contenedor = this.closest(".hover-habit");

        // Si el checkbox está marcado, agregamos la clase "completed" al contenedor
        // Esto sirve para cambiar el estilo del objetivo (por ejemplo: verde y tachado)
        if (this.checked) {
            contenedor.classList.add("completed");

        // Si el checkbox se desmarca, quitamos la clase "completed"
        // Así el objetivo vuelve a su estilo normal
        } else {
            contenedor.classList.remove("completed");
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
  // Listener para abrir/cerrar menú y manejar botones
  document.addEventListener("click", e => {
      const btnConfig = e.target.closest(".config");

      // Se presiona botón config
      if (btnConfig) {
          const card = btnConfig.closest(".objetivo-card");
          const menu = card.querySelector(".menuConfig");

          // Ocultar todos los menús excepto este
          document.querySelectorAll(".menuConfig").forEach(m => {
              if (m !== menu) m.style.display = "none";
          });

          // Alternar visibilidad del menú actual
          if (menu) {
                menu.style.display = menu.style.display === "none" ? "block" : "none";
            } else {
                console.warn("No se encontró menuConfig en esta card");
            }
      }

      // Se presiona "Agregar Meta"
      if (e.target.closest(".agregarMetaBtn")) {
          const card = e.target.closest(".objetivo-card");
          console.log("Abrir modal para agregar meta en:", card);
          // Aquí llamas a la función que abre el modal de agregar meta
          return;
      }

      // Se presiona "Eliminar objetivo"
      if (e.target.closest(".eliminarObjetivoBtn")) {
          const card = e.target.closest(".objetivo-card");
          card.remove(); // elimina la card completa
          return;
      }

      // Cerrar menús si clic afuera
      document.querySelectorAll(".menuConfig").forEach(m => {
          if (!e.target.closest(".menuConfig")) m.style.display = "none";
      });
  });
});



