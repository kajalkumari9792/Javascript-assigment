// let A;
// let B;


// let ab = A % 10 === 0 && B % 10 === 0;
// let ba = A % 10 !== 0 && B % 10 !== 0;
// let bc = (A % 10 === 0 && B % 10 !== 0) || (A % 10 !== 0 && B % 10 === 0);

// console.log("Condition 1:", ab);
// console.log("Condition 2:", ba);
// console.log("Condition 3:", bc);

// let result = ab || ba || bc;

// console.log("Result:", result);

// //Qus=============4=============================

// let N = 3456;


// let firstDigit = Math.floor(N / 1000);


// console.log("First Digit:", firstDigit);

// // qus==========5==============================

// let abc = 6636536;


// let lastdigit = abc % 10;


// console.log("Last Digit:", lastdigit);


// // qus===6===================================================================================

// let bcd = 17;
// let cba = 5;


// let remainder = bcd % cba;


// // Print
// console.log("Remainder:", remainder);


// // qus====7=================================================================


// let num1 = 5;
// let num2 = 7;


// let pro = num1 * num2;


// console.log("Pro:", pro);


// //qus=================88======================================

// let math = 85;
// let science = 90;
// let english = 75;


// let total = math + science + english;


// let average = total / 3;


// console.log("Math Marks:", math);
// console.log("Science Marks:", science);
// console.log("English Marks:", english);
// console.log("Total Marks:", total);
// console.log("Average Marks:", average);


// let d = 5;
// let b = 5;


// let c = (d === b, d == b) ? "green" : "red"
// console.log(c)


// //------------------------------------------------------------------------------------------------------------------------------------------------


// // var Char = prompt("Enter a Value");
// // var resul;


// // if (Char == 'p' || Char == 'P') {
// //     resul = 'PrepBytes';
// //     console.log('The result is ', resul);
// // } else if (Char == 'Z' || Char == 'z') {
// //     resul = "zenith"
// //     console.log('The result is ', resul);
// // } else if (Char == 'E' || Char == 'e') {
// //     resul = 'Expert Coder';
// //     console.log('The result is ', resul);
// // } else if (Char == 'D' || Char == 'd') {
// //     resul = "Data Structure";
// //     console.log('The result is ', resul);
// // } else {
// //     resul = "Invalid Input!";
// //     console.log('The result is ', resul);
// // }


// //----------------------------------------------------------------------------------------------


// var first = parseInt(prompt("Enter First number"));
// var second = parseInt(prompt("Enter Second number"));
// var third = parseInt(prompt("Enter Third number"));
// console.log(first, second, third);
// if (first >= second && enput >= third) {
//     console.log("First Number is greater than both numbers")
// } else if (second >= first && second >= third) {
//     console.log("Second number is greater than both numbers")
// } else if (third >= first && third >= second) {
//     console.log("Third number is greater than both numbers")
// } else {
//     console.log("Invalid")
// }





//==================================================================================

// QUS = 1:- What is the syntax for the While loop in JavaScript?

/*Syntax:
while (condition)
{
    code block;
    }
    */


var i = 0;
while (i < 5) {
    console.log("This message will be print 5 time");
    i++;
}

// QUS-2:- What is the syntax for the For loop in JavaScript?

/* Syntax :

for (initialization ; condition ; increment/decrement)

{
    code block;

}*/

/* for (var j = 1; j <= 5; j++) {
    console.log("The value of J is " + j);
}
*/

/* Output : The value of J is 1
The value of J is 2
The value of J is 3
The value of J is 4
The value of J is 5 */


// QUS = 3:- What is a nested loop in JavaScript, and why would you use one?


/* Nested Loop in javascript is when you have one loop inside another.  */


for (let i = 0; i < 3; i++) {
    console.log("outer loop itreation: " + i);

    for (let e = 0; e < 2; e++) {
        console.log("Inner loop iteration: " + e);
    }
}

//  QUS = 4 :- What is an infinite loop in JavaScript, and how can it be avoided?
/* An Infinite loop is a loop that does not contain any logical conditions to terminate. It
continues running continuously without ever reaching the point where the loop should end.
 */

// Example of an infinite loop


let counter = 0;
while (true) {
    if (counter > 10) {
        break; // termination condition
    }
    console.log("i am an infinite loop");
    counter++;
}

// QUS = 5 :- How do you break out of two nested for loops?
/* To break out of two nested for loops you need to put the breaking statement
 * inside the inner-most loop.*/
let x = 0,
    y = 0;
while (x < 2) {
    y = 0;
    while (y < 3) {
        console.log(`Value of X : ${x}, Value of Y :${y}`);
        y++
        if (y == 3) //breaking condition  inner loop
            break;
    }
    x++ //incrementing outer loop
}

// QUS=6 :- What is the difference between the break statement and the continue directive?
/* The break statement transfers control out of the loop completely whereas the continue
statement only causes one iteration of the loop to be skipped. */

for (var i = 0; i <= 9; i++) {
    if (i % 2 === 0) {
        continue; // skip even number
    }
    console.log(i); // print odd number
}

// QUS= 7 :- Can you stop a loop based on a specific condition?
/* Yes, you can use the if statement in combination with the loop constructs like for or while
to achieve this example using a while loop: */


let num = 10;
while (num >= 0) {
    if (num === 0) {
        break; // stop the loop 
    }
    console.log(num--); // print  value of num
}


var newmessages = "Prepbytes";
console.log(newmessages.length);


// var str = "Adarsh SIngh";
// var X = str.length();
// console.log(X)






let inputString = "Welcome to Geeks for Geeks";
let a = inputString.replace(/\s+/g, ' ');

console.log(a);



function extractChar(inputString, numChar) {
    let extract = inputString.slice(0, numChar);
    console.log(extract);
}

let ab = "Robin Singh";
extractChar(ab,  4);