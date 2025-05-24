const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationship-db')
    .then(() => console.log('connection open'));

const addressSchema = new mongoose.Schema({
    city: String,
    country: String,
    _id: false
})    

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    addresses: [addressSchema]
}, {versionKey:false})    

const User = mongoose.model('User', userSchema, 'users');

async function addAddress(userId) {
    const user = await User.findById(userId);
    user.addresses.push({ city: 'New Delhi', country: 'Delhi' });
    await user.save();
}

async function createUser() {
    const user = await User.create({ name: 'Max', age: 25 });
    console.log(user);
}

async function main() {
    // await createUser();
    addAddress('6831d0e47f95b22f10010bda');
}

main()


