import express from 'express';
const app = express();
import { v4 as uuid } from 'uuid';

app.use(express.json());


const products = [
    {
        id: uuid(),
        title: 'Macbook Air',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
        price: 300,
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    },
    {
        id: uuid(),
        title: 'Iphone',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
        price: 200,
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    },
    {
        id: uuid(),
        title: 'Apple Watch',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
        price: 600,
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    },
    {
        id: uuid(),
        title: 'Mac Mini',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
        price: 250,
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    }
];

// Get All products
// Pagination 
app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

// Create Product
app.post('/api/products', (req, res) => {
    const { title, price, description, image } = req.body;
    const newProduct = { id: uuid(), title, price, description, image }
    products.push(newProduct);
    res.status(201).json({ message: `Product created successfully with the id: ${newProduct.id}`})
});

// Get a single product
app.get('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find((product) => product.id === productId);
    if (!product) {
        throw new Error(`Product with id ${productId} doesn't exist`);
    }
    res.status(200).json(product);
});

app.get('/api/v2/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find((product) => product.id === productId);
    if (!product) {
        throw new Error(`Product with id ${productId} doesn't exist`);
    }
    res.status(200).json({
        ...product, extraProps: {
            a: 10,
            b: 20
        }
    });
});

// Update a product
app.patch('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const { title, price, description, image } = req.body;
    const product = products.find((product) => product.id === productId);
    if (!product) {
        throw new Error(`Product with id ${productId} doesn't exist`);
    }

    product.title = title;
    product.price = price;
    product.description = description;
    product.image = image;

    res.status(200).json({ message: 'Product updated successfully' });
});

// app.patch('/update-product')

app.delete('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const index = products.findIndex((product) => product.id === productId);
    products.splice(index, 1);
    res.status(200).json({ message: 'Product delete successfully' });
})

export default app;
