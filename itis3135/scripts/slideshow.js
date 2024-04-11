let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".slides"); 
  var dots = $(".demo"); 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  slides.hide(); 
  dots.removeClass("active");

  slides.eq(slideIndex - 1).fadeIn(600); 
  dots.eq(slideIndex - 1).addClass("active"); 
  captionText.html(dots.eq(slideIndex - 1).attr("alt")); 
}
