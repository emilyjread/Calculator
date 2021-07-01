displayDiv = document.querySelector("#display");

var currentNumber= "";
var operator="";
var firstNum= 0
var decimal=false

function press(number){
    if(number =="." && decimal==false){
        decimal=true
    }
    if(number =="." && decimal==false){
        number=null
    }
    currentNumber+= number;
    console.log(currentNumber)
    displayDiv.innerText= currentNumber
}

function setOP(op){
    operator= op;
    firstNum= currentNumber
    currentNumber="";
}

function calculate(){
    currentNumber= Number(currentNumber);
    firstNum = Number(firstNum)
    if (operator=="+"){
        result= firstNum+currentNumber;
    }
    if (operator=="-"){
        result= firstNum-currentNumber;
    }
    if (operator=="*"){
        result= firstNum*currentNumber;
    }
    if (operator=="/"){
        result= firstNum/currentNumber;
    }
    displayDiv.innerText=result;
    currentNumber=result;
}

function clr(){
    currentNumber= "";
    operator="";
    firstNum= 0
    displayDiv.innerText=0;
}