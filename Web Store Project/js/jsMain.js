// ---- Slideshow ----
let slideIndex = 0;
let autoSlide;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  autoSlide = setTimeout(showSlides, 4000);
}
function plusSlides(n) {
  slideIndex += n - 1;
  clearTimeout(autoSlide);
  showSlides();
}
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

/* ---- Giỏ hàng popup ----
function openCart(id) {
  document.getElementById("cartModal").style.display = "block";
}
function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}
function addToCart() {
  alert("Thêm vào giỏ hàng thành công!");
  closeCart();
};*/