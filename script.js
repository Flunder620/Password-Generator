// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
var uppercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase().split('')
var numberCharacters = '0123456789'.split('')
var symbolCharacters = '!@#$%^&*()'.split('')
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordOption = []
  var finalPassword = []
  var passLength = prompt("How many characters would you like?")
  var hasLowercase = confirm("Would you like lowercase letters?")
  var hasUppercase = confirm("Would you like uppercase letters?")
  var numbers = confirm("Would you like numbers?")
  var symbols = confirm("Would you like symbols?")
  if (hasLowercase === true){
    passwordOption = passwordOption.concat(lowercaseCharacters)
  }
  if (hasUppercase === true){
    passwordOption = passwordOption.concat(uppercaseCharacters)
  }
  if (numbers === true){
    passwordOption = passwordOption.concat(numberCharacters)
  }
  if (symbols === true){
    passwordOption = passwordOption.concat(symbolCharacters)
  }
  if (symbols === false && hasLowercase === false && hasUppercase === false && numbers === false){
    alert("Please choose at least one password option")
    return
  }
  for(i=0; i < passLength; i++){
    finalPassword.push(passwordOption[Math.floor(Math.random()*passwordOption.length)])
  }
  console.log(passwordOption, passwordOption.length)
  console.log(finalPassword)
  return finalPassword.join('')
}