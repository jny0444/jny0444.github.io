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

const pastelPalette = [
  "#efb8c0",
  "#f4c4cc",
  "#efd7a8",
  "#bfe3c9",
  "#bfd7f7",
  "#d7c2f3",
  "#b3e7bd",
];

function hydrateAsciiArt() {
  const asciiBlocks = document.querySelectorAll(".ascii-art");

  asciiBlocks.forEach((block) => {
    const source = block.textContent || "";
    const fragment = document.createDocumentFragment();
    let colorIndex = 0;

    for (const char of source) {
      if (/\s/.test(char)) {
        fragment.appendChild(document.createTextNode(char));
        continue;
      }

      const span = document.createElement("span");
      span.className = "ascii-char";
      span.textContent = char;
      span.style.setProperty(
        "--ascii-hover-color",
        pastelPalette[colorIndex % pastelPalette.length],
      );
      colorIndex += 1;
      fragment.appendChild(span);
    }

    block.textContent = "";
    block.appendChild(fragment);
  });
}

hydrateAsciiArt();
