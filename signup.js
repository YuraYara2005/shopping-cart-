document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting the traditional way

  var userEmail = document.getElementById("email").value;
  var userNumber = document.getElementById("mobile").value;
  var userPass = document.getElementById("password").value;

  // Store user data in localStorage
  var userData = JSON.parse(localStorage.getItem("users")) || [];
  var obj = {
      email: userEmail,
      number: userNumber,
      password: userPass,
  };
  userData.push(obj);
  localStorage.setItem("users", JSON.stringify(userData));

  // Clear form fields
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("password").value = "";

  // Redirect to cart page
  window.location.href = 'cart.html';
});

// Input mask for birth date and mobile number
$(document).ready(function(){
$('#birth-date').mask('00/00/0000');
$('#mobile').mask('0000-0000');
});