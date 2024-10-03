document.querySelector("form").addEventListener("submit", findUserData);

function findUserData(event) {
  event.preventDefault();
  let userEmail = document.getElementById("logEmail").value.trim();
  let userPass = document.getElementById("logPass").value.trim();

  
  var users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    alert("No users found. Please sign up.");
    return;
  }

  // Case-insensitive email comparison
  var filterUser = users.filter(function (ele) {
    return ele.email.toLowerCase() === userEmail.toLowerCase() && ele.password === userPass;
  });

  if (filterUser.length === 1) {
    window.location.href = 'cart.html';
  } else {
    alert("Wrong credentials");
  }

  document.getElementById("logEmail").value = "";
  document.getElementById("logPass").value = "";
}

function seePass() {
  var viz = document.getElementById("logPass");
  var img = document.getElementById("icon");
  if (viz.type === "password") {
    viz.type = "text";
    img.src = "eye-solid.svg";
  } else {
    viz.type = "password";
    img.src = "eye-slash-solid.svg";
  }
}
