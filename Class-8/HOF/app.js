const radii = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// functions to compute (return @array[])
    // - diameter(2 * r)
    // - circumference(2 * Math.PI * r)
// - area (Math.PI*r*r)
    
const diameter = (r) => 2 * r;
const area = (r) => Math.PI* r*r;
const circumference = (r) => 2 * Math.PI * r;
const squareRoot = (r) => Math.sqrt(r);

function calDiameter(radii) {
    const res = [];
    for (let r of radii) {
        res.push(2 * r);
    }
    return res;
}

function calArea(radii) {
    const res = [];
    for (let r of radii) {
        res.push(Math.PI *r * r);
    }
    return res;
}

function calCircumference() {
    const res = [];
    for (let r of radii) {
        res.push(2 * Math.PI *r);
    }
    return res;
}

function calculate(radii, callback) {
    const res = [];
    for (let r of radii) {
        res.push(callback(r));
    }
    return res;
}

console.log(calculate(radii, diameter));
console.log(calculate(radii, area));
console.log(calculate(radii, circumference));
console.log(calculate(radii, squareRoot));



// function func(x, y) {
//     return z;
// }

// if x, y or z are function then func is known as HOF

// function fun(f) {
//     f();
//     console.log('Inside fun');

//     return () => {
//         console.log('returned function')
//     }
// }

// function print() {
//     console.log('Printing');
// }

// const returnedFunc = fun(print);

// returnedFunc();



