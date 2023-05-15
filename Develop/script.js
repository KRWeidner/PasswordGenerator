// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating object to hold password criteria
var passwordRequirements = {
  passwordLength: Number,
  passwordCase: String,
  includeNumbers: Boolean,
  includeSpecialChars: Boolean
}

// Write password to the #password input
function writePassword() {
  //call function to validate input
  promptInputRequirements();
  //call function to generate password and return it
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to create the password string that will be output to the user
function generatePassword() {

  //creating 4 string arrays with each of the possible types the password can consist of
  var passwordOptions = [];
  var upperAlphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var lowerAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  var numbers = Array.from("0123456789");
  var specialChars = Array.from("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\");

  //depending on user input add either upper, lower or both case letters to passwordOptions array
  if (passwordRequirements.passwordCase.toUpperCase() === "U") {
    // using the spread operator here to expand the array and add each individual element from that array to passwordOptions
    passwordOptions.push(...upperAlphabet);
  }
  else if (passwordRequirements.passwordCase.toUpperCase() === "L") {
    passwordOptions.push(...lowerAlphabet);
  }
  else {
    passwordOptions.push(...lowerAlphabet);
    passwordOptions.push(...upperAlphabet);
  }
  //if user said to include numbers and/or special chars, add those chars to passwordOptions array
  if (passwordRequirements.includeNumbers === "Y") {
    passwordOptions.push(...numbers);
  }

  if (passwordRequirements.includeSpecialChars === "Y") {
    passwordOptions.push(...specialChars);
  }

  /*if the total number of array elements we have is less than what we need for the password length
  then find the difference, take a random subset of the array where length = difference and add 
  that new subset onto the original array so we have the total number of elements we need
  */
  if (passwordOptions.length < passwordRequirements.passwordLength) {
    var offest = passwordRequirements.passwordLength - passwordOptions.length;
    var offsetAdd = passwordOptions.sort(() => Math.random() - Math.random()).slice(0, offest);
    passwordOptions.push(...offsetAdd);
  }

  //randomly sort paswordOptions array and then take the necessary length of elements we need according to user input, 
  //then join those array elements into one string and return that
  var password = passwordOptions.sort(() => Math.random() - Math.random()).slice(0, passwordRequirements.passwordLength).join("");
  return password;
}

//function to validate all user input about password
function promptInputRequirements() {

  var passwordLength = window.prompt("Enter a password length between 8 and 128 characters:");

  //check password length requirement. While input is invalid, continue asking for valid data
  //password must be between 8-128 characters and put input as a number
  while (passwordLength < 8 || passwordLength > 128 || !Number.isInteger(+passwordLength)) {
    passwordLength = window.prompt("Number must be between 8 and 128 characters. Please reenter a valid length: ");
  }
  passwordRequirements.passwordLength = passwordLength;

  //check letter case for password. User must enter 1 character and that character must be U, L, or M
  var caseSelection = window.prompt("Should password contain all uppercase, lowercase or mixed case? Please enter U, L, or M to make your choice:");
  while (caseSelection.length != 1 || (caseSelection != "U" && caseSelection != "L" && caseSelection != "M")) {
    caseSelection = window.prompt("Input must be one letter long and either U (uppercase), L (lowercase), or M (mixed case) must be entered: ");
  }
  passwordRequirements.passwordCase = caseSelection;

  //check if password should contain numbers. User must enter Y or N
  var includeNumbers = window.prompt("Should password contain numeric values? Enter Y or N:");
  while (includeNumbers.length != 1 || (includeNumbers != "Y" && includeNumbers != "N")) {
    includeNumbers = window.prompt("Input must be one letter long and either Y or N must be entered: ");
  }
  passwordRequirements.includeNumbers = includeNumbers;

  //check if password should contain special characters. User must enter Y or N
  var includeSpecialChars = window.prompt("Should password contain special charcters? Please enter Y or N:");
  while (includeSpecialChars.length != 1 || (includeSpecialChars != "Y" && includeSpecialChars != "N")) {
    includeSpecialChars = window.prompt("Input must be one letter long and either Y or N must be entered: ");
  }
  passwordRequirements.includeSpecialChars = includeSpecialChars;
}
