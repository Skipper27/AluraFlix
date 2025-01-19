document.getElementById("uploadVideoButton").addEventListener("click", () => {
  const category = prompt("¿A qué categoría pertenece el video?");
  const videoUrl = prompt("Ingresa la URL del video (TikTok o enlace directo):");
  const videoTitle = prompt("Ingresa el título del video:");

  if (category && videoUrl && videoTitle) {
    addVideoToCategory(category.trim(), videoUrl.trim(), videoTitle.trim());
  } else {
    alert("Por favor, ingresa todos los datos correctamente.");
  }
});

function addVideoToCategory(category, videoUrl, videoTitle) {
  const categoriesContainer = document.getElementById("categories");

  // Buscar si ya existe la categoría
  let categorySection = document.querySelector(`[data-category="${category}"]`);

  // Si la categoría no existe, se crea
  if (!categorySection) {
    categorySection = document.createElement("div");
    categorySection.className = "category";
    categorySection.dataset.category = category;

    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "category-title";
    categoryTitle.textContent = category;

    const categoryDescription = document.createElement("p");
    categoryDescription.textContent = `Videos en la categoría: ${category}.`;

    const videosContainer = document.createElement("div");
    videosContainer.className = "videos";

    categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryDescription);
    categorySection.appendChild(videosContainer);
    categoriesContainer.appendChild(categorySection);
  }

  // Crear el contenedor del video
  const videosContainer = categorySection.querySelector(".videos");
  const videoContainer = document.createElement("div");
  videoContainer.className = "video-card";

  // Crear el iframe para el video
  const video = document.createElement("iframe");
  video.src = videoUrl;
  video.allowFullscreen = true;

  // Agregar el título del video
  const titleElement = document.createElement("p");
  titleElement.textContent = videoTitle;

  // Añadir el video y el título al contenedor
  videoContainer.appendChild(video);
  videoContainer.appendChild(titleElement);

  // Añadir el contenedor del video a la sección correspondiente
  videosContainer.appendChild(videoContainer);

  alert(`Video añadido correctamente a la categoría: ${category}`);
}
