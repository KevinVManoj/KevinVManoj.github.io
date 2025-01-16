var slideIndex = 0;
$(document).ready(function() {
    showSlides();
});

function showSlides() {
    var slides = $(".slides");
    var pathname = window.location.pathname;

    slides.hide(); // Hide all slides initially using jQuery

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Fade in the current slide
    slides.eq(slideIndex - 1).fadeIn(600);
    
    if(pathname === "/homePage.html") {
        setTimeout(showSlides, 10000); // Set to change slide every 10 seconds
    } else {
        setTimeout(showSlides, 5000); // Set to change slide every 5 seconds
    }
}
