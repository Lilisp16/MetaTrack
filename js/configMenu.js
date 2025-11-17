document.addEventListener("click", e => {
    const btnConfig = e.target.closest(".config");

    // Se presiona botón config
    if (btnConfig) {
        const card = btnConfig.closest(".objetivo-card");
        const menu = card.querySelector(".menuConfig");

        // Ocultar todos los menús
        document.querySelectorAll(".menuConfig").forEach(m => {
            if (m !== menu) m.style.display = "none";
        });

        // Alternar este menú. Mostrar y ocultar menu
        if (menu) {
            menu.style.display = menu.style.display === "none" ? "block" : "none";
        } else {
            console.warn("No se encontró menuConfig en esta card");
        }

    }

    // Cerrar si clic fuera del menu
    document.querySelectorAll(".menuConfig").forEach(m => {
        if (!e.target.closest(".menuConfig")) m.style.display = "none";
    });
});
