// take two numbers and calls calculation function on them
const operate = (one, two, callback) => {
    return callback(one, two);
}

// create functions for add, subtract, multiply, divide
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// track current output window content in variable
let output = '';
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '+', '-', '.'];

// link display to a JS variable
const display = document.querySelector('#display');

// push button text content to output when clicked
const grid = document.querySelector('#calculator');
grid.addEventListener('click', e => {
    // if click is on number, add to display
    if (nums.includes(e.target.textContent)) {
        // display.textContent += e.target.textContent;
        output += e.target.textContent;
        display.textContent = output;
    }

    // if DEL is clicked, delete last character in display
    if (e.target.textContent === 'DEL') {
        output = output.slice(0, output.length - 1);
        display.textContent = output;
    }

    // if AC is clicked, delete everything in display
    if (e.target.textContent === 'AC') {
        output = '';
        display.textContent = output;
    }

    // if = is clicked, replace display contents with operation output
    if (e.target.textContent === '=') {
        if (output.includes('+')) {
            const splitted = output.split('+');
            display.textContent = Number(splitted[0]) + Number(splitted[1]);
        }
    }
});