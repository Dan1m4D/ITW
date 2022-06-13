var op1 = ""
var op2 = ""
var operation = ""
var control = 1
var start = true
var res = document.getElementById("res")

function addNumber(){
    var x =  event.target.value
    if (control==1) {
        op1 += x
        console.log("op1: ",op1)
    }
    else{
        op2 += x
        console.log("op2: ",op2)
    }
    if (start == true){
        res.innerText = ""
        start = false
    }
    res.innerText += x
}

function addOperation() {
    control += 1
    operation = event.target.value
    console.log("operation: ",operation)
    if (control <= 2) {
        res.innerText += operation
    }
    else {
        res.innerText = "ERROR!!"
    }
}

function clearResult() {
    res.innerText = "0"
    start = true
    control = 1
    op1 = ""
    op2 = ""
    operation = ""
}

function calculate() {
    var c = 0
    op1 = parseFloat (op1)
    op2 = parseFloat (op2)
    switch (operation) {
        case "+":
            c =  parseFloat (op1 + op2)
         break;
        case "*":
            c =  parseFloat (op1 * op2)
            break;
        case "/":
            if (op2 == 0){
                c = "ERROR!!! Undefined!"
                break
            }
            else{
                c =  parseFloat (op1 / op2)
            }
            break;
        case "-":
            c =  parseFloat (op1 - op2)
            break;    
    }
    res.innerText = c
    console.log("c: ",c)   
}