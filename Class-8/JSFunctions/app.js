const a1 = 10;
const a2 = 20;
const res1 = a1 + a2;


// Functions defined with function keyword
function addNums(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x or y is not a number')
    }
    return x + y;
}

try {
    console.log(addNums(2, 3));
    console.log(addNums(10, 3.267));
    console.log(addNums(10, true));
    console.log(addNums("Hello", "World")); //
}
catch (err) {
    console.log(err);
}


// ..
// ..

// 500 lines...

const a3 = 20;
const a4 = 40;
const res2 = a3 + a4;


// ... 1000 lines 


const a5 = 20;
const a6 = 40;
const res3 = a3 + a4;


// Function are first class citezens and they can be used as a value.

// Function expressions
const f = function(x, y) {
    return x * y;
}

const calculateHypo = function (base, height) {
    return Math.hypot(base, height);
}

console.log(f(4, 5));
console.log(calculateHypo(3, 4))


// Arrow functions - Syntactical Sugars
const squareRoot = num => Math.sqrt(num); //arrow function implicit return
console.log(squareRoot(100));


const subtractNums = (x, y) => {
    return x - y
};

const print = () => console.log('Printing something');

print();



