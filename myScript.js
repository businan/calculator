function number(value) {
    let number_1 = document.getElementById('result-bottom').innerHTML;
    if (number_1.includes("+", "-", "÷", "*")) {
        return
    } else {

        number_1 += value;
    }
    document.getElementById('result-bottom').innerHTML = number_1;
}

function dotAdd(){
    let number_2 = document.getElementById('result-bottom').innerHTML;
    if ((!number_2.includes('.')) && (countDot(number_2)<=1)){
        document.getElementById('result-bottom').innerHTML = number_2+'.';
    }
}

function countDot(number) {
    for (var i = count = 0; i < number.length; count += +('.' === number[i++]));
    console.log(count)
    return count;
}

function result() {
    let calculateNumber_1 = document.getElementById('result-bottom').innerHTML;
    let calculateNumber_2 = document.getElementById('result-top').innerHTML;
    //if (isNaN(calculateNumber_1) || isNaN(calculateNumber_2)) return
    switch (calculateNumber_2.slice(-1)) {
        case "+":
            final_result = parseFloat(calculateNumber_1) + parseFloat(calculateNumber_2.slice(0, -1));
            console.log("toplama islemi yapildi");
            break;
        case '-':
            console.log("buraya girdi");
            final_result = parseFloat(calculateNumber_2.slice(0, -1)) - parseFloat(calculateNumber_1);
            console.log("cikarma islemi");
            break;
        case "÷":
            final_result = parseFloat(calculateNumber_2.slice(0, -1)) / parseFloat(calculateNumber_1);
            console.log("bolme islemi");
            break;
        case "*":
            final_result = parseFloat(calculateNumber_1) * parseFloat(calculateNumber_2.slice(0, -1));
            console.log("carpma islemi");
            break;
        default:
            return
        
    }
    document.getElementById('result-top').innerHTML = '';
    document.getElementById('result-bottom').innerHTML = final_result;
    console.log(calculateNumber_1)
    console.log(calculateNumber_2.slice(-1))
    console.log(calculateNumber_2.slice(0, -1))
}

function calculate(operation) {
    let calculateNumber_2 = document.getElementById('result-bottom').innerHTML;
    let calculateNumber_1 = document.getElementById('result-top').innerHTML;
    console.log("top" + calculateNumber_1)
    console.log("bottom" + calculateNumber_2)
    if ((calculateNumber_1.includes("+") || calculateNumber_1.includes("-") || calculateNumber_1.includes("÷") || calculateNumber_1.includes("*"))) {
        if ((calculateNumber_2.length === 1) && (calculateNumber_2.includes("+") || calculateNumber_2.includes("-") || calculateNumber_2.includes("÷") || calculateNumber_2.includes("*"))) {
            console.log("esit empty string")
            document.getElementById('result-bottom').innerHTML = "";
            document.getElementById('result-top').innerHTML = calculateNumber_1;
        } else {
            console.log('buradaaaa')
            switch (calculateNumber_1.slice(-1)) {
                case "+":
                    final_result = parseFloat(calculateNumber_1) + parseFloat(calculateNumber_2.slice(0, -1));
                    console.log("toplama islemi yapildi");
                    break;
                case "-":
                    final_result = parseFloat(calculateNumber_1) - parseFloat(calculateNumber_2.slice(0, -1));
                    
                    console.log("cikarma islemi yapildi");
                    break;
                case "÷":
                    final_result = parseFloat(calculateNumber_1) / parseFloat(calculateNumber_2.slice(0, -1));
                    console.log("bolme islemi yapildi");
                    break;
                case "*":
                    final_result = parseFloat(calculateNumber_1) * parseFloat(calculateNumber_2.slice(0, -1));
                    

                    console.log("carpma islemi yapildi");
                    break;
                default:
                    return
            }
            document.getElementById('result-top').innerHTML = final_result + calculateNumber_2.slice(-1);
            document.getElementById('result-bottom').innerHTML = '';
        }


    } else {
        let calculateNumber = document.getElementById('result-bottom').innerHTML;
        // switch (operation) {
        //     case "+":
        //         document.getElementById('result-top').innerHTML = calculateNumber;
        //         document.getElementById('result-bottom').innerHTML = '';

        //         console.log("toplama islemi");
        //         break;
        //     case "-":
        //         document.getElementById('result-top').innerHTML = calculateNumber;
        //         document.getElementById('result-bottom').innerHTML = '';
        //         console.log("cikarma islemi");
        //         break;
        //     case "÷":
        //         document.getElementById('result-top').innerHTML = calculateNumber;
        //         document.getElementById('result-bottom').innerHTML = '';
        //         console.log("bolme islemi");
        //         break;
        //     case "*":
        //         document.getElementById('result-top').innerHTML = calculateNumber;
        //         document.getElementById('result-bottom').innerHTML = '';
        //         console.log("carpma islemi");
        //         break;
        //     default:
        //         return
        // }
        document.getElementById('result-top').innerHTML = calculateNumber;
        document.getElementById('result-bottom').innerHTML = '';
    }

}
function reset() {
    document.getElementById('result-top').innerHTML = '';
    document.getElementById('result-bottom').innerHTML = '';
}
function lastCharDelete() {
    console.log('delete func')
    let lastChar = document.getElementById('result-bottom').innerHTML;
    document.getElementById('result-bottom').innerHTML = lastChar.slice(0, -1);
    console.log(typeof lastChar.slice(0, -1));
}

