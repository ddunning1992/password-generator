// Assignment code here
var getPasswordLength = function() {
  var length = "";

  while (length === "" || length === null) {
        length = prompt("Enter the length for your password between 8 and 128 characters.");
  }
  return length;
};

 var useLowerCase = function() {
  var charset1 = "";
  var lCase = prompt("Would you like to use lowercase letters? Type 'true' or 'false'.");
  
    if (lCase === "true") {
        charset1 = "abcdefghijklmnopqrstuvwxyz";
    }
    return charset1;
};

var useUpperCase = function() {
  var charset2 = "";
  var uCase = prompt("Would you like to use uppercase letters? Type 'true' or 'false'.");

  if (uCase === "true") {
      charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return charset2;
};

var useNumbers = function() {
  var charset3 = "";
  var numbers = prompt("Would you like to use numbers? Type 'true' or 'false'.");

  if (numbers === "true") {
      charset3 = 0123456789;
  }
  return charset3;
};

var useSpecialCharacters = function() {
  var charset4 = "";
  var characters = prompt("Would you like to use special characters? Type 'true' or 'false'.");

  if (characters === "true") {
    charset4 = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  return charset4;
};

function generatePassword() {
  var length = getPasswordLength();
      charset = useLowerCase() + useUpperCase() + useNumbers() + useSpecialCharacters();
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

var finalCharset = function () {

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
