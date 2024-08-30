const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");
const dataDiv = document.getElementById("data");
const submit = document.getElementById("submit");

const users = [];

function validated() {
  if (name.value.length < 2) {
    name.style.borderColor = "red";
    name.style.outlineColor = "#d65231";
    name.focus();
    return false;
  }
  if (email.value.length < 9) {
    email.style.borderColor = "red";
    email.style.outlineColor = "#d65231";
    email.focus();
    return false;
  }
  if (phone.value.length <= 9) {
    phone.style.borderColor = "red";
    phone.style.outlineColor = "#d65231";
    phone.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.borderColor = "red";
    password.style.outlineColor = "#d65231";
    password.focus();
    return false;
  }
  if (password.value != repeatPassword.value) {
    repeatPassword.style.borderColor = "red";
    repeatPassword.style.outlineColor = "#d65231";
    repeatPassword.focus();
    return false;
  }

  users.push({
    name: name.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  });

  displayData();

  name.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
  repeatPassword.value = "";

  return true;
}

function displayData() {
  const dataHTML = users
    .map(
      (user) => `
      <div>
        <p>Ism: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Telefon Raqam: ${user.phone}</p>
        <p>Parol: ${user.password}</p>
      </div>
    `
    )
    .join("");
  dataDiv.innerHTML = dataHTML;
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  validated();
});
