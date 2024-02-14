function activeInput(inputs) {
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      input.classList.remove("focused");
    });
  });
}

function passwordFormValidation(event) {
  event.preventDefault();

  const password = document.querySelector("#password");
  const confirmationPassword = document.querySelector("#confirm-password");

  const existingErrorMessage = document.querySelector(".error-message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }

  if (password.value != confirmationPassword.value) {
    password.classList.add("password-mismatch");
    confirmationPassword.classList.add("password-mismatch");

    password.value = "";
    confirmationPassword.value = "";

    const errorMessage = document.createElement("div");
    errorMessage.innerText = "* Passwords do not match";
    errorMessage.classList.add("error-message");
    confirmationPassword.parentNode.appendChild(errorMessage);
  } else {
    document.querySelector("form").submit();
  }
}

const inputs = document.querySelectorAll("input");
activeInput(inputs);

const submit = document.querySelector("form");
submit.addEventListener("submit", passwordFormValidation);
