let popup = document.querySelector(".modal-login");
let userLogin = document.querySelector(".login-link");
let btnClose = popup.querySelector(".modal-close");
let login = popup.querySelector("[name=login]");
let form = popup.querySelector("form");
let password = popup.querySelector("[name=password]");
let isStorageSupport = true;
let storage = "";
let btnenter = popup.querySelector(".btn");

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

userLogin.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", (e) => {
  if (!login.value || !password.value) {
    e.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
