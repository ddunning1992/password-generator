// Assignment code here
var getPasswordLength = function() {
  var length = "";

  while (length === "" || length === null) {
    length = prompt("Enter the length for your password between 8 and 128 characters.");
  }

  return length;
};

var useUpperCase = function() {
  var charset = "";

  var uCasePrompt = window.prompt("Would you like to use uppercase letters? type 'true' or 'false'.");
  

  if (uCasePrompt === true) {
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return charset;
  };
  if (uCasePrompt === false) {
    charset = "";
    return charset;
  }
};

function generatePassword() {
  var length = getPasswordLength(),
      charset = "abcdefghijklmnopqrstuvwxyz" + useUpperCase();
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};


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
