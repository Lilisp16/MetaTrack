function actualizarEstadoObjetivo() {
  const objetivo = document.querySelector(".objetivo-card");
  const progreso = parseInt(objetivo.getAttribute("data-progress"));

  objetivo.classList.remove("estado-0", "estado-progreso", "estado-completo");

  if (progreso === 0) {
    objetivo.classList.add("estado-0");             // azul suave
  } 
  else if (progreso === 100) {
    objetivo.classList.add("estado-completo");      // verde suave
  }
  else {
    objetivo.classList.add("estado-progreso");      // morado suave
  }
}

actualizarEstadoObjetivo();
