// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//variables declared for options
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
var uppercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase().split('')
var numberCharacters = '0123456789'.split('')
var symbolCharacters = '!@#$%^&*()'.split('')
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //emtpy arrays chosen options and the final password
  var passwordOption = []
  var finalPassword = []
  //prompts user for options
  // var passLength = 0
  // while ((passLength > 8 && passlength < 128)){
  // var passLength = prompt("How many characters would you like? Minimum of 8 to maximum of 128")
  // }
  var passLength = prompt("How many characters would you like? Minimum of 8 to maximum of 128")
  // if (passLength < 8 && passLength > 128){
  //   alert("Password must have 8-128 characters")
  //   return
  // }
  var hasLowercase = confirm("Would you like lowercase letters?")
  var hasUppercase = confirm("Would you like uppercase letters?")
  var numbers = confirm("Would you like numbers?")
  var symbols = confirm("Would you like symbols?")
  //adds lowercase characters if true
  if (hasLowercase === true){
    passwordOption = passwordOption.concat(lowercaseCharacters)
  }
  //adds uppercase characters if true
  if (hasUppercase === true){
    passwordOption = passwordOption.concat(uppercaseCharacters)
  }
  //adds numbers if true
  if (numbers === true){
    passwordOption = passwordOption.concat(numberCharacters)
  }
  //adds symbols if true
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