const previewOverlay = document.getElementById("imagePreview");
const previewImage = document.getElementById("imagePreviewImg");
const projectImages = document.querySelectorAll(".project-image");

function openImagePreview(sourceImage) {
  if (!previewOverlay || !previewImage) {
    return;
  }

  previewImage.src = sourceImage.src;
  previewImage.alt = sourceImage.alt;
  previewOverlay.classList.add("is-open");
  previewOverlay.setAttribute("aria-hidden", "false");
}

function closeImagePreview() {
  if (!previewOverlay || !previewImage) {
    return;
  }

  previewOverlay.classList.remove("is-open");
  previewOverlay.setAttribute("aria-hidden", "true");
  previewImage.removeAttribute("src");
}

projectImages.forEach((image) => {
  image.addEventListener("click", () => openImagePreview(image));
});

if (previewOverlay) {
  previewOverlay.addEventListener("click", (event) => {
    if (event.target === previewOverlay) {
      closeImagePreview();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImagePreview();
  }
});
