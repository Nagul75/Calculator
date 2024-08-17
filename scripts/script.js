let inputString = "";

const parentDiv = document.querySelector("#calculator");
parentDiv.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id)
    {
        case "one": inputString + "1";
        break;
        case "two": inputString + "2";
        break;
        case "three": inputString + "3";
        break;
        case "four": inputString + "4";
        break;
        case "five": inputString + "5";
        break;
        case "six": inputString + "6";
        break;
        case "seven": inputString + "7";
        break;
        case "eight": inputString + "8";
        break;
        case "nine": inputString + "9"
        break;
        case "zero": inputString + "0";
        break;
        case "plus": inputString + "+";
        break;
        case "minus": inputString + "-";
        break;
        case "divide": inputString + "/";
        break;
        case "multiply": inputString + "*";
        break;
        default:
            alert("INCORRECT INPUT");
            break;
    }
})

const display = document.querySelector("#display");



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