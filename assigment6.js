//Qus -- 1 Check if a number is odd or even in JavaScript

let number = 5;

if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}


//  -----------------------------------------------------------------------------------------------

// Qus  --2   Find the largest of two number  

let num1 = 10;
let num2 = 7;

if (num1 > num2) {
    console.log(`${num1} is the largest.`);
} else if (num2 > num1) {
    console.log(`${num2} is the largest.`);
} else {
    console.log("Both numbers are equal.");
}

// Qus -- 3  Find the largest of three number.

let numm1 = 15;
let numm2 = 9;
let numm3 = 22;

if (numm1 >= numm2 && numm1 >= numm3) {
    console.log(`${num1} is the largest.`);
} else if (numm2 >= numm1 && numm2 >= numm3) {
    console.log(`${numm2} is the largest.`);
} else {
    console.log(`${numm3} is the largest.`);
}

// Qus -- 4  Perform arithmetic operations on two numbers 


let nums1 = 10;
let nums2 = 5;

// Addition
let sum = nums1 + nums2;
console.log('Sum:', sum);

// Subtraction
let difference = nums1 - nums2;
console.log('Difference:', difference);

// Multiplication
let product = nums1 * nums2;
console.log('Product:', product);

// Division
let quotient = nums1 / nums2;
console.log('Quotient:', quotient);

// Modulus 
let remainder = nums1 % nums2;
console.log('Remainder:', remainder);


// Qus -- 5  Find check if a year is leap year or not


let year = 2024;

// Check if leap year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + ' is a leap year.');
} else {
    console.log(year + ' is not a leap year.');
}