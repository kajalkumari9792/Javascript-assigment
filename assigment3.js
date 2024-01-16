// QUS --- 5 

let anle1 = parseFloat(prompt("Enter the first angle of the triangle:"));
let anle2 = parseFloat(prompt("Enter the second angle of the triangle:"));
let anle3 = parseFloat(prompt("Enter the third angle of the triangle:"));

// the input is valid numbers
if (!isNaN(anle1) && !isNaN(anle2) && !isNaN(anle3)) {
    // the angles form a valid triangle
    if (anle1 + anle2 + anle3 === 180) {
        //  the triangle is acute or obtuse
        if (anle1 < 90 && anle2 < 90 && anle3 < 90) {
            console.log('The triangle is Acute.');
        } else {
            console.log('The triangle is Obtuse.');
        }
    } else {
        console.log('Invalid triangle. The sum of angles should be 180 degrees.');
    }
} else {
    console.log('Invalid input. Please enter valid numbers for the angles.');
}


// QUS -- 1 

// Get user input for marks
var abc = prompt("Enter your grade:");






// Convert user input to uppercase
var grade = abc.toUpperCase();

// the grade using a switch case
switch (grade) {
    case 'A':
        alert("<h2>Excellent</h2>");
        break;
    case 'B':
        alert("<h2>Good</h2>");
        break;
    case 'C':
        alert("<h2>Satisfy</h2>");
        break;
    case 'D':
        alert("<h2>You passed but not great</h2>");
        break;
    case 'F':
        alert("<h2>Sorry you fail</h2");
        break;
    default:
        alert("<h2>Invalid</h2>");
}


// QUS -- 2

var Char = prompt("Enter a Value");
var resul;

if (Char == 'p' || Char == 'P') {
    resul = 'PrepBytes';
    console.log('The result is ', resul);
} else if (Char == 'Z' || Char == 'z') {
    resul = "zenith"
    console.log('The result is ', resul);
} else if (Char == 'E' || Char == 'e') {
    resul = 'Expert Coder';
    console.log('The result is ', resul);
} else if (Char == 'D' || Char == 'd') {
    resul = "Data Structure";
    console.log('The result is ', resul);
} else {
    resul = "Invalid Input!";
    console.log('The result is ', resul);
}

// QUS --- 3

// Get user input for three numbers
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let number3 = parseFloat(prompt("Enter the third number:"));

// the input is valid numbers
if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    // the maximum number
    let maximum = Math.max(number1, number2, number3);

    console.log('The maximum number is: ' + maximum);
} else {
    console.log('Invalid input. Please enter valid numbers.');
}


// QUS --- 4

// user input for three numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

//  the input is valid numbers
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    // the second smallest number
    let secondSmallest;

    if (num1 <= num2 && num1 <= num3) {
        secondSmallest = Math.min(num2, num3);
    } else if (num2 <= num1 && num2 <= num3) {
        secondSmallest = Math.min(num1, num3);
    } else {
        secondSmallest = Math.min(num1, num2);
    }

    console.log('The second smallest number is: ' + secondSmallest);
} else {
    console.log('Invalid input. Please enter valid numbers.');
}