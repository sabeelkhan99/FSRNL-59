
// console.log('START');
// const a = 1 + 2;

// console.log(a);

// console.log('END');

// After 1 sec


// console.log('START')

// function delay(callback, noOfSeconds) {
//     const epochTime = new Date().getTime();
//     while (new Date().getTime() < epochTime + (1000*noOfSeconds)) {
//     }
//     callback();
// }


// function fun() {
//     console.log('Inside fun');
// }

// delay(fun, 3);

// console.log('END');



// -----------------------------------------------------------

// console.log('START');

// function fun() {
//     console.log('Inside fun');
// }

// setTimeout(fun, 3000);

// console.log('END');


// ---------------------------------------------------------

// console.log('START');

// function f() {
//     console.log('Inside f');
// }

// setTimeout(f, 1000); //trust issues with setTimeout

// while (true) {
//     console.log('Inside while loop')
// }

// console.log('END');


// ------------------------------------------------------------

console.log('START');

function f() {
    console.log('Inside f');
}

setTimeout(f, 0); 

console.log('END');