// Qus- 1 ==  Find the Product. 


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the array elements: ', (input) => {
    const array = input.split(' ').map(Number);

    // Check if the input is valid
    if (array.length < 2) {
        console.log('Please enter a valid array with at least two elements.');
        rl.close();
        return;
    }

    // Find the product of elements in the array
    let product = 1;
    for (let i = 1; i < array.length; i++) {
        product *= array[i];
    }

    console.log('Product of array elements:', product);

    rl.close();
});


// qus-2 ==  Find the Sum.

const readline = require('readline');

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r2.question('Enter the array elements: ', (input) => {
    const array = input.split(' ').map(Number);

    // Check if the input is valid
    if (array.length < 2) {
        console.log('Please enter a valid array with at least two elements.');
        r2.close();
        return;
    }

    // Find the sum of elements in the array
    let sum = 0;
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
    }

    console.log('Sum of array elements:', sum);

    r2.close();
});


// Qus-3 =  Count Occurrences 

const readline = require('readline');

const r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r3.question('Enter the array elements: ', (input) => {
    const array = input.split(' ').map(Number);

    // Check if the input is valid
    if (array.length < 2) {
        console.log('Please enter a valid array with at least two elements.');
        r3.close();
        return;
    }

    // Count occurrences of each element in the array
    const occurrences = {};
    for (let i = 1; i < array.length; i++) {
        const currentElement = array[i];
        occurrences[currentElement] = (occurrences[currentElement] || 0) + 1;
    }

    // Display the occurrences
    console.log('Occurrences of each element:');
    for (const [element, count] of Object.entries(occurrences)) {
        console.log(`${element}: ${count}`);
    }

    r3.close();
});

// Qus - 4 =  Even Odd

const readline = require('readline');

const r4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r4.question('Enter the array elements: ', (input) => {
    const array = input.split(' ').map(Number);

    // Check if the input is valid
    if (array.length < 2) {
        console.log('Please enter a valid array with at least two elements.');
        r4.close();
        return;
    }

    // whether each element is even or odd without using a separate function
    console.log('Even/Odd status of each element:');
    for (let i = 1; i < array.length; i++) {
        const currentElement = array[i];

        if (currentElement % 2 === 0) {
            console.log(`${currentElement}: Even`);
        } else {
            console.log(`${currentElement}: Odd`);
        }
    }

    r4.close();
});


// Qus - 5 =  Find whether the number is present or not

const readline = require('readline');

const r5 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r5.question('Enter the array elements: ', (input) => {
    const array = input.split(' ').map(Number);

    // Check if the input is valid
    if (array.length < 2) {
        console.log('Please enter a valid array with at least two elements.');
        r5.close();
        return;
    }

    // Ask the user for the number to find
    r5.question('Enter the number to find: ', (numInput) => {
        const numberToFind = Number(numInput);

        // Check if the input is a valid number
        if (isNaN(numberToFind)) {
            console.log('Please enter a valid number.');
            rl.close();
            return;
        }

        // Find whether the number is present in the array without using a separate function
        let isPresent = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i] === numberToFind) {
                isPresent = true;
                break;
            }
        }

        // Display the result
        if (isPresent) {
            console.log(`${numberToFind} is present in the array.`);
        } else {
            console.log(`${numberToFind} is not present in the array.`);
        }

        r5.close();
    });
});

// Qus- 6  Higher Age

const readline = require('readline');

const r6 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r6.question('Enter the number of persons and their ages: ', (input) => {
    const data = input.split(' ').map(Number);

    // Check if the input is valid
    if (data.length < 2) {
        console.log('Please enter valid input.');
        r6.close();
        return;
    }

    const N = data[0];
    const ages = data.slice(1);

    // Filter ages over 18 (including 18)
    const result = ages.filter(age => age >= 18);

    // Display the result
    console.log('Ages over 18 (including 18):', result);

    r6.close();
});


// Qus- 7  Increment the Array Elements 

const readline = require('readline');

const r7 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r7.question('Enter the array elements: ', (input) => {
    const array = input.split(' ').map(Number);

    // Check if the input is valid
    if (array.length < 2) {
        console.log('Please enter a valid array with at least two elements.');
        r7.close();
        return;
    }

    // Increment each element of the array without using a separate function
    console.log('Array after incrementing each element:');
    for (let i = 1; i < array.length; i++) {
        array[i]++;
        console.log(array[i]);
    }

    r7.close();
});

// Qus- 8  Pass or Fail 

const readline = require('readline');

const r8 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r8.question('Enter the exam score: ', (input) => {
    const score = Number(input);

    // Check if the input is valid
    if (isNaN(score)) {
        console.log('Please enter a valid number for the exam score.');
        r8.close();
        return;
    }

    // Check if the student has passed or failed without using a separate function
    if (score >= 40) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }

    r8.close();
});

// Qus- 9  Unique Color Shirt

const readline = require('readline');

const r9 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r9.question('Enter the color of the shirt: ', (color) => {
    // Check if the input is valid
    if (!color || typeof color !== 'string') {
        console.log('Please enter a valid color for the shirt.');
        r9.close();
        return;
    }

    // Check if the color is unique for the shirt without using a separate function
    if (color.toLowerCase() === 'uniquecolor') {
        console.log('The color is unique for the shirt.');
    } else {
        console.log('The color is not unique for the shirt.');
    }

    r9.close();
});

// Qus - 10  Min and Max 

const readline = require('readline');

const r10 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl0.question('Enter the array elements: ', (input) => {
    const array = input.split(' ').map(Number);

    // Check if the input is valid
    if (array.length < 2) {
        console.log('Please enter a valid array with at least two elements.');
        rl0.close();
        return;
    }

    // Find the minimum and maximum values without using a separate function
    let min = array[1];
    let max = array[1];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }

    // Display the results
    console.log('Minimum value:', min);
    console.log('Maximum value:', max);

    rl0.close();
});