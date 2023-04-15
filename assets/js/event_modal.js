// Event next pages login button, register button //
const form1 = document.querySelector("#form-1");
const form2 = document.querySelector("#form-2");
const form3 = document.querySelector("#form-3");
const btnLogin = document.querySelector("#login-btn");
const btnRegister = document.querySelector("#register-btn");
const btnBackLogin = document.querySelector("#back-btn-login");
const btnBackRegister = document.querySelector("#back-btn-register");

// Form Login
btnLogin.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
});

btnBackLogin.addEventListener("click", function () {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
});

// Form Register
btnRegister.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "block";
});

btnBackRegister.addEventListener("click", function () {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
});

// Change Title in Form Register //
function changeTitleNew() {
    document.getElementById("form-title").innerText = "Register";
}

function changeTitleOld() {
    document.getElementById("form-title").innerText = "Login";
}

// Event Open Modal Sign in, Sign Up //
var loginButton = document.getElementById("sign__in-click");
var loginModal = document.getElementById("modal__login");
var overlayCloseModal = modal__login.querySelector(".modal__overlay");
var closeModal = modal__login.querySelector(".auth-form__header__close");

loginButton.onclick = function () {
    loginModal.style.display = "block";
};

closeModal.onclick = function () {
    loginModal.style.display = "none";
};

overlayCloseModal.onclick = function () {
    loginModal.style.display = "none";
};
