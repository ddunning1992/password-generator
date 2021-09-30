// Assignment code here

function generatePassword() {
  var length = 8,
      charset = (lowerCase + upperCase + numbers + characters),
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.random() * n);
  }
  return retVal;
}

var lowerCase = function() {
  promptLowerCase = window.prompt("Would you like to use lowercase letters? Type 'true' or 'false'.");
  if (promptLowerCase === true) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
  }
  else {
    lowerCase = "";
  }
}

var upperCase = function() {
  promptUpperCase = window.prompt("Would you like to use uppercase letters? Type 'true' or 'false'.");
  if(promptUpperCase === true) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else {
    upperCase = "";
  }
}

var numbers = function() {
  promptNumbers = window.prompt("Would you like to use numbers? Type 'true' or 'false'.");
  if(promptNumbers === true) {
    numbers = "0123456789";
  }
  else {
    numbers = "";
  }
}

var characters = function() {
  promptCharacters = window.prompt("Would you like to use special characters? Type 'true' or 'false'.");
  if(promptCharacters === true) {
    characters = " !#$%&()*+,-./:;<=>?@[']^_`{|}~";
  }
  else {
    characters = "";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
