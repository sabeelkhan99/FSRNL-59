const person = {
    name: 'Max',
    age: 25,
    hobbies: ['Swimming', 'Watching Movies', 'Chess'],
    isAdult: true
};



// while (condition) {
//     //body of the loop
// }

// let i = 10; 

// while (i <= 100) {
//     if (i > 50) {
//         break;
//     }
//     console.log(i);
//     i = i + 10;
// }

// for of loops -------- Executed on iterable objects: arrays, set, map, string

const colors = ['orange', 'green', 'blue'];

// Imperative way of writing code
// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// Declarative way programming
// color - iterator
// colors array - iterable object
for (const color of colors) {
    // console.log(color);
}


const products = [
    {   
        id: 1,
        name: "Iphone",
        price: 10
    },
    {
        id: 2,
        name: 'Macbook Pro',
        price: 999,
    },
    {
        id: 3,
        name: 'Ipad',
        price: 599
    }
]

// console.log(products);

let totalAmount = 0;

for (let product of products) {
    totalAmount = totalAmount +  product.price;
}

// console.log(totalAmount);

const str = 'Hello world';

// for (const char of str) {
//     console.log(char);
// }

const mp = new Map();

mp.set('name', 'BMW');
mp.set('topSpeed', 300);

// console.log(mp);

// for (let props of mp) {
//     console.log(props[0], props[1]);
// }


// for - in loops
for (let props in person) {
    console.log(props, person[props]);
}

// String template litrals

const str1 = 'STRINGGGGGG1';
// console.log(str1);

const str2 = "STRING2";
// console.log(str2);

const str3 = `shjdfbdjnkwsjhk
sadfghjvks
dsfghjka
dsfaegdhsjkfv
sdfhvjkws
ddskxcl;`

// console.log(str3);

const firstName = 'Max';
const lastName = 'Millian';

// Mr.<lastanme>,<firstName>

console.log(`Mr.${lastName},${firstName}`);