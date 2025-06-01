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
    },
    role: {
        type: String,
        enum: ['BUYER', 'SELLER'],
        default:'BUYER'
    }
},{versionKey: false, timestamps: true});

userSchema.methods.hasRole = function(role) {
    return this.role && this.role === role;
}

const User = mongoose.model('User', userSchema, 'users');

export default User;