import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    description: {
        type: String,
        maxLength: 500
    },
    image: {
        type: String,
        required: true
    }
},{versionKey: false, timestamps: true});

const Product = mongoose.model('Product', productSchema, 'products');

export default Product;