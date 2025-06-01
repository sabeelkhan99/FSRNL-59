import express from 'express';
import User from '../models/user.js';
import { AuthenticationError, BadRequestError } from '../core/ApiError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { isLoggedIn } from '../middlewares/auth.js'

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;
    // check if username already exist
    const user = await User.findOne({ username });
    if (user) {
        throw new BadRequestError('User with this username already exist');
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 12);

    // create the user in the db
    await User.create({ username, email, password: hash, role });

    // send the response.
    res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        throw new AuthenticationError('Username or password is incorrect');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new AuthenticationError('Username or password is incorrect');
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {expiresIn: '3d'});

    res.status(200).json({ token: token });
});


router.get('/profile', isLoggedIn, async (req, res) => {
    const { userId } = req;
    const user = await User.findById(userId).select('-password');
    res.status(200).json(user);
});

export default router;

