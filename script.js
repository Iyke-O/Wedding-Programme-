// Get the directions button
const directionsButton = document.getElementById("directions-btn");

// Wedding venue
const weddingVenue = "SS Peter & Paul Idoma Catholic community Center, oppsite Maritime Quarters Kubwa Abuja";

// Listen for a click on the button
directionsButton.addEventListener("click", function () {

    // Create a Google Maps search link
    const mapsURL = `https://maps.app.goo.gl/gJbQZ6y59bbtHBdx9?g_st=ic${encodeURIComponent(weddingVenue)}`;

    // Open Google Maps
    window.open(mapsURL, "_blank");

});