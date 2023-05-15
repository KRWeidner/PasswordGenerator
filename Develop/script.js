// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordRequirements = {
  passwordLength: Number,
  passwordCase: String,
  includeNumbers: Boolean,
  includeSpecialChars: Boolean
}

// Write password to the #password input
function writePassword() {
  promptInputRequirements();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordOptions = [];
  var upperAlphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var lowerAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  var numbers = Array.from("0123456789");
  var specialChars = Array.from("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\");

  if (passwordRequirements.passwordCase.toUpperCase() === "U") {
    passwordOptions.push(...upperAlphabet);
  }
  else if (passwordRequirements.passwordCase.toUpperCase() === "L") {
    passwordOptions.push(...lowerAlphabet);
  }
  else {
    passwordOptions.push(...lowerAlphabet);
    passwordOptions.push(...upperAlphabet);
  }

  if (passwordRequirements.includeNumbers.toUpperCase() === "Y") {
    passwordOptions.push(...numbers);
  }

  if (passwordRequirements.includeSpecialChars.toUpperCase() === "Y") {
    passwordOptions.push(...specialChars);
  }

  if (passwordOptions.length < passwordRequirements.passwordLength) {
    var offest = passwordRequirements.passwordLength - passwordOptions.length;
    var offsetAdd = passwordOptions.sort(() => Math.random() - Math.random()).slice(0, offest);
    passwordOptions.push(...offsetAdd);
  }

  var password = passwordOptions.sort(() => Math.random() - Math.random()).slice(0, passwordRequirements.passwordLength).join("");
  return password;
}


function promptInputRequirements() {

  var passwordLength = window.prompt("Enter a password length between 8 and 128 characters:");

  //var translated = translatePigLatin(userInput);
  while (passwordLength < 8 || passwordLength > 128 || !Number.isInteger(+passwordLength)) {
    passwordLength = window.prompt("Number must be between 8 and 128 characters. Please reenter a valid length: ");
  }
  passwordRequirements.passwordLength = passwordLength;

  var caseSelection = window.prompt("Should password contain all uppercase, lowercase or mixed case? Please enter U, L, or M to make your choice:");
  while (caseSelection.length != 1 && (caseSelection !== "U" || caseSelection !== "L" || caseSelection !== "M")) {
    caseSelection = window.prompt("Input must be one letter long and either U (uppercase), L (lowercase), or M (mixed case) must be entered: ");
  }
  passwordRequirements.passwordCase = caseSelection;

  var includeNumbers = window.prompt("Should password contain numeric values? Enter Y or N:");
  while (caseSelection.length != 1 && (caseSelection !== "Y" || caseSelection !== "N")) {
    includeNumbers = window.prompt("Input must be one letter long and either U (uppercase), L (lowercase), or M (mixed case) must be entered: ");
  }
  passwordRequirements.includeNumbers = includeNumbers;

  var includeSpecialChars = window.prompt("Should password contain special charcters? Please enter Y or N:");
  while (caseSelection.length != 1 && (caseSelection !== "Y" || caseSelection !== "N")) {
    includeSpecialChars = window.prompt("Input must be one letter long and either U (uppercase), L (lowercase), or M (mixed case) must be entered: ");
  }
  passwordRequirements.includeSpecialChars = includeSpecialChars;
}
