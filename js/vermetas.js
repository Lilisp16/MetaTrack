

// eventos para "Ver Metas"
// Funciona para cards creadas en HTML y también para las agregadas por JS
/*document.addEventListener("click", (e) => {
    const boton = e.target.closest(".verMetas");
    if (!boton) return;

    const card = boton.closest(".objetivo-card");
    const listaMetas = card.querySelector(".listaMetas");

    // Mostrar / ocultar metas
    if (listaMetas.style.display === "none" || listaMetas.style.display === "") {
        listaMetas.style.display = "block";
        boton.innerHTML = `Ocultar <i data-lucide="chevron-up"></i>`;
    } else {
        listaMetas.style.display = "none";
        boton.innerHTML = `Ver Metas <i data-lucide="chevron-down"></i>`;
    }

    // Actualizar iconos de lucide
    lucide.createIcons(); 
});  */



console.log("✅ vermetas.js cargado en navegador");

document.addEventListener("click", (e) => {
  const boton = e.target.closest("button.verMetas");
  if (!boton) return;

  console.log("✅ Click en Ver Metas:", boton);

  const card = boton.closest(".objetivo-card");
  const listaMetas = card?.querySelector(".listaMetas");

  if (!listaMetas) {
    console.warn("⚠️ No se encontró .listaMetas en la card");
    return;
  }

  // Mostrar u ocultar
  if (listaMetas.style.display === "none" || listaMetas.style.display === "") {
    listaMetas.style.display = "block";
    boton.innerHTML = `Ocultar <i data-lucide="chevron-up"></i>`;
  } else {
    listaMetas.style.display = "none";
    boton.innerHTML = `Ver Metas <i data-lucide="chevron-down"></i>`;
  }

  // Reconstruir íconos
  lucide.createIcons();

  // Traza para confirmar estado final
  console.log("📂 Estado final listaMetas:", listaMetas.style.display);
});

