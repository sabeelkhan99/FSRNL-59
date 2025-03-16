const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = num => num ** 2;

// const squareOfNums = nums.map((num) => num ** 2);
const squareOfNums = nums.map(square);

// console.log(squareOfNums);

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}


const evenNums = nums.filter(isEven);

console.log(evenNums);

// acc : 55
// curr: 10
const sumOfNums = nums.reduce((acc, curr) => {
    return acc + curr;
})
console.log(`Sum of nums is ${sumOfNums}`);


// --------------------------------------------


const menu = [
    'Chicken Biryani',
    'Onion Pizza',
    'Garlic Naan',
    'Egg curry',
    'Onion Rings',
    'Kadhai Paneer',
    'Dal Makhni',
    'Zeera rice',
    'Chilli Chicken',
    'Chilli Paneer',
    'Paneer 65',
    'Garlic Bread',
    'Honey Chilli potato',
    'Upma',
    'Dosa',
    'Fried Rice',
    'Egg fried rice',
    'Egg biryani',
    'Onion Pakodi',
    'Onion Vada',
    'Garlic Pickle'
];
// Two Menu's
// - Veg Menu : chicken or egg in a dishName
// - Jain Menu : Veg + Onion or Garlic Free
// - Non Veg Menu : contains Chicken & Egg


function isVeg(dish) {
    if (dish.toLowerCase().includes('chicken') || dish.toLowerCase().includes('egg')) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(dish) {
    if (dish.toLowerCase().includes('onion') || dish.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}


const vegMenu = menu.filter(isVeg);
const jainMenu = vegMenu.filter(isOnionGarlicFree);
const nonVegMenu = menu.filter((dish)=> !isVeg(dish));

// console.log(menu);
// console.log(vegMenu);
// console.log(jainMenu);
// console.log(nonVegMenu);


const cart = [
    {
        name: 'Iphone',
        price: 100,
        qty: 3
    },
    {
        name: 'Macbook',
        price: 100,
        qty: 1
    },
    {
        name: 'Ipad',
        price: 100,
        qty: 2
    }
]

const totalAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

console.log(totalAmount);
