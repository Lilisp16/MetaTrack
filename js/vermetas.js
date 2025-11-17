// eventos para "Ver Metas"
// Funciona para cards creadas en HTML y también para las agregadas por JS
document.addEventListener("click", (e) => {
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
});

