let operand1 = null;
let operand2 = null;
let op = null;

let resetFlag = false;

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
    if (num2 == 0){
        return "Error divide by 0";
    }
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



// function storeExpression(expr){
//     return expr.split(/([+\-*/])/);
// }

function handleNum(val){
    if (resetFlag){
        handleErase();
        resetFlag = false;
    }
    
    if (op == null){
        // build first operand
        if (operand1 == null){
            operand1 = val;
        }
        else{
            operand1 += val;
        }
        divBox.textContent = operand1;
    }
    else{
        if (operand2 == null){
            operand2 = val;
        }
        else{
            console.log(operand2 + " "  +val)
            operand2 += val;
        }
        divBox.textContent = operand2;
    }
}

function handleOperator(val){
    if (op != null){
        handleEquals(false);
    }
    operand2 = null;
    op = val;
    //divBox.textContent = op;
}

function handleEquals(val){
    if (operand1 != null && operand2 != null && op != null){
        //console.log(operand1 + op + operand2);
        operand1 = operate(op, Number(operand1), Number(operand2));
        divBox.textContent = operand1;
        if (val){
            resetFlag = true;
        }
    }
}

function handleErase(){
    op = null;
    operand1 = null;
    operand2 = null;

    divBox.textContent = "";
}

function parseVal(val){
    if (!isNaN(Number(val))){
            handleNum(val);
        }

        else if (operators.includes(val)){
            handleOperator(val);
        }
        else if (val == "="){
            handleEquals();
        }
        else if (val == "C"){
            handleErase(true);
        }
}


const divBox = document.querySelector(".inputBox");
//Clicking buttons
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(box => {
    box.addEventListener("click", (e) => {
        const val = e.target.textContent;
        parseVal(val);
        console.log("op: " + op);
        console.log("operand1: " + operand1);
        console.log("operand2: " + operand2);
        
    });



});
document.addEventListener("keydown", (e) => {
        const val = e.key;
        parseVal(val);
        console.log("op: " + op);
        console.log("operand1: " + operand1);
        console.log("operand2: " + operand2);
    });

