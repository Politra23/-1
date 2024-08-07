
const output = document.querySelector('.output');
const numbers = document.querySelectorAll('.numbers div');
const activities = document.querySelectorAll('.activites div');

let operator = '';
let firstNumber = '';
let currentInput = '';

function updateOutput(value) {
    output.textContent = value;
}

function calculate(num1, num2, operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (operator === 'plus') return (a + b).toString();
    if (operator === 'minus') return (a - b).toString();
    
    if (operator === 'multiply'){
        if (a > 1000 || b > 1000){
            alert('харе')
            return ''
        }  return (a * b).toString
    }
    if (operator === 'divide'){
        if(b === 0){
            alert('На ноль не делема')
            firstNumber = operator =''
            return  ''
        }  return (a/b).toString()
    }

}




function handleActivity(id) {
    if (id === 'equal') {
        currentInput = calculate(firstNumber, currentInput, operator);
        updateOutput(currentInput);
        firstNumber = operator = '';
    }
    else {
        firstNumber = currentInput;
        operator = id;
        currentInput = ''; 
    }
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentInput += number.textContent;
        updateOutput(currentInput);
    });
});

activities.forEach(activity => {
    activity.addEventListener('click', () => {
        handleActivity(activity.id);
    });
});


document.addEventListener('keydown', (event)=> {
    const key = event.key
    if(/\d/.test(key)){
        currentInput+=key
        updateOutput(currentInput)
    }
    else if (key === "+"){
        handleActivity('plus')
    }
    else if (key === "-"){
        handleActivity('minus')
    }
    else if (key === "*"){
        handleActivity('multiply')
    }
    else if (key === "/"){
        handleActivity('divide')
    }
    else if (key === "="){
        handleActivity('equal')
    }


}) 


