import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        index: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},{versionKey: false, timestamps: true});

const User = mongoose.model('User', userSchema, 'users');

export default User;