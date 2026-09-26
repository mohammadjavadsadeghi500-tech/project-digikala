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
// const gch4 = document.querySelector(".gch4");
// const left_booxx = document.querySelector(".left-booxx");

// gch4.addEventListener("mouseenter", () => {
//   left_booxx.style.display = "block";
// });
// gch4.addEventListener("mouseleave", () => {
//   left_booxx.style.display = "none";
// });
// برای نقشه دیچی
document.addEventListener("click", function (e) {
  const closeBtn = e.target.closest(".close");
  const childLeft = e.target.closest(".child-left");

  if (closeBtn) {
    // اگه روی دکمه بستن کلیک شد
    const activeMap = closeBtn.closest(".active-map");
    if (activeMap) {
      activeMap.style.display = "none";
    }
    return; // مهم: جلوگیری از اجرای بخش بعدی توی همین کلیک
  }

  if (childLeft) {
    // اگه روی هر جای child-left کلیک شد (به‌جز close)
    const activeMap = childLeft.querySelector(".active-map");
    if (activeMap) {
      activeMap.style.display = "flex";
    }
  }
});
