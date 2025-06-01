import mongoose from 'mongoose';

const dbUrl = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/bazaar-db';

class AppDataSource{
    static connect() {
        return mongoose.connect(dbUrl);
    }

    static disconnect() {
        return mongoose.disconnect();
    }
}

export default AppDataSource;