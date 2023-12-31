// global arrays
let specialCharArr = ['!','"', '#', '$', '%', '&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','{','|','}','~',',',"'"];
let numbersArr = ['0','1','2','3','4','5','6','7','8','9'];
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // prompt for length
  let passLength = window.prompt("What is the length you would like");
  // console.log(passLength); 

  if(passLength < 8){
    window.alert("this is lower than range. Please try again.");
    // console.log("this is lower than range");
    writePassword();
  } else if (passLength > 128){
    window.alert("this is higher than range. Please try again.");
    // console.log("this is higher than range");
    writePassword();
  }else{
    // console.log("this is in the range");

    var password = generatePassword(passLength);
    password = removeCommas(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// main func
function generatePassword(passLength){

  // declare empty array
  let securePassArr = [];
  let finalSecurePass = [];

  // prompt for special char
  let specCharAnswer = window.confirm("Would you like special Characters in your secure password?");
  // console.log(specCharAnswer);

  // add special char array
  if(specCharAnswer){
    securePassArr = addToArray(specialCharArr, securePassArr);
  }

  // prompt for numbers
  let numAnswer = window.confirm("Would you like numbers in your secure password?");
  // console.log(numAnswer);

  // add numbers
  if(numAnswer){
    securePassArr = addToArray(numbersArr, securePassArr);
  }

  // prompt for lower case
  let lowerCaseAnswer = window.confirm("Would you like lower case characters in your secure password?");
  // console.log(lowerCaseAnswer);

  // add lower case array
  if(lowerCaseAnswer){
    securePassArr = addToArray(lowerCaseArr, securePassArr);
  }

  // prompt for upper case
  let upperCaseAnswer = window.confirm("Would you like upper case characters in your secure password?");
  // console.log(upperCaseAnswer);

  // add upper case array
  if(upperCaseAnswer){
    securePassArr = addToArray(upperCaseArr, securePassArr);
  }

  // console.log(securePassArr.toString());

  // get random charcters in new array
  for(let j = 0; j < passLength; j++){
    var ctr = getRandom(securePassArr.length);
    finalSecurePass[j] = securePassArr[ctr];
  }

  // print securePass array on page
  return finalSecurePass
}

// function to add elements to array
function addToArray(array1, array2){
  let passArr = [].concat(array1, array2)
  return passArr;
}

// function to get random number 
function getRandom(length){
  let index = Math.floor(Math.random() * length);
  return index;
}

// function remove commas and concat to string
function removeCommas(array){
  let withoutCommas = "";
  for(let k = 0; k < array.length; k++){
    withoutCommas += array[k];
  }
  return withoutCommas;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// call main func
writePassword();
