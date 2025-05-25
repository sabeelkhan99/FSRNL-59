import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/product.js";
import { isLoggedIn } from "../middlewares/auth.js";

const router = express.Router();

// Get All Products
router.get('/', getAllProducts);

// Create Product
router.post('/', createProduct);

// Get a single product
router.get('/:productId',isLoggedIn, getSingleProduct);

// Update a product
router.patch('/:productId', updateProduct);

// Delete the product
router.delete('/:productId', deleteProduct)

export default router;