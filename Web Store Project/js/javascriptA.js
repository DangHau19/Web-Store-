const adminEmail = "hoangdanghau19@gmail.com";
const adminPassword = "1911";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (email === adminEmail && password === adminPassword) {
    window.location.href = "Admin.html";
  } else {
    errorMsg.style.display = "block";
  }
}