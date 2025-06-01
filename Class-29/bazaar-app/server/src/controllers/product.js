import Product from '../models/product.js';

export const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
}

export const createProduct = async (req, res) => {
    const { title, price, description, image } = req.body;
    const { userId } = req;
    // We should have a validation on the data before inserting it to the database.
    const newProduct = await Product.create({ title, price, description, image, author: userId });
    res.status(201).json({ message: `Product created successfully with the id: ${newProduct._id}` });
}

export const getSingleProduct = async(req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId).populate('reviews'); //https://mongoosejs.com/docs/populate.html
    if (!product) {
        throw new Error(`Product with id ${productId} doesn't exist`);
    }
    res.status(200).json(product);
}

export const updateProduct = async(req, res) => {
    const { productId } = req.params;
    const { title, price, description, image } = req.body;
    await Product.findByIdAndUpdate(productId, { title, price, description, image });
    res.status(200).json({ message: 'Product updated successfully' });
}

export const deleteProduct = async(req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: 'Product delete successfully' });
}