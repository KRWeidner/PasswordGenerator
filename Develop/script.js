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

  alert("'" + passwordText.value);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function promptInputRequirements() {

  var passwordLength = window.prompt("Enter a pssword length between 8 and 128 characters:");

  //var translated = translatePigLatin(userInput);
  while(passwordLength < 8 || passwordLength > 128 || !Number.isInteger(+passwordLength))
  {
    passwordLength = window.prompt("Number must be between 8 and 128 characters. Please reenter a valid length: ");
  }
  passwordRequirements.passwordLength = passwordLength;

  var caseSelection = window.prompt("Should password contain all uppercase, lowercase or mixed case? Please enter U, L, or M to make your choice:");
  while(caseSelection.length  != 1 && (caseSelection !== "U" || caseSelection !== "L" || caseSelection !== "M"))
  {
    caseSelection = window.prompt("Input must be one letter long and either U (uppercase), L (lowercase), or M (mixed case) must be entered: ");
  }
  passwordRequirements.caseSelection = caseSelection;

  var includeNumbers = window.prompt("Should password contain numeric values? Enter Y or N:");
  while(caseSelection.length  != 1 && (caseSelection !== "Y" || caseSelection !== "N"))
  {
    includeNumbers = window.prompt("Input must be one letter long and either U (uppercase), L (lowercase), or M (mixed case) must be entered: ");
  }
  passwordRequirements.includeNumbers = includeNumbers;

  var includeSpecialChars = window.prompt("Should password contain special charcters? Please enter Y or N:");
  while(caseSelection.length  != 1 && (caseSelection !== "Y" || caseSelection !== "N"))
  {
    includeSpecialChars = window.prompt("Input must be one letter long and either U (uppercase), L (lowercase), or M (mixed case) must be entered: ");
  }
  passwordRequirements.includeSpecialChars = includeSpecialChars;
}
