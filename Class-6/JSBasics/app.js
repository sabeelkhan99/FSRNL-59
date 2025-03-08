// let a1=10;
// let b1=20;

// let c1=a1+b1;

// console.log("Getting evaluated from app file " + c1);

// const isRaining = true;

// if (!isRaining) {
//     console.log('Do not take the umbrella since its not raining anymore')
// }


// // if - else 
// if (isRaining) {
//     console.log('Take the umbrella');
// } else {
//     console.log('Do not take the umbrella');
// }


// else if ladder

// if () { 

// } else if () {
    
// } else if () {
    
// } else {
    
// }


// Falsy values in js - false, 0, "", null, undefined, NaN

// const age = parseInt(prompt("Enter your age"));

// if (isNaN(age) || age<0) {
//     throw new Error('Please enter the valid age');
// }

// if (age < 18) {
//     alert('You cannot enter the club');
// } else if (age >= 18 && age < 25) {
//     alert('You can enter but cannot drink');
// } else {
//     alert('You can enter and drink');
// }



// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);

// Loops in JS : for, while, for-of, do while, for-in 

// for (initialisation; condition; updation){
//     body of the loop
// }

// ++, -- : post/pre increment/decrement operator

// for (let i = 1; i <= 100; i=i+1){
//     console.log(i);
// }


// for (let a = 100; a <= 200; a = a - 10) { 
//     console.log(a);
// }

for (let i = 1; i <= 10; i++){
    if (i === 5) {
        console.log(i);
        // break; // brings you out of the innermost loop
        continue;
    }
    console.log(i);
}




for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 3; j++){
        if (j === 2) {
            break;
        }
        console.log(i, j);
    }
}


// 1 1

// 2 1

// 3 1