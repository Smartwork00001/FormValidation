const emailInput = document.querySelector("#email");
const emailValidationMessageDiv = document.querySelector(
  ".email-validation-message"
);
const countryInput = document.querySelector("#country");
const countryValidationMessageDiv = document.querySelector(
  ".country-validation-message"
);
const pincodeInput = document.querySelector("#pincode");
const pincodeValidationMessageDiv = document.querySelector(
  ".pincode-validation-message"
);

const passwordInput = document.querySelector("#password");
const passwordValidationMessageDiv = document.querySelector(
  ".password-validation-message"
);
const confirmationInput = document.querySelector("#confirmation");
const confirmationValidationMessageDiv = document.querySelector(
  ".confirmation-validation-message"
);
const submitButton = document.querySelector("#submit-button");

const validateEmail = function () {
  if (emailInput.checkValidity()) {
    emailValidationMessageDiv.textContent = "";
  } else {
    emailValidationMessageDiv.textContent =
      "please enter valid email, e.g. smartwork@gmail.com";
  }
};

const validateCountry = function () {
  if (countryInput.checkValidity()) {
    countryValidationMessageDiv.textContent = "";
  } else {
    countryValidationMessageDiv.textContent =
      "please enter valid country name, must contain only letters";
  }
};

const validatePincode = function () {
  if (pincodeInput.checkValidity()) {
    pincodeValidationMessageDiv.textContent = "";
  } else {
    pincodeValidationMessageDiv.textContent =
      "please enter valid pincode, must be 6 digit number";
  }
};

const validatePassword = function () {
  const passwordContent = passwordInput.value;
  if (
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
      passwordContent
    )
  ) {
    passwordValidationMessageDiv.textContent = "";
  } else {
    passwordValidationMessageDiv.textContent = `please enter valid password
        Minimum eight characters, at least one uppercase letter, one lowercase letter, 
        one number and one special character:`;
  }
};

const validateConfirmation = function () {
  if (passwordInput.value === confirmationInput.value) {
    confirmationValidationMessageDiv.textContent = "";
  } else {
    confirmationValidationMessageDiv.textContent =
      "please enter the same password as above";
  }
};

const formSubmit = function(event){
    event.preventDefault();
}

emailInput.addEventListener("input", validateEmail);
countryInput.addEventListener("input", validateCountry);
pincodeInput.addEventListener("input", validatePincode);
passwordInput.addEventListener("input", validatePassword);
confirmationInput.addEventListener("input", validateConfirmation);
submitButton.addEventListener("click", formSubmit);
