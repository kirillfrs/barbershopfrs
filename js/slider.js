let slide = document.querySelectorAll(".slide-single");
let btnGalleryNext = document.querySelector(".btn-gallery-next");
let btnGalleryBack = document.querySelector(".btn-gallery-back");

btnGalleryNext.addEventListener("click", function (e) {
  if (slide[0].classList.contains("slide-single-2")) {
    slide[0].classList.remove("slide-single-2");
    btnGalleryBack.setAttribute("disabled", "disabled");
  } else {
    slide[0].classList.add("slide-single-2");
    btnGalleryBack.removeAttribute("disabled");
  }
});
btnGalleryNext.addEventListener("click", function (e) {
  if (slide[1].classList.contains("slide-single-2")) {
    slide[1].classList.remove("slide-single-2");
    btnGalleryBack.setAttribute("disabled", "disabled");
  } else {
    slide[1].classList.add("slide-single-2");
    btnGalleryBack.removeAttribute("disabled");
  }
});

btnGalleryBack.addEventListener("click", function (e) {
  if (slide[0].classList.contains("slide-single-2")) {
    slide[0].classList.remove("slide-single-2");
    btnGalleryBack.setAttribute("disabled", "disabled");
  } else {
    slide[0].classList.add("slide-single");
  }
});
btnGalleryBack.addEventListener("click", function (e) {
  if (slide[1].classList.contains("slide-single-2")) {
    slide[1].classList.remove("slide-single-2");
    btnGalleryBack.setAttribute("disabled", "disabled");
  } else {
    slide[1].classList.add("slide-single");
  }
});
