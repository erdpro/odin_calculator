function addition(numbers) {
    return numbers[0] + numbers[1];
}

function subtract(numbers) {
    return numbers[0] - numbers[1];
}

function multiply(numbers) {
    return numbers[0] * numbers[1];
}

function divide(numbers) {
    return numbers[0] / numbers[1];
}

function operate(first, second, third) {
    if (second === "+") {
        return addition([first, third]);
    } else if (second === "-") {
        return subtract([first, third]);
    } else if (second === "x") {
        return multiply([first, third]);
    } else if (second === "/") {
        return divide([first, third]);
    };
}

let first = "";
let second = "";
let third = "";
let reset = false;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const operations = document.querySelectorAll(".operation");
const forHover = document.querySelectorAll("button");

// Add pressed butons to display
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (second === "") {
            // Condition to check if previous result is being displayed
            if (reset === true) {
                display.textContent = "";
                reset = false;
            }
            // Check if text already has a decimal
            if (first.toString().includes(".") && button.textContent === ".") {
                return;
            };
            display.textContent += button.textContent;
            first = display.textContent;
        } else if (!(first === "") && !(second === "") && (third === "")) {
            display.textContent = "";
            display.textContent += button.textContent;
            third = display.textContent;
        } else {
            // Check if text already has a decimal
            if (third.toString().includes(".") && button.textContent === ".") {
                return;
            };
            display.textContent += button.textContent;
            third = display.textContent;
        };
    });
});

// Operation
operations.forEach((op) => {
    op.addEventListener("click", () => {
        if (third === "") {
            second = op.textContent;
        } else if (third === "0") {
            alert("Don't divide by zero please");
            third = "";
            display.textContent = "";
        } else {
            first = operate(+first,second,+third);
            display.textContent = first;
            if (op.textContent === "=") {
                second = "";
                third = "";
                reset = true;
            } else {
                second = op.textContent;
                third = "";
            }
        }
    });
});

// Clears display and all variables
clear.addEventListener("click", () => {
    display.textContent = "";
    first = "";
    second = "";
    third = "";
    reset = false;
});

// Hover effect for buttons
forHover.forEach((hover) => {
    hover.addEventListener("mouseover", () => {
        hover.style.backgroundColor = "darkgrey";
    });
    hover.addEventListener("mouseout", () => {
        hover.style.backgroundColor = "aliceblue";
    })
});