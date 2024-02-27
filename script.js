const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function(event) {
  if (nameInput.value.length < 3) {
    nameError.textContent = "Name should be at least 3 characters.";
    nameInput.focus();
    event.preventDefault();
  } else {
    nameError.textContent = "";
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Email should be a valid email address.";
    emailInput.focus();
    event.preventDefault();
  } else {
    emailError.textContent = "";
  }

  if (messageInput.value.length < 10) {
    messageError.textContent = "Message should be at least 10 characters.";
    messageInput.focus();
    event.preventDefault();
  } else {
    messageError.textContent = "";
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}