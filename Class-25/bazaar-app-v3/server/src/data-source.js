import mongoose from 'mongoose';

class AppDataSource{
    static connect() {
        return mongoose.connect('mongodb://127.0.0.1:27017/bazaar-db');
    }

    static disconnect() {
        return mongoose.disconnect();
    }
}

export default AppDataSource;