// Get the directions button
const directionsButton = document.getElementById("directions-btn");

// Wedding venue address
const weddingVenue = "SS Peter & Paul Idoma Catholic Community Center, opposite Maritime Quarters, Kubwa, Abuja";

// Listen for a click on the button
directionsButton.addEventListener("click", function () {

    // Create a Google Maps directions URL
    const mapsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(weddingVenue)}`;

    // Open Google Maps
    window.open(mapsURL, "_blank");

});

// PHOTO GALLERY

const galleryImages = document.querySelectorAll(".gallery-image");

const imageModal = document.getElementById("image-modal");

const modalImage = document.getElementById("modal-image");

const closeModal = document.getElementById("close-modal");

// Open enlarged image when clicked
galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        imageModal.style.display = "flex";

        modalImage.src = image.src;

    });

});

// Close image viewer
closeModal.addEventListener("click", function () {

    imageModal.style.display = "none";

});

// Close when clicking outside the image
imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {

        imageModal.style.display = "none";

    }

});