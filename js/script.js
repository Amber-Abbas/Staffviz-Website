var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 7,
  autoplay: {
    delay: 2, // Delay in ms between slides
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
});

function set_error(id, error) {
  var element = document.getElementById(id);
  var errorElement = element.querySelector(".form-error");
  console.log("errorElement", errorElement);
  if (errorElement) {
    errorElement.innerHTML = error;
    errorElement.style.color = "red";
  }
}

function validateForm(event) {
  event.preventDefault();
  let errors = [];
  // Get the input elements by their ID
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passInput = document.getElementById("password");
  var cPassInput = document.getElementById("confirmPassword");

  // Validate name input
  if (nameInput.value.length < 3 || nameInput.value.length > 125) {
    set_error("nameInput", "Length should be between 3 and 125 characters");
    // return false;
  } else {
    set_error("nameInput", ""); // Clear the error if valid
  }
  console.log("emailInput", emailInput);
  // Validate email input
  console.log("emailInput.value", emailInput.value);
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInput.value.length < 3 || !emailInput.value.match(validRegex)) {
    set_error("email-box", "Invalid email address");
    // return false;
  } else {
    set_error("email", ""); // Clear the error if valid
  }

  // Validate password input
  if (passInput.value.length < 6) {
    // Example validation: password should be at least 6 characters
    set_error("password-box", "Password should be at least 6 characters");
    return false;
  } else {
    set_error("password-box", ""); // Clear the error if valid
  }

  // Validate confirm password input
  if (passInput.value !== cPassInput.value) {
    set_error("confirm-password-box", "Passwords do not match");
    return false;
  } else {
    set_error("confirm-password-box", "");
  }

  // Allow form submission if all validations pass
  return true;
}
