import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/product.js";

const router = express.Router();

// Get All Products
router.get('/', getAllProducts);

// Create Product
router.post('/', createProduct);

// Get a single product
router.get('/:productId', getSingleProduct);

// Update a product
router.patch('/:productId', updateProduct);

// Delete the product
router.delete('/:productId', deleteProduct)

export default router;