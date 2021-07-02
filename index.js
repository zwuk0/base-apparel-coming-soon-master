function ValidateEmail(mail) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

const error = document.getElementById("error");
const input = document.getElementById("email");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  ValidateEmail(input);
  if (ValidateEmail(input) === false) {
    error.classList.toggle("error-toggle");
  }
});
