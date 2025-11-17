
document.querySelectorAll(".toggle-meta").forEach(btn => {
  btn.addEventListener("click", function() {
    const metaCard = this.closest(".card");
    const habitos = metaCard.querySelector(".habitos-meta");

    if (habitos.style.display === "none") {
      habitos.style.display = "block";
      this.innerHTML = `<i data-lucide="chevron-up"></i>`;
    } else {
      habitos.style.display = "none";
      this.innerHTML = `<i data-lucide="chevron-down"></i>`;
    }

    lucide.createIcons();
  });
});
