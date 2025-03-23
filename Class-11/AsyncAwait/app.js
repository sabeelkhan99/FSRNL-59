// async function add(x, y) {
//     if (x + y < 5) {
//         throw new Error('sum is less than 5');
//     }
//     return x + y;
// }



// fetch('https://fakestoreapi.com/products')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })


// console.log('START');

// async function fetchProducts() {
//     console.log('Starting to fetch the products');
//     const res = await fetch('https://fakestoreapi.com/products');
//     console.log(`Recived response`);
//     const data = await res.json();
//     console.log(`Parsing to json is complete`);
//     console.log(data);
// }

// try {
//     fetchProducts();
// }
// catch (err) {
//     console.log(err);
// }


// console.log('END');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');




// -----------------------------Question-----------------

// API to use : https://fakestoreapi.com/products/${id}

async function fetchProductById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
}

async function fetchProductByIdIn(ids) {
    const promises = [];
    for (const id of ids) {
        promises.push(fetchProductById(id));
    }
    const products = await Promise.all(promises); //API calls are parellel
    return products;
}


async function main() {
    const ids = [4, 1, 2, 3];
    console.time('timer');
    const products = await fetchProductByIdIn(ids);
    console.timeEnd('timer');
    console.log(products);
}

main();


