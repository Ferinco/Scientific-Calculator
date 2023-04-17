const screen = document.getElementById("screen");
const subScreen = document.getElementById("subscreen");
const buttons = document.querySelectorAll(".btn");
const switcher = document.getElementById("switch");
const antiSwitcher = document.getElementById("anti-switch");
antiSwitcher.style.display = "none";
const normal = document.getElementById("normal");
const arc = document.getElementById("arc");
arc.style.display = "none";
const operations = document.querySelectorAll(".operations");
const specials = document.querySelectorAll(".special");
const equals = document.getElementById("equals");
const nFactorial = document.getElementById("factorial");
const sqrtButton = document.getElementById("sqrt");
const inverseBtn = document.getElementById("inverse");
const sqrButton = document.getElementById("square")
const cubeButton = document.getElementById("cube")

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) { result *= i; }
    return result;
}

// function extractNumbers(inputString){
//     return inputString.replace(/\D/g, "");
// }

nFactorial.addEventListener("click", (e) => {
    const inputNum = parseInt(screen.value);
    const answer = factorial(inputNum);
    screen.value = answer;

});
inverseBtn.addEventListener("click", (e) => {
    const inputNum = parseInt(screen.value);
    const answer = 1 / (inputNum);
    screen.value = answer;
});
sqrButton.addEventListener("click",(e)=>{
const inputNum = parseInt(screen.value)
const answer = Math.pow(inputNum, 2)
    screen.value = answer
})
cubeButton.addEventListener("click",(e)=>{
    const inputNum = parseInt(screen.value)
    const answer = Math.pow(inputNum, 3)
    screen.value = answer
})



buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.dataset.num;
        screen.value += value;
        if (value == "pi") {
            equals.addEventListener("click", (e) => {
                answer = Math.PI * screen.value;
                screen.value = answer;
            });

        }
        if (screen.value == "√" + value) {
            equals.addEventListener("click", (e) => {
                let answer = Math.sqrt(value);
                screen.value = answer;
            });
        }
    });


});
specials.forEach((spc) => {
    spc.addEventListener("click", (e) => {
        let special = e.target.dataset.spc;
        if (special == "switch") {
            switcher.style.display = "none",
                arc.style.display = "flex",
                normal.style.display = "none",
                antiSwitcher.style.display = "block";
        }
        else if (special == "antiswitch") {
            antiSwitcher.style.display = "none",
                arc.style.display = "none",
                normal.style.display = "flex",
                switcher.style.display = "block";
        }
        else if (special == "cancel") {
            screen.value = screen.value.substring(0, screen.value.length - 1);
        }
        else if (special == "clear") {
            screen.value = " ";
            subScreen.value = "";
        }
        else if (special == "√") {
            screen.value += special;
        }
    });
});
operations.forEach((ops) => {
    ops.addEventListener("click", (e) => {
        let operation = e.target.dataset.ops;
        subScreen.value += operation;
        // if (operation == "equals") {

        // }
        // else if (operation == "log") {
        //     answer = Math.log10(screen.value);
        //     screen.value = answer;
        // } else if (operation == "pi") {
        //     answer = Math.PI * screen.value;
        //     screen.value = answer;
        // }
    });
});

equals.addEventListener("click", (e) => {
    if (screen.value == " ") {
        screen.value = " ";
    } else if (subScreen.value == "sin") {
        subScreen.value = " ";
        answer = Math.sin((screen.value * Math.PI) / 180);
        screen.value = Math.round(answer*10)/10;
    } else if (subScreen.value == "cos") {
        subScreen.value = " ";
        answer = Math.cos((screen.value * Math.PI) / 180);
        screen.value = answer;
    } else if (subScreen.value == "tan") {
        subScreen.value = " ";
        answer = Math.tan((screen.value * Math.PI) / 180);
        screen.value = Math.round(answer*10)/10;
    } else if (subScreen.value == "arcsin") {
        subScreen.value = " ";
        result = Math.asin(screen.value);
        answer = (result*180/Math.PI)
        screen.value = Math.round(answer)
    } else if (subScreen.value == "arccos") {
        subScreen.value = " ";
        result = Math.acos(screen.value);
        answer = (result*180/Math.PI)
        screen.value = Math.round(answer)
    } else if (subScreen.value == "arctan") {
        subScreen.value = " ";
        result = Math.atan(screen.value);
        answer = (result*180/Math.PI)
        screen.value = Math.round(answer)
    } else if (subScreen.value == "log") {
        subScreen.value = " ";
        answer = Math.log(screen.value);
        screen.value = Math.round(answer);
    }
    else {
        let answer = eval(screen.value);
        screen.value = answer;
    }


});
// else if (operation == "switch") {
//     ;
// } else if (operation == "anti-switch") {

// }

