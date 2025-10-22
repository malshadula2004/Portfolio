let btnClear = $('#btn-clear');
let btn1 = $('#btn-\\(');
let btn2 = $('#btn-\\)');
let btn3 = $('#btn-\\/');
let btn4 = $('#btn-7');
let btn5 = $('#btn-8');
let btn6 = $('#btn-9');
let btn7 = $('#btn-\\*');
let btn8 = $('#btn-4');
let btn9 = $('#btn-5');
let btn10 = $('#btn-6');
let btn11 = $('#btn--');
let btn12 = $('#btn-1');
let btn13 = $('#btn-2');
let btn14 = $('#btn-3');
let btn15 = $('#btn-\\+');
let btn16 = $('#btn-0');
let btn17 = $('#btn-\\.');
let btn18 = $('#btn-\\%');
let btn19 = $('#btn-\\=');
let textArea = $('#text-area');

function appendText(text) {
    textArea.val(textArea.val() + text);
}

btnClear.on('click', function(){
    textArea.val('');
});
btn1.on('click', function(){
    appendText('(');
});
btn2.on('click', function(){
    appendText(')');
});
btn3.on('click', function(){
    appendText('/');
});
btn4.on('click', function(){
    appendText('7');
});
btn5.on('click', function(){
    appendText('8');
});
btn6.on('click', function(){
    appendText('9');
});
btn7.on('click', function(){
    appendText('*');
});
btn8.on('click', function(){
    appendText('4');
});
btn9.on('click', function(){
    appendText('5');
});
btn10.on('click', function(){
    appendText('6');
});
btn11.on('click', function(){
    appendText('-');
});
btn12.on('click', function(){
    appendText('1');
});
btn13.on('click', function(){
    appendText('2');
});
btn14.on('click', function(){
    appendText('3');
});
btn15.on('click', function(){
    appendText('+');
});
btn16.on('click', function(){
    appendText('0');
});
btn17.on('click', function(){
    appendText('.');
});
btn18.on('click', function(){
    appendText('%');
});
btn19.on('click', function(){
    try {
        let result = eval(textArea.val());
        textArea.val(result);
    } catch (e) {
        textArea.val('Error');
    }
    // let total = calculate(textArea.val());
    // if (isNaN(!total)){
    //     textArea.val(total);
    // } else {
    //     textArea.val('Error');
    // }
});

function calculate(expression) {
    // Function to handle calculations inside parentheses
    while (expression.includes('(')) {
        // Find the innermost parentheses
        expression = expression.replace(/\(([^()]+)\)/g, function(match, subExpr) {
            return calculate(subExpr);  // Recursively calculate the sub-expression inside parentheses
        });
    }

    // Now calculate the remaining expression (without parentheses)
    return evaluateSimpleExpression(expression);
}

function evaluateSimpleExpression(expression) {
    // First, split the expression into numbers and operators
    let tokens = expression.split(/(\%|\+|\-|\*|\/)/);  // Split by +, -, *, /

    let total = parseFloat(tokens[0]);  // Initialize total with the first number

    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];      // Operator (+, -, *, /)
        let nextNum = parseFloat(tokens[i + 1]);  // Next number

        // Perform the calculation based on the operator
        if (operator === '+') {
            total += nextNum;
        } else if (operator === '-') {
            total -= nextNum;
        } else if (operator === '*') {
            total *= nextNum;
        } else if (operator === '/') {
            total /= nextNum;
        } else if (operator === '%') {
            total %= nextNum;
        }
    }

    return total;  // Return the calculated total
}

