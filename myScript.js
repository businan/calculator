function calculate (operation) {
    let calculateNumber = document.getElementById('result-bottom').innerHTML;
    console.log(calculateNumber)
    //if (calculateNumber.includes("+","-","÷","*"))
    switch(operation) {
        case "+":
            document.getElementById('result-top').innerHTML = calculateNumber;
            document.getElementById('result-bottom').innerHTML = '';
            
          console.log("toplama islemi");
          break;
        case "-":
            console.log("cikarma islemi");
          break;
        case "÷":
            console.log("bolme islemi");
            break;
        case "*":
            console.log("carpma islemi");
            break;
        default:
          return
      }
}
function number (value) {
    let number_1 = document.getElementById('result-bottom').innerHTML;
    if (number_1.includes("+","-","÷","*")){
        return
    }else {
        number_1+= value;
    }
    
    document.getElementById('result-bottom').innerHTML = number_1;
}

function result (){
    let calculateNumber_1 = document.getElementById('result-bottom').innerHTML;
    let calculateNumber_2 = document.getElementById('result-top').innerHTML;
    switch(calculateNumber_2.slice(-1)) {
        case "+":
            final_result = parseFloat(calculateNumber_1) + parseFloat(calculateNumber_2.slice(0,-1));
            document.getElementById('result-top').innerHTML = '';
            document.getElementById('result-bottom').innerHTML = final_result;
            
          console.log("toplama islemi yapildi");
          break;
        case "-":
            console.log("cikarma islemi");
          break;
        case "÷":
            console.log("bolme islemi");
            break;
        case "*":
            console.log("carpma islemi");
            break;
        default:
          return
      }
    console.log(calculateNumber_1)
    console.log(calculateNumber_2.slice(-1))
    console.log(calculateNumber_2.slice(0,-1))
}