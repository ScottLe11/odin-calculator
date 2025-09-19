let operand1 = null;
let operand2 = null;
let op = null;

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



// function storeExpression(expr){
//     return expr.split(/([+\-*/])/);
// }

function handleNum(val){
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
            operand2 += val;
        }
        divBox.textContent = operand2;
    }
}

function handleOperator(val){
    op = val;
    divBox.textContent = op;
}

function handleEquals(){
    if (operand1 != null && operand2 != null && op != null){
        console.log(operand1 + op + operand2);
        divBox.textContent = operate(op, Number(operand1), Number(operand2));
    }
}


const divBox = document.querySelector(".inputBox");
//Clicking buttons
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(box => {
    box.addEventListener("click", (e) => {
        const val = e.target.textContent;

        if (!isNaN(Number(val))){
            handleNum(val);
        }

        else if (operators.includes(val)){
            handleOperator(val);
        }
        else if (val == "="){
            handleEquals();
        }
        else if (val = "c"){
            handleErase();
        }
        // const parts = storeExpression(divBox.textContent);
        // console.log(parts);
        // //calculate
        // if (box.textContent == "="){
        //     //const parts = storeExpression(divBox.textContent);
            
        //     if (parts.length == 3 && (!isNaN(Number(parts[0])))
        //     && (!isNaN(Number(parts[2]))) && operators.includes(parts[1])){
        //         divBox.textContent = operate(parts[1], Number(parts[0]), Number(parts[2]));
        //     }
        //     //else if (parts.length == 4){

        //     //}
        // }
        // else if (parts.length == 4){
        //     console.log("hjere");
        //     //const parts = storeExpression(divBox.textContent);
        //     if ((!isNaN(Number(parts[0])))
        //     && (!isNaN(Number(parts[2]))) && operators.includes(parts[1]) && operators.includes(parts[3])){
        //         divBox.textContent = operate(parts[1], Number(parts[0]), Number(parts[2])) + parts[3];
        //     }
        // }

        // else{
        //     divBox.textContent += e.target.textContent;
        //     console.log(e.target.textContent);
        // }
    });
});

