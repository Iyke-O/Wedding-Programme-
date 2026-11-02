// Get the directions button
const directionsButton = document.getElementById("directions-btn");

// Wedding venue address
const weddingVenue = "SS Peter & Paul Idoma Catholic Community Centre, opposite Maritime Quarters, Kubwa, Abuja";

// Listen for a click on the button
directionsButton.addEventListener("click", function () {

    // Create a Google Maps directions URL
    const mapsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(weddingVenue)}`;

    // Open Google Maps
    window.open(mapsURL, "_blank");

});



/* PHOTO GALLERY */

const galleryImages = document.querySelectorAll(".gallery-image");

const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const prevImage = document.getElementById("prev-image");
const nextImage = document.getElementById("next-image");

let currentImageIndex = 0;

// Open image viewer
galleryImages.forEach(function (image, index) {

    image.addEventListener("click", function () {

        currentImageIndex = index;

        showImage();

        imageModal.style.display = "flex";

        requestAnimationFrame(function () {
            imageModal.classList.add("show");
        });

    });

});

// Display selected image
function showImage() {
    modalImage.src = galleryImages[currentImageIndex].src;
}

// Close image viewer
function hideImageViewer() {

    imageModal.classList.remove("show");

    setTimeout(function () {
        imageModal.style.display = "none";
    }, 300);

}

// Next image
nextImage.addEventListener("click", function (event) {

    event.stopPropagation();

    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    showImage();

});

// Previous image
prevImage.addEventListener("click", function (event) {

    event.stopPropagation();

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    showImage();

});

// Close button
closeModal.addEventListener("click", hideImageViewer);

// Close when clicking outside
imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {
        hideImageViewer();
    }

});

// Keyboard navigation
document.addEventListener("keydown", function (event) {

    if (imageModal.style.display !== "flex") return;

    if (event.key === "ArrowRight") {
        nextImage.click();
    }

    if (event.key === "ArrowLeft") {
        prevImage.click();
    }

    if (event.key === "Escape") {
        hideImageViewer();
    }

});
