// take two numbers and calls calculation function on them
const operate = (one, two, callback) => {
    return callback(one, two);
}

// create functions for add, subtract, multiply, divide
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;