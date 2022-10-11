// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

 var userInput = window.prompt("How long do you want your password to be")

 var passwordLength = parseInt(userInput)

 if (isNaN(passwordLength)) {
  window.alert("that's not a number!")
  return
 }
 
 if(passwordLength < 8 || passwordLength > 128) {
   window.alert("Password length must be between 8 and 128 characters")
   return
 }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password")

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolsList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var optionCart = []

  if (userWantsNumbers === true) {
    optionCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionCart.push(symbolsList)
  }

  if (userWantsLowercase === true) {
    optionCart.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionCart.push(uppercaseList)
  }

  if (optionCart.length === 0) {
    optionCart.push(lowercaseList)
  }
  console.log(optionCart)
  var generatePassword1 = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionCart)
    var randomChar = getRandomItem(randomList)
    generatePassword1 += randomChar
  }
  
  return generatePassword1

}


// Write password to the #password input
function getRandomItem(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    var randomValue = arr[randomIndex]
    return randomValue
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
