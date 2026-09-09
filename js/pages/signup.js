"use strict"

function signUpAccount() {

  const nameInput = document.getElementById("name-input").value;
  const lastNameInput = document.getElementById("lastName-input").value;
  const emailInput = document.getElementById("email-input").value;
  const passwordInput = document.getElementById("password-input").value;

  if (nameInput == "") {
    alert("Introdueix un nom vàlid");
    return;
  }

  if (lastNameInput == "") {
    alert("Introdueix un cognom vàlid");
    return;
  }

  if (emailInput == "") {
    alert("Introdueix un correu electrònic vàlid");
    return;
  }

  if (passwordInput != 1234 || passwordInput == "" ) {
    alert("Contrasenya incorrecta");
    return;
  }

  window.location.href = "./home.html";

}