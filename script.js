const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const romanNum = [];

const decimalToRoman = (input) => {
  while (input>=1000){
    input -= 1000;
    romanNum.push("M"); 
  };
  while (input>=900){
    input-=900;
    romanNum.push("CM");
  }
  while (input>=500){
    input -= 500;
    romanNum.push("D"); 
  }
  while (input>=400){
    input -= 400;
    romanNum.push("CD"); 
  }
  while (input>=100){
    input -= 100;
    romanNum.push("C");
    }
  while (input>=90){
    input -= 90;
    romanNum.push("XC"); 
  }
  while (input>=50){
    input -= 50;
    romanNum.push("L"); 
  }
  while (input>=40){
    input -= 40;
    romanNum.push("XL"); 
  }
  while (input>=10){
    input -= 10;
    romanNum.push("X"); 
  }
  while (input>=9){
    input -= 9;
    romanNum.push("IX"); 
  }
  while (input>=5){
    input -= 5;
    romanNum.push("V"); 
  }
  while (input>=4){
    input -= 4;
    romanNum.push("IV"); 
  }
  while (input>=1){
    input -= 1;
    romanNum.push("I"); 
  }
   return romanNum.join("")
};

const checkUserInput = () => {

  const inputInt = parseInt(numberInput.value);
  
  if (isNaN(numberInput.value) || numberInput.value != parseInt(numberInput.value)){
    result.innerText="Please enter a valid number";
    return;
  }
  else if (numberInput.value<1) {
    result.innerText="Please enter a number greater than or equal to 1";
    return;
  }
  else if (numberInput.value>3999) {
    result.innerText="Please enter a number less than or equal to 3999";
    return;
  }

  result.innerText = decimalToRoman(inputInt);
  numberInput.value = "";
  romanNum.splice(0);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});