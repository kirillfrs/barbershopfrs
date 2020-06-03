let btnMap = document.querySelectorAll(".btn-map");
let modalMap = document.querySelector(".modal-map");
let close = modalMap.querySelector(".modal-close");

btnMap[0].addEventListener("click", function (e) {
  e.preventDefault();
  modalMap.classList.add("btn-map-open");
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  modalMap.classList.remove("btn-map-open");
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (modalMap.classList.contains("btn-map-open")) {
      modalMap.classList.remove("btn-map-open");
    }
  }
});

btnMap[1].addEventListener("click", function (e) {
  e.preventDefault();
  modalMap.classList.add("btn-map-open");
});
