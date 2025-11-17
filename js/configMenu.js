// *Capturamos el contenedor donde se agregan las tarjetas dinámicamente
const listaObjetivos = document.getElementById("listaObjetivos");

// *Listener delegado para botones de configuración para que funcione card estatica y nueva
listaObjetivos.addEventListener("click", (e) => {

  // *Verificamos si el clic fue en un botón con clase .config (o dentro de su icono <i>)
  const btnConfig = e.target.closest(".config");
  if (!btnConfig) return; // Si no fue un botón config, no hacemos nada

  // *Evitar que el clic se propague al document (para que no se cierre inmediatamente)
  e.stopPropagation();

  // *Encontrar la card contenedora (la tarjeta padre con clase .objetivo-card)
  const card = btnConfig.closest(".objetivo-card");
  if (!card) return;

  // *Buscar el menú dentro de esa card
  const menu = card.querySelector(".menuConfig");
  if (!menu) {
    console.warn("No se encontró menuConfig en esta card");
    return;
  }

  // *Alternar visibilidad del menú actual (mostrar/ocultar)
  const isVisible = menu.style.display === "block";
  menu.style.display = isVisible ? "none" : "block";

  // *Cerrar otros menús abiertos (solo los de otras cards)
  document.querySelectorAll(".menuConfig").forEach(otherMenu => {
    if (otherMenu !== menu) otherMenu.style.display = "none";
  });
});


// *Listener global para cerrar menús al hacer clic afuera

document.addEventListener("click", (e) => {
  document.querySelectorAll(".menuConfig").forEach(menu => {
    // Solo cerramos si el clic NO fue dentro del menú
    if (!menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });
});