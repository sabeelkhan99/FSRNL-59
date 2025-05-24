import express from 'express';
import Review from '../models/review.js'
import Product from '../models/product.js'
import { BadRequestError } from '../core/ApiError.js';

const router = express.Router();

router.post('/:productId/reviews', async (req, res) => {
    const { rating, review } = req.body;
    const { productId } = req.params;
    // find the product with the `productId`
    const product = await Product.findById(productId);
    if (!product) {
        throw new BadRequestError('Product not found');
    }
    // Create a new review
    const newReview = new Review({ rating, review });

    // Push the id to the product, this will only add _id and will ignore other fields.
    product.reviews.push(newReview);

    // save the documents to the db.
    await newReview.save();
    await product.save();

    res.status(201).json({ message: 'Review created successfully' });
});

export default router;