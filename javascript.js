let num1;
let num2;
let op;

const operators = ['+', '-', '*', '/'];

//Basic Math formulas
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


function operate(op, num1, num2){
    if (op == '+'){
        return add(num1, num2);
    }
    else if (op == '-'){
        return subtract(num1, num2);
    }
    else if (op == '*'){
        return multiply(num1, num2);
    }
    else if (op == '/'){
        return divide(num1, num2);
    }
}



function storeExpression(expr){
    return expr.split(/([+\-*/])/);
}


const divBox = document.querySelector(".inputBox");
//Clicking buttons
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(box => {
    box.addEventListener("click", (e) => {

        //calculate
        if (box.textContent == "="){
            const parts = storeExpression(divBox.textContent);
            if (parts.length == 3 && (!isNaN(Number(parts[0])))
            && (!isNaN(Number(parts[2]))) && operators.includes(parts[1])){
                divBox.textContent = operate(parts[1], Number(parts[0]), Number(parts[2]));
            }
        }
        else{
            divBox.textContent += e.target.textContent;
            console.log(e.target.textContent);
        }
    });
});

