import jwt from 'jsonwebtoken';
import { AuthenticationError, BadRequestError, ForbiddenError } from '../core/ApiError.js';
import User from '../models/user.js';
import Product from '../models/product.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const isLoggedIn = (req, res, next) => {
    const authorizationHeader = req.headers?.authorization;
    if (!authorizationHeader) {
        throw new AuthenticationError('Invalid auth token');
    }
    const token = authorizationHeader.replace('Bearer ', '');
    try {
        const {userId} = jwt.verify(token, JWT_SECRET);
        req.userId = userId; //adding the userId so that it can be utilised in the subsequent request handler
    }
    catch (err) {
        throw new AuthenticationError(err.message || 'Invalid auth token');
    }
    next();
}

export const isSeller = async (req, res, next) => {
    const { userId } = req;
    const user = await User.findById(userId);
    if (!user.hasRole('SELLER')) {
        throw new ForbiddenError('You dont have permission to create the product');
    }
    next()
}

export const isAuthor = async(req, res, next) => {
    const { userId } = req;
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
        throw new BadRequestError('Invalid ProductId');
    }
    if (!(product.author && product.author.equals(userId))) {
        throw new ForbiddenError('You dont have permission to update the product');
    }
    next()
}