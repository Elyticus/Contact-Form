// Form Validation Inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const radioOne = document.getElementById("gridRadios1");
const radioTwo = document.getElementById("gridRadios2");
const message = document.getElementById("validationTextarea");
const checkBox = document.getElementById("gridCheck1");
const checkMark = document.getElementById("checkMark");

// Form & Error Message & Thank you Message
const queryType = document.getElementById("queryType");
const thankYouMessage = document.getElementById("thankYou");
const contactForm = document.getElementById("contactForm");

// Submit button
const submitBtn = document.getElementById("submitBtn");

// Regex for validation (email)
const regexEmailAddress = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

// Rules to validate the form

// Clear the form when refresh the webpage
firstName.value = "";
lastName.value = "";
emailAddress.value = "";
message.value = "";
radioOne.checked = false;
radioTwo.checked = false;
checkBox.checked = false;

// Handle the submit button when click
submitBtn.addEventListener("click", (e) => {
  // Prevent the default behavior when submiting the form
  e.preventDefault();

  // If the first name input value is empty will display the error, if not will hide it
  if (firstName.value === "") {
    firstName.classList.add("is-invalid");
  } else {
    firstName.classList.remove("is-invalid");
  }

  if (lastName.value === "") {
    lastName.classList.add("is-invalid");
  } else {
    lastName.classList.remove("is-invalid");
  }

  if (!regexEmailAddress.test(emailAddress.value)) {
    emailAddress.classList.add("is-invalid");
  } else {
    emailAddress.classList.remove("is-invalid");
  }

  if (!radioOne.checked && !radioTwo.checked) {
    radioOne.classList.add("is-invalid");
    radioTwo.classList.add("is-invalid");
    queryType.style.display = "block";
  } else {
    radioOne.classList.remove("is-invalid");
    radioTwo.classList.remove("is-invalid");
    queryType.style.display = "none";
  }

  if (message.value === "") {
    message.classList.add("is-invalid");
  } else {
    message.classList.remove("is-invalid");
  }

  if (!checkBox.checked) {
    checkMark.classList.add("is-invalid");
  } else {
    checkMark.classList.remove("is-invalid");
  }

  if (
    firstName.value &&
    lastName.value &&
    message.value &&
    regexEmailAddress.test(emailAddress.value) &&
    (radioOne.checked || radioTwo.checked) &&
    checkBox.checked
  ) {
    firstName.value = "";
    lastName.value = "";
    emailAddress.value = "";
    message.value = "";
    radioOne.checked = false;
    radioTwo.checked = false;
    checkBox.checked = false;
    thankYouMessage.style.visibility = "visible";
    setTimeout(() => {
      thankYouMessage.style.visibility = "hidden";
    }, 1500);
  }
});
