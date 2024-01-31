// importing elements from html
const pwdGenerate = document.querySelector(".pwd-generate");
const clipboard = document.querySelector("#copy");
const generateButton = document.getElementById("generate-pwd");

// variables to work on creating the password
const lengthPwd = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const simbols = "!@#$%^&*()";
const allChars = upperCase + lowerCase + numbers + simbols;
let password = "";

// commanding functions by clicking
generateButton.addEventListener("click", generatePwD);
clipboard.addEventListener("click", passwordCopy);

// password generation function
function generatePwD(){
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += simbols[Math.floor(Math.random() * simbols.length)];

  while(lengthPwd > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }
  
  pwdGenerate.innerHTML = password;
  password = "";
};

// function to copy the password to the clipboard
function passwordCopy(){
  navigator.clipboard.writeText(password).then(function() {
    console.log('Copiando para a área de transferência foi bem sucedido!');
    password = ""
  }, function(err) {
    console.error('Erro ao copiar texto: ', err);
  });
};