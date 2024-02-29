const buttons = document.querySelectorAll('.calculator-button');
const input = document.getElementById('calculator-display-input');
const output = document.getElementById('calculator-display-output');
let firstNum = false

buttons.forEach(button => {
    
    button.addEventListener("click", ()=> {
        const buttonValue = button.getAttribute('value');
        
        if(buttonValue === 'clear') {
            input.innerText = "0";
            output.innerText = "";
            firstNum = false;
            return;
        }

        if(buttonValue === '=') {
            output.innerText = calculate();
            if(buttonValue === "+"||buttonValue === "-"||buttonValue === "*"||buttonValue === "/") {
                input.innerText = output.innerText + "buttonValue";
            } else if(buttonValue === "clear"){
                input.innerText = "0";
                output.innerText = "";
            }
            return;
        }
        
        if(!firstNum){
            input.innerText = "";
            input.innerText += buttonValue;
            firstNum = true;
        } else {
            input.innerText += buttonValue;
        }
    });
});

function calculate() {
    const equation = eval(input.innerText);
    return equation;
}