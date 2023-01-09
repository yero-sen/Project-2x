function calculate() {
    // Get the inputs
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var operator = document.getElementById('operator').value;

    // Convert the inputs to numbers
    input1 = Number(input1);
    input2 = Number(input2);

    // Define the function with parameters
    function doCalculation(num1, num2, op) {
        if (op === 'add') {
            return num1 + num2;
        } else if (op === 'subtract') {
            return num1 - num2;
        } else if (op === 'multiply') {
            return num1 * num2;
        } else if (op === 'divide') {
            return num1 / num2;
        }
    }

    // Invoke the function with arguments
    var result = doCalculation(input1, input2, operator);

    // Display the result
    document.getElementById('result').innerHTML = result;
}
