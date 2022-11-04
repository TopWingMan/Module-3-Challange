// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//strings
var password;

//numbers
var passwordLength = 0;

//bools
var lowerCase;
var upperCase;
var numeric;
var special;

//arrays
var availableCharacters = [];
var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerics = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() 
{
  password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  //Asks user how long they want their password.
  findPasswordLength();

  //Asks user the types of character they want in their password.
  findCharacterTypes();

  //password is generated with the selected criteria
  for (i = 0 ; i < passwordLength; i++)
  {
    password += generateCharacter();
  }

  //password is written on password text for user to see
  return password;
}

function findPasswordLength()
{
  passwordLength = prompt ("how long would you like your password to be? (between 8 - 128 characters)")
  if (passwordLength < 8 || passwordLength > 128)
  {
    passwordLength = 0;
    confirm ("Error, password needs to be between 8 - 128 characters. Try again?");
    if (confirm) { findPasswordLength(); }
  }
}

function findCharacterTypes()
{
  availableCharacters = [];

  lowerCase = confirm("would you like like lower case characters in your password?")
  upperCase = confirm("would you like like upper case characters in your password?")
  numeric = confirm("would you like like numeric characters in your password?")
  special = confirm("would you like like special characters in your password?")

  if (lowerCase) { availableCharacters.push(lowerCaseAlphabet)}
  if (upperCase) { availableCharacters.push(upperCaseAlphabet)}
  if (numeric) { availableCharacters.push(numerics)}
  if (special) { availableCharacters.push(specialCharacters)}

  if (!lowerCase && !upperCase && !numeric && !special)
  {
    confirm ("You must choose at least one. Try again?");
    if (confirm) { findCharacterTypes(); }
  }
}

function generateCharacter()
{
  var randomlyGeneratedNumber = Math.floor(Math.random() * availableCharacters.length);
  var randomlySelectedCharacterAlphabet = availableCharacters[randomlyGeneratedNumber];
  var randomlyGeneratedCharacter = randomlySelectedCharacterAlphabet[[Math.floor(Math.random() * randomlySelectedCharacterAlphabet.length)]]
  return randomlyGeneratedCharacter;
}
