// --- Arithmetic Functions ---

/**
 * Adds two numbers
 */
function add(number1, number2) {
    return number1 + number2;
}

/**
 * Subtracts the second number from the first
 */
function subtract(number1, number2) {
    return number1 - number2;
}

/**
 * Multiplies two numbers
 */
function multiply(number1, number2) {
    return number1 * number2;
}

/**
 * Divides the first number by the second
 */
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Div by 0';
    }
    return number1 / number2;
}

// --- Event Listeners ---

// Addition
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Subtraction
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Multiplication
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Division
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});