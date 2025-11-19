const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalBox = document.getElementById("modalBox");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src.replace("300", "800");
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

modalBox.addEventListener("click", (event) => {
  event.stopPropagation(); 
});
