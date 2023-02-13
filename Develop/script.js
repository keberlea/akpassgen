// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

var criteria = {
  //password length
  length: '',
  //array for lowercase letterss
  lowercase: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ],
  //array for uppercase
  uppercase: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ],
  //array for numbers
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  character: [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    "'",
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    '\\',
    ':',
    ';',
    '<',
    '>',
    '=',
    '?',
    '@',
    '[',
    ']',
    '^',
    '_',
    '`',
    '{',
    '}',
    '|',
    '~'
  ]
}

// Write password to the #password input

function writePassword () {
  //calls generatePassword function
  var password = generatePassword()
  // sets passwordText to password id in html
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

//function to generate a new password
function generatePassword () {
  var length = ''
  //variables from criteria input from prompts
  var lowercase
  var uppercase
  var number
  var character
  let newpswd = []

  //criteria.length = ''
  length = ''

  //loop to add criteria to password
  while (length < 8 || length > 128) {
    console.log('hello')
    let length = prompt(
      'How long would you like your password? Password must be 8-128 characters'
    )
    if (length === null) {
      return 'Your Secure Password'
    } else {
      // make sure its a finite number
      if (isNaN(length)) {
        alert('That is not a number')
        return 'Your Secure Password'
      }

      // does number match length crieteria?
      else {
        if (length < 8 || length > 128) {
          alert('Password must be between 8-128 characters')
          return 'Your Secure Password'
        } else {
          prompts()

          //keep adding characters until length =  length user set
          while (newpswd.length < length) {
            if (lowercase === false && uppercase === false && number === false && character === false) {
              alert('you must choose at least one criteria.')
              prompts()
            } 
            
            else {
              //adds lowercase one at a time
              if (lowercase === true && newpswd.length < length) {
                var lc = criteria.lowercase[Math.floor(Math.random() * 26)]
                pswd = criteria.length + lc
                newpswd.push(pswd)
              }
              console.log(lc)

              // adds uppercase one at a time
              if (uppercase === true && newpswd.length < length) {
                var uc = criteria.uppercase[Math.floor(Math.random() * 26)]
                pswd = criteria.length + uc
                newpswd.push(pswd)
              }
              console.log(uc)

              //adds characters one at a time
              if (character === true && newpswd.length < length) {
                var sc = criteria.character[Math.floor(Math.random() * 32)]
                pswd = criteria.length + sc
                newpswd.push(pswd)
              }
              console.log(sc)

              // adds number one at a time
              if (number === true && newpswd.length < length) {
                var num = criteria.number[Math.floor(Math.random() * 10)]
                pswd = criteria.length + num
                newpswd.push(pswd)
              }
              console.log(num)
            }

          }
        }
      }
      console.log(newpswd)
      var newpass = newpswd.join('')
      return newpass;

      //function to show prompts when clicking generate password
      function prompts () {
        console.log('hello')
        lowercase = confirm('Would you like lowercase letters?')
        uppercase = confirm('Would you like uppercase letters?')
        number = confirm('Would you like numbers?')
        character = confirm('Would you like special characters?')
      }
    }
  }
}

/*function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
  */
