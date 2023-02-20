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
    if(emailInput.classList.contains("invalid")){
        emailInput.classList.remove("invalid");
    }
    if(!emailInput.classList.contains("valid")){
        emailInput.classList.add("valid");
    }
  } else {
    if(!emailInput.classList.contains("invalid")){
        emailInput.classList.add("invalid");
    }
    if(emailInput.classList.contains("valid")){
        emailInput.classList.remove("valid");
    }
    emailValidationMessageDiv.textContent =
      "please enter valid email, e.g. smartwork@gmail.com";
  }
};

const validateCountry = function () {
  if (countryInput.checkValidity()) {
    countryValidationMessageDiv.textContent = "";
    if(countryInput.classList.contains("invalid")){
        countryInput.classList.remove("invalid");
    }
    if(!countryInput.classList.contains("valid")){
        countryInput.classList.add("valid");
    }
  } else {
    if(!countryInput.classList.contains("invalid")){
        countryInput.classList.add("invalid");
    }
    if(countryInput.classList.contains("valid")){
        countryInput.classList.remove("valid");
    }
    countryValidationMessageDiv.textContent =
      "please enter valid country name, must contain only letters";
  }
};

const validatePincode = function () {
  if (pincodeInput.checkValidity()) {
    pincodeValidationMessageDiv.textContent = "";
    if(pincodeInput.classList.contains("invalid")){
        pincodeInput.classList.remove("invalid");
    }
    if(!pincodeInput.classList.contains("valid")){
        pincodeInput.classList.add("valid");
    }
  } else {
    if(!pincodeInput.classList.contains("invalid")){
        pincodeInput.classList.add("invalid");
    }
    if(pincodeInput.classList.contains("valid")){
        pincodeInput.classList.remove("valid");
    }
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
    if(passwordInput.classList.contains("invalid")){
        passwordInput.classList.remove("invalid");
    }
    if(!passwordInput.classList.contains("valid")){
        passwordInput.classList.add("valid");
    }
  } else {
    passwordValidationMessageDiv.textContent = `please enter valid password
        Minimum eight characters, at least one uppercase letter, one lowercase letter, 
        one number and one special character:`;
        if(!passwordInput.classList.contains("invalid")){
            passwordInput.classList.add("invalid");
        }
        if(passwordInput.classList.contains("valid")){
            passwordInput.classList.remove("valid");
        }
  }
};

const validateConfirmation = function () {
  if (passwordInput.value === confirmationInput.value) {
    confirmationValidationMessageDiv.textContent = "";
    if(confirmationInput.classList.contains("invalid")){
        confirmationInput.classList.remove("invalid");
    }
    if(!confirmationInput.classList.contains("valid")){
        confirmationInput.classList.add("valid");
    }
  } else {
    if(!confirmationInput.classList.contains("invalid")){
        confirmationInput.classList.add("invalid");
    }
    if(confirmationInput.classList.contains("valid")){
        confirmationInput.classList.remove("valid");
    }
    confirmationValidationMessageDiv.textContent =
      "please enter the same password as above";
  }
};

const formSubmit = function(event){
    event.preventDefault();
    const form = document.forms.validationForm;
    form.reset();
}

emailInput.addEventListener("input", validateEmail);
countryInput.addEventListener("input", validateCountry);
pincodeInput.addEventListener("input", validatePincode);
passwordInput.addEventListener("input", validatePassword);
confirmationInput.addEventListener("input", validateConfirmation);
submitButton.addEventListener("click", formSubmit);
