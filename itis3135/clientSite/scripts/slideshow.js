var slideIndex = 0;
$(document).ready(function() {
    showSlides();
});

function showSlides() {
    var slides = $(".slides");
    slides.hide(); // Hide all slides initially using jQuery

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Fade in the current slide
    slides.eq(slideIndex - 1).fadeIn(600);
    
    // Set to change slide every 10 seconds
    setTimeout(showSlides, 5000);
}
