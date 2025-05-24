import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    review: {
        type: String,
        trim: true
    }
}, { versionKey: false, timestamps: true });

const Review = mongoose.model('Review', reviewSchema, 'reviews');

export default Review;

