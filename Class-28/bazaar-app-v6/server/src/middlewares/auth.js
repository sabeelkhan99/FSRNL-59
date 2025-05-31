import jwt from 'jsonwebtoken';
import { AuthenticationError } from '../core/ApiError.js';

const JWT_SECRET = "DC8BFBD5A175E3C595847EA9D1F73";

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