/**
 * Actualizamos la barra de progreso y el círculo de una card específica
 * @param {HTMLElement} card - La card objetivo/meta
 */
function updateProgress(card) {
    // Contar metas y hábitos completados
    const metas = card.querySelectorAll(".meta-card");
    let totalHabitos = 0;
    let habitosCompletados = 0;

    metas.forEach(meta => {
        const habitos = meta.querySelectorAll(".habit-item input[type='checkbox']");
        totalHabitos += habitos.length;

        habitos.forEach(h => {
            if (h.checked) habitosCompletados++;
        });
    });

    // Evitar división por cero
    const percent = totalHabitos === 0 ? 0 : (habitosCompletados / totalHabitos) * 100;

    // Actualizar barra lineal
    const barra = card.querySelector(".progress-bar");
    if (barra) barra.style.width = percent + "%";

    // Actualizar círculo
    const circle = card.querySelector(".circle");
    if (circle) circle.setAttribute("stroke-dasharray", percent + ", 100");

    // Actualizar texto del círculo
    const texto = card.querySelector(".percentage");
    if (texto) texto.textContent = Math.round(percent) + "%";

    // Actualizar contador de hábitos en la card
    const contador = card.querySelector(".text-muted");
    if (contador) contador.textContent = `${habitosCompletados}/${totalHabitos} completados`;
}

/**
 * Inicializa la actualización de todas las cards
 */
function initProgress() {
    const cards = document.querySelectorAll(".objetivo-card");

    cards.forEach(card => {
        updateProgress(card);

        // Detectar cambios en los checkboxes de hábitos
        const habitos = card.querySelectorAll(".habit-item input[type='checkbox']");
        habitos.forEach(h => {
            h.addEventListener("change", () => updateProgress(card));
        });
    });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", initProgress);
