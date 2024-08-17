let firstNum = "";
let secondNum = "";
let op = "";

let displayText = "";

const equals = document.querySelector("#equals");
const display = document.querySelector("#display-content");

const clear = document.querySelector("#clear");

const parentDiv = document.querySelector("#calculator");
parentDiv.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id)
    {
        case "one":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "1";
                display.innerHTML = display.innerHTML + "1";
            }
            else {
                secondNum += "1";
                display.innerHTML = display.innerHTML + "1";
            } 
        break;
        case "two":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "2";
                display.innerHTML = display.innerHTML + "2";
            }
            else{
                secondNum += "2";
                display.innerHTML = display.innerHTML + "2";
            }
        break;
        case "three":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "3";
                display.innerHTML = display.innerHTML + "3";
            }
            else{
                secondNum += "3";
                display.innerHTML = display.innerHTML + "3";
            }
        break;
        case "four":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "4";
                display.innerHTML = display.innerHTML + "4";
            }
            else{
                secondNum += "4";
                display.innerHTML = display.innerHTML + "4";
            }
        break;
        case "five":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "5";
                display.innerHTML = display.innerHTML + "5";
            }
            else{
                secondNum += "5";
                display.innerHTML = display.innerHTML + "5";
            }
        break;
        case "six":
        if(op == ""){
            if(display.innerHTML != "") display.innerHTML = "";
            firstNum += "6";
            display.innerHTML = display.innerHTML + "6";
        }
        else{
            secondNum += "6";
            display.innerHTML = display.innerHTML + "6";
        }
        break;
        case "seven":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "7";
                display.innerHTML = display.innerHTML + "7";
            }
            else{
                secondNum += "7";
                display.innerHTML = display.innerHTML + "7";
            }
        break;
        case "eight":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "8";
                display.innerHTML = display.innerHTML + "8";
            }
            else{
                secondNum += "8";
                display.innerHTML = display.innerHTML + "8";
            }
        break;
        case "nine":
            if(op == ""){
                if(display.innerHTML != "") display.innerHTML = "";
                firstNum += "9";
                display.innerHTML = display.innerHTML + "9";
            }
            else{
                secondNum += "9";
                display.innerHTML = display.innerHTML + "9";
            }
        break;
        case "zero":
            if(op == "" && firstNum == "") firstNum += "";
            else if(op == ""){
                firstNum += "0";
                display.innerHTML += "0";
            }
            else{
                if(secondNum == "") secondNum += "";
                else{
                    secondNum += "0";
                    display.innerHTML += "0";
                }
            } 
        break;
        case "equals": break;
        case "clear": break;
        case "plus": op += "+";
        display.innerHTML = "";
        break;
        case "minus": op += "-";
        display.innerHTML = "";
        break;
        case "divide": op += "/";
        display.innerHTML = "";
        break;
        case "multiply": op += "*";
        display.innerHTML = "";
        break;
        default:
            alert("INCORRECT INPUT");
            break;
    }
})


function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function divide(num1, num2)
{
    return num1/num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function operate(num1, op, num2)
{
    let result;
    switch(op)
    {
        case "+": result =  add(num1, num2);
        break;
        case "-": result = subtract(num1, num2);
        break;
        case "*": result = multiply(num1, num2);
        break;
        case "/": result = divide(num1, num2);
    }
    return result;
}

equals.addEventListener("click", () => {
    if(firstNum != "" && secondNum != "" && op != "")
    {
        num1 = parseInt(firstNum);
        num2 = parseInt(secondNum);
        let result = operate(num1, op[0], num2);
        display.innerHTML = result;
        firstNum = "";
        secondNum = "";
        op = "";
    }
});

clear.addEventListener("click", () => {
    display.innerHTML = "";
    firstNum = "";
    secondNum = "";
    op = "";
})
