const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/movies_db')
    .then(() => console.log('Connection open'))
    .catch((err) => console.log(err));


const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
}, {versionKey: false, timestamps: true});

// Should 
    // - Singular
    // - First letter should be uppercase 

const Movie = mongoose.model('Movie', movieSchema, 'movies');

Movie.find({name:'Spiderman'}).then((m)=>console.log(m))

// const latestBillions = new Movie({ name: 'Latest Billions', year: 2017, rating: 9.1, isWatched: true });

// latestBillions.save()
//     .then((m) => console.log(m));

