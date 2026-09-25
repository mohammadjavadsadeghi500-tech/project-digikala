// products slider  s2

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 12,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// slider amazing end
var swiper = new Swiper(".mySwiper-amazing-end", {
  slidesPerView: 8,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// buttons

const gchLeft = document.querySelectorAll(".gch-left");

gchLeft.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});
// slider 1 section 1
const gch4 = document.querySelector(".gch4");
const left_booxx = document.querySelector(".left-booxx");

gch4.addEventListener("mouseenter", () => {
  left_booxx.style.display = "block";
});
gch4.addEventListener("mouseleave", () => {
  left_booxx.style.display = "none";
});
