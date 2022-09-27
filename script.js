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

// track current output window content in variable
// let output;
// let current = '';
// let onOp = false;

// create variables to store values inputted by user before and after operation button
let a, b, currentOp, output;

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['+', '-', '*', '/'];

// link display to a JS variable
const display = document.querySelector('#display');

// push button text content to output when clicked
const grid = document.querySelector('#calculator');
grid.addEventListener('click', e => {
    // assign b the second numeric input if a is not empty
    if (nums.includes(e.target.textContent) && a) {
        b = Number(e.target.textContent);
        output = b;
    }
    
    // assign a the first numeric input if a is empty
    if (nums.includes(e.target.textContent) && !a) {
        a = Number(e.target.textContent);
        output = a;
    }

    // if +-*/ is clicked, update currentOp
    if (operations.includes(e.target.textContent)) {
        // check to make sure a has a value
        if (a) currentOp = e.target.textContent;
    }

    // if = is clicked, calculate output
    if (e.target.textContent === '=') {
        output = operate(a, b, currentOp);
        a = output;
    }

    // if AC is clicked, clear output, a, b, and currentOp
    if (e.target.textContent === 'AC') {
        a = undefined;
        b = undefined;
        currentOp = undefined;
        output = undefined;
    }

    // keep track of current output in display
    display.textContent = output;

    console.log([a, b, currentOp]);
    console.log(output);



    // // output.push(e.target.textContent);
    // // display.textContent = output[output.length - 1];
    
    // // if adding more digits to a current number:
    // if (nums.includes(e.target.textContent) && !onOp) {
    //     current += e.target.textContent;
    //     display.textContent = current;
    // }

    // // if typing number after operation button is clicked:
    // if (nums.includes(e.target.textContent) && onOp) {
    //     current = '';
    //     onOp = false;
    //     current += e.target.textContent;
    //     display.textContent = current;
    // }

    // // if AC is clicked, delete everything in display
    // if (e.target.textContent === 'AC') {
    //     current = '';
    //     output = 0;
    //     display.textContent = '';
    // }

    // // if + is clicked, add plus sign to output string
    // if (e.target.textContent === '+') {
    //     // if (output.includes('+')) {
    //     //     const splitted = output.split('+');
    //     //     display.textContent = Number(splitted[0]) + Number(splitted[1]);
    //     // }
    //     // output += '+';
    //     // const splitted = output.split('+');
    //     // display.textContent = splitted[0];
    //     output = Number(current);
    //     onOp = true;
    // }

    // // if = is clicked:
    // if (e.target.textContent === '=') {
    //     display.textContent = output + Number(current);
    //     output = output + Number(current);
    //     current = output;
    // }

    // console.log(output);

    // // if DEL is clicked, delete last character in display
    // // if (e.target.textContent === 'DEL') {
    // //     output = output.slice(0, output.length - 1);
    // //     display.textContent = output;
    // // }
});