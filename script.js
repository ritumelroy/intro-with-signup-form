const form = document.getElementById("sign-up-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorIcon1 = document.getElementById("icon1");
const errorMessage1 = document.getElementById("error-message-1");
const errorIcon2 = document.getElementById("icon2");
const errorMessage2 = document.getElementById("error-message-2");
const errorIcon3 = document.getElementById("icon3");
const errorMessage3 = document.getElementById("error-message-3");
const errorIcon4 = document.getElementById("icon4");
const errorMessage4 = document.getElementById("error-message-4");

const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === "" || firstName.value == null) {
    errorIcon1.style.display = "block";
    errorMessage1.style.display = "block";
    firstName.style.border = "solid 1px red";
  }
  if (lastName.value === "" || lastName.value == null) {
    errorIcon2.style.display = "block";
    errorMessage2.style.display = "block";
    lastName.style.border = "solid 1px red";
  }
  if (email.value === "" || email.value == null || !regEx.test(email.value)) {
    errorIcon3.style.display = "block";
    errorMessage3.style.display = "block";
    email.style.border = "solid 1px red";
  }
  if (password.value === "" || password.value == null) {
    errorIcon4.style.display = "block";
    errorMessage4.style.display = "block";
    password.style.border = "solid 1px red";
  }
});
