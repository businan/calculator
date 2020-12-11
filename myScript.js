document.querySelector('.lastCharDelete').addEventListener('click', lastCharDelete);

document.querySelector('.reset').addEventListener('click', reset);

document.querySelector('.dotAdd').addEventListener('click', dotAdd);

document.querySelector('.resultButton').addEventListener('click', result);

const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function () {
        let number_1 = document.getElementById('result-bottom').innerHTML;
     
            number_1 += numberButton.innerHTML;
        
        document.getElementById('result-bottom').innerHTML = number_1;
    })
})

const operators = document.querySelectorAll('.calculate');
operators.forEach(operator => {
    operator.addEventListener('click', calculate);
})


function dotAdd() {
    let buttomNumber = document.getElementById('result-bottom').innerHTML;
    if ((!buttomNumber.includes('.')) && (countDot(buttomNumber) < 2)) {
        document.getElementById('result-bottom').innerHTML = buttomNumber + '.';
    }
}

function countDot(buttomNumber) {
    let count = 0;
    for (let i = 0; i < buttomNumber.length; i++) {
        if (i === '.') {
            count++;
        }
    }
    return count;
}

function result() {
    let calculateNumber_1 = document.getElementById('result-bottom').innerHTML;
    let calculateNumber_2 = document.getElementById('result-top').innerHTML;
    
    if (calculateNumber_1 === '') return;
    switch (calculateNumber_2.slice(-1)) {
        case "+":
            final_result = parseFloat(calculateNumber_1) + parseFloat(calculateNumber_2.slice(0, -1));
            break;
        case '-':
            final_result = parseFloat(calculateNumber_2.slice(0, -1)) - parseFloat(calculateNumber_1);
            break;
        case "÷":
            final_result = parseFloat(calculateNumber_2.slice(0, -1)) / parseFloat(calculateNumber_1);
            break;
        case "*":
            final_result = parseFloat(calculateNumber_1) * parseFloat(calculateNumber_2.slice(0, -1));
            break;
        default:
            return

    }
    document.getElementById('result-top').innerHTML = '';
    document.getElementById('result-bottom').innerHTML = final_result;
    
}

function calculate() {
    console.log('calculate');
    
    let calculateNumber_2 = document.getElementById('result-bottom').innerHTML;
    let calculateNumber_1 = document.getElementById('result-top').innerHTML;
    
    if ((calculateNumber_1.includes("+") || calculateNumber_1.includes("-") || calculateNumber_1.includes("÷") || calculateNumber_1.includes("*"))) {
        if ((calculateNumber_2.length === 1) && (calculateNumber_2.includes("+") || calculateNumber_2.includes("-") || calculateNumber_2.includes("÷") || calculateNumber_2.includes("*"))) {
            
            document.getElementById('result-bottom').innerHTML = "";
            document.getElementById('result-top').innerHTML = calculateNumber_1;
        } else {
            switch (calculateNumber_1.slice(-1)) {
                case "+":
                    final_result = parseFloat(calculateNumber_1) + parseFloat(calculateNumber_2.slice(0, -1));
                    break;
                case "-":
                    final_result = parseFloat(calculateNumber_1) - parseFloat(calculateNumber_2.slice(0, -1));
                    break;
                case "÷":
                    final_result = parseFloat(calculateNumber_1) / parseFloat(calculateNumber_2.slice(0, -1));
                    break;
                case "*":
                    final_result = parseFloat(calculateNumber_1) * parseFloat(calculateNumber_2.slice(0, -1));
                    break;
                default:
                    return;
            }
            document.getElementById('result-top').innerHTML = final_result + calculateNumber_2.slice(-1);
            document.getElementById('result-bottom').innerHTML = '';
        }


    } else {
        let calculateNumber = document.getElementById('result-bottom').innerHTML;
        document.getElementById('result-top').innerHTML = calculateNumber;
        document.getElementById('result-bottom').innerHTML = '';
    }

}
function reset() {
    document.getElementById('result-top').innerHTML = '';
    document.getElementById('result-bottom').innerHTML = '';
}
function lastCharDelete() {
    let lastChar = document.getElementById('result-bottom').innerHTML;
    document.getElementById('result-bottom').innerHTML = lastChar.slice(0, -1);
}

