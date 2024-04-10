function checkForm() {

const error = document.getElementById('formErrors');
error.innerHTML = '';


const name = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
name.classList.remove('error');
email.classList.remove('error');
password.classList.remove('error');
passwordConfirm.classList.remove('error');


let errorsFound = false;


if (!name.value) {
  errorsFound = true;
  name.classList.add('error');
  const nameErr = document.createElement("li");
  nameErr.textContent = "Missing full name.";
  error.appendChild(nameErr);
}


if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
  errorsFound = true;
  email.classList.add('error');
  const emailErr = document.createElement("li");
  emailErr.textContent = "Invalid or missing email address.";
  error.appendChild(emailErr);
}

if (!password.value || password.value.length < 10 || password.value.length > 20) {
  errorsFound = true;
  password.classList.add('error');
  const passwordError1 = document.createElement("li");
  passwordError1.textContent = "Password must be between 10 and 20 characters.";
  error.appendChild(passwordError1);
} else if (!/[a-z]/.test(password.value)) {
  errorsFound = true;
  password.classList.add('error');
  const passwordError2 = document.createElement("li");
  passwordError2.textContent = "Password must contain at least one lowercase character.";
  error.appendChild(passwordError2);
} else if (!/[A-Z]/.test(password.value)) {
  errorsFound = true;
  password.classList.add('error');
  const passwordError3 = document.createElement("li");
  passwordError3.textContent = "Password must contain at least one uppercase character.";
  error.appendChild(passwordError3);
} else if (!/[0-9]/.test(password.value)) {
  errorsFound = true;
  password.classList.add('error');
  const passwordError4 = document.createElement("li");
  passwordError4.textContent = "Password must contain at least one digit.";
  error.appendChild(passwordError4);
}


if (passwordConfirm.value !== password.value) {
  errorsFound = true;
  password.classList.add('error');
  passwordConfirm.classList.add('error');
  const passwordError5 = document.createElement("li");
  passwordError5.textContent = "Password and confirmation password don't match.";
  error.appendChild(passwordError5);
}


if (errorsFound) {
  error.classList.remove('hide');
} else {
  error.classList.add('hide');
}
}


document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});