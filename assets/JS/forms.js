// signup form script
// Function to validate if passwords match 
function validateForm() {
  var password = document.getElementById("pwd").value;
  var confirmPassword = document.getElementById("pwd_confirm").value;
  var responseText = document.getElementById("responseText");
  
  if (password !== confirmPassword) {
      responseText.innerHTML = "Passwords do not match!";
      responseText.style.color = "red"; // Optional: Set the text color to red
      return false;
  } else {
      responseText.innerHTML = ""; // Clear the message when passwords match
      return true;
  }
}

// Function to toggle the visibility of password fields
function togglePasswordVisibility() {
  var passwordField = document.getElementById("pwd");
  var confirmPasswordField = document.getElementById("pwd_confirm");
  var showPasswords = document.getElementById("showPasswords");

  if (showPasswords.checked) {
      passwordField.type = "text";
      confirmPasswordField.type = "text";
  } else {
      passwordField.type = "password";
      confirmPasswordField.type = "password";
  }
}