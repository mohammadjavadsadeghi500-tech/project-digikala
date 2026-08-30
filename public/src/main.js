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

var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 10,
  slidesOffsetAfter: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    init: function () {
      updateSlider2Buttons(this);
    },

    slideChange: function () {
      updateSlider2Buttons(this);
    },
  },
});

function updateSlider2Buttons(swiper) {
  const nextBtn = swiper.el.querySelector(".swiper-button-next");
  const prevBtn = swiper.el.querySelector(".swiper-button-prev");

  if (!nextBtn || !prevBtn) return;

  // ابتدای اسلایدر
  if (swiper.isBeginning) {
    prevBtn.classList.remove("is-visible");
  } else {
    prevBtn.classList.add("is-visible");
  }

  // انتهای اسلایدر
  if (swiper.isEnd) {
    nextBtn.classList.remove("is-visible");
  } else {
    nextBtn.classList.add("is-visible");
  }
}

// وقتی روی Next در انتهای اسلایدر کلیک شد
swiper2.el
  .querySelector(".swiper-button-next")
  .addEventListener("click", function () {
    if (swiper2.isEnd) {
      this.classList.remove("is-visible");
    }
  });

// وقتی روی Prev در ابتدای اسلایدر کلیک شد
swiper2.el
  .querySelector(".swiper-button-prev")
  .addEventListener("click", function () {
    if (swiper2.isBeginning) {
      this.classList.remove("is-visible");
    }
  });

// slider 2 end

// اسلایدر شگفت انگیز سبز
// ===== اسلایدر سوم (سبز) =====

// ===== اسلایدر دوم (سبز) =====
var swiper3 = new Swiper(".mySwiper-3", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 10,
  slidesOffsetAfter: 10,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  on: {
    init: function () { updateSlider3Buttons(this); },
    slideChange: function () { updateSlider3Buttons(this); },
  },
});

function updateSlider3Buttons(swiper) {
  const nextBtn = swiper.el.querySelector(".swiper-button-next-3");
  const prevBtn = swiper.el.querySelector(".swiper-button-prev-3");
  if (!nextBtn || !prevBtn) return;
  swiper.isBeginning ? prevBtn.classList.remove("is-visible") : prevBtn.classList.add("is-visible");
  swiper.isEnd ? nextBtn.classList.remove("is-visible") : nextBtn.classList.add("is-visible");
}

swiper3.el.querySelector(".swiper-button-next-3").addEventListener("click", function () {
  if (swiper3.isEnd) this.classList.remove("is-visible");
});
swiper3.el.querySelector(".swiper-button-prev-3").addEventListener("click", function () {
  if (swiper3.isBeginning) this.classList.remove("is-visible");
});