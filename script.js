// take two numbers and calls calculation function on them
const operate = (one, two, op) => {
    if (op === '+') return add(one, two);
    if (op === '-') return subtract(one, two);
    if (op === '*') return multiply(one, two);
    if (op === '/') return divide(one, two);
}

// create functions for add, subtract, multiply, divide
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// create variables to store values inputted by user before and after operation button
let currentOp, output;
let a = '', b = '';

// store all possible numbers and all possible operations in variables
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operations = ['+', '-', '*', '/'];

// link display to a JS variable
const display = document.querySelector('#display');

// push button text content to output when clicked
const grid = document.querySelector('#calculator');
grid.addEventListener('click', e => {
    // assign b the second numeric input if a is not empty and operation has been declared
    if (nums.includes(e.target.textContent) && a && currentOp) {
        b += e.target.textContent;
        output = b;
    }
    
    // assign a the first numeric input if a is empty
    if (nums.includes(e.target.textContent) && !currentOp) {
        a += e.target.textContent;
        output = a;
    }

    // if +-*/ is clicked, update currentOp
    if (operations.includes(e.target.textContent)) {
        // check to make sure a has a value
        if (a && b === '') currentOp = e.target.textContent;

        // if +-*/ is clicked and a and b have values, update output
        if (a !== '' & b !== '') {
            output = operate(Number(a), Number(b), currentOp);
            currentOp = e.target.textContent;

            // if output is decimal, round to 2 places
            if (output % 1 !== 0) output = Math.round(output * 100) / 100;

            a = output;
            b = '';
        }
    }

    // if = is clicked, calculate output
    if (e.target.textContent === '=') {
        output = operate(Number(a), Number(b), currentOp);

        // if output is decimal, round to 2 places
        if (output % 1 !== 0) output = Math.round(output * 100) / 100;

        a = output;
        b = '';
    }

    // if AC is clicked, clear output, a, b, and currentOp
    if (e.target.textContent === 'AC') {
        a = '';
        b = '';
        currentOp = undefined;
        output = undefined;
    }

    // keep track of current output in display
    display.textContent = output;

    console.log([a, b, currentOp]);
    console.log(output);
});