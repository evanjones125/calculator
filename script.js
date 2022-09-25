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
let output;
let current = '';
let onOp = false;
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// link display to a JS variable
const display = document.querySelector('#display');

// push button text content to output when clicked
const grid = document.querySelector('#calculator');
grid.addEventListener('click', e => {
    // output.push(e.target.textContent);
    // display.textContent = output[output.length - 1];
    
    // if adding more digits to a current number:
    if (nums.includes(e.target.textContent) && !onOp) {
        current += e.target.textContent;
        display.textContent = current;
    }

    // if typing number after operation button is clicked:
    if (nums.includes(e.target.textContent) && onOp) {
        current = '';
        onOp = false;
        current += e.target.textContent;
        display.textContent = current;
    }

    // if AC is clicked, delete everything in display
    if (e.target.textContent === 'AC') {
        current = '';
        output = 0;
        display.textContent = '';
    }

    // if + is clicked, add plus sign to output string
    if (e.target.textContent === '+') {
        // if (output.includes('+')) {
        //     const splitted = output.split('+');
        //     display.textContent = Number(splitted[0]) + Number(splitted[1]);
        // }
        // output += '+';
        // const splitted = output.split('+');
        // display.textContent = splitted[0];
        output = Number(current);
        onOp = true;
    }

    // if = is clicked:
    if (e.target.textContent === '=') {
        display.textContent = output + Number(current);
        output = output + Number(current);
        current = output;
    }

    console.log(output);

    // if DEL is clicked, delete last character in display
    // if (e.target.textContent === 'DEL') {
    //     output = output.slice(0, output.length - 1);
    //     display.textContent = output;
    // }
});