// Assignment code here

let length = prompt("Enter password length, must be 8-128 characters")
let lowcase = prompt("Would you like lowercase letters?", "yes or no")
let upcase = prompt("Would you like uppercase letters?")
let num = prompt("Would you like numbers?")
let special = prompt("Would you like special characters?")

var criteria = {
    //password length
    length: 0,
    //array for lowercase letters
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    //array for uppercase
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    //array for numbers
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    Character: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

function generatePassword() {
 //password length, can it be changed to have a max?
         var length= 8;
         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
         retval = "";
    for (var i = 0, n = charset.length; i<length; i++){
        retval += charset.charAt(Math.floor(Math.random() * n));    
    }
    return password;
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



