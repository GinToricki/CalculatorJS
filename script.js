let Num = 0;

function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}



function operate(operator, a,b){
    let result;
    switch(operator){
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        default:
            console.log("Error");
            break;
    }

}

for(let i = 0; i < 10; i++) {
    const number = document.querySelector(`#i${i}`);

    number.addEventListener("click", () => {
        populateDisplay(i)
    })
}

function populateDisplay(number){
    const display = document.querySelector(".num-display");

    if(Num == 0){
        display.textContent = number;
        Num = number;
    }else{
        display.textContent += number;
        Num += `${number}`;
    }
}

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => {
    Num = 0;
    populateDisplay("00000000")
    Num = 0;
})
