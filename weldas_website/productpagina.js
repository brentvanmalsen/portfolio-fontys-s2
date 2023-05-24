let slideIndex = 1;
const slides = [
  "images/handschoenen.png",
  "images/handschoenen2.png",
  "images/handschoenen3.png",
  "images/handschoenen4.png"
];

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  const handschoenen = document.querySelector(".handschoenen");
  handschoenen.setAttribute("src", slides[slideIndex - 1]);
}
