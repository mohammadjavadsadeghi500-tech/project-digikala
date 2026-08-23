// first slider start
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper1 = new Swiper(".mySwiper-1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
// first slider end

// slider 2 start
function toggleSlider2PrevButton(swiper) {
  const prevBtn = swiper.el.querySelector(".swiper-button-prev");
  if (!prevBtn) return;
  if (swiper.isBeginning) {
    prevBtn.classList.remove("is-visible");
  } else {
    prevBtn.classList.add("is-visible");
  }
}

var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      toggleSlider2PrevButton(this);
    },
    slideChange: function () {
      toggleSlider2PrevButton(this);
    },
  },
});
// slider 2 end
