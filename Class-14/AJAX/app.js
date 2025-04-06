async function fetchProducts(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}

async function fetchWithAxios() {
    const res = await axios.get('https://fakestoreapi.com/products');
    if (res.status !== 200) {
        throw new Error('Error fetching products');
    }
    return res.data;
}

async function main() {
    const products = await fetchProducts();
    const producstUsingAxios = await fetchWithAxios();
    console.log(products);
    console.log(producstUsingAxios);
}

main();