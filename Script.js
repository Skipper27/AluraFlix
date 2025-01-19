// Asegúrate de que el DOM esté completamente cargado antes de ejecutar este script
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar el botón de subir video
  const uploadButton = document.getElementById("uploadVideoButton");

  // Añadir el evento de clic al botón
  uploadButton.addEventListener("click", () => {
    const category = prompt("¿A qué categoría pertenece el video? (Supermoto, Mecánica, Cosas Varias)").toLowerCase();
    const videoUrl = prompt("Ingresa la URL del video (enlace directo o recurso local):");
    const videoTitle = prompt("Ingresa el título del video:");

    if (videoUrl && videoTitle) {
      addVideoToCategory(category, videoUrl, videoTitle);
    } else {
      alert("Por favor, ingresa un URL y título válidos.");
    }
  });
});

// Función para añadir un video a la categoría seleccionada
function addVideoToCategory(category, url, title) {
  const videoContainer = document.createElement("div");
  videoContainer.className = "video-card";

  const video = document.createElement("iframe");
  video.src = url;
  video.allowFullscreen = true;

  const titleElement = document.createElement("p");
  titleElement.textContent = title;

  videoContainer.appendChild(video);
  videoContainer.appendChild(titleElement);

  const categoryId = mapCategoryToId(category);

  if (categoryId) {
    const categorySection = document.getElementById(categoryId);
    if (categorySection) {
      categorySection.querySelector(".videos").appendChild(videoContainer);
      alert(`Video añadido correctamente a la categoría: ${category}`);
    } else {
      alert("La categoría no existe en la página.");
    }
  } else {
    alert("Categoría no válida. Intenta con las categorías existentes.");
  }
}

// Función para mapear el nombre de la categoría al ID correspondiente
function mapCategoryToId(category) {
  switch (category) {
    case "supermoto":
      return "supermoto";
    case "mecanica":
      return "mecanica";
    case "cosas varias":
      return "cosasVarias";
    default:
      return null;
  }
}
