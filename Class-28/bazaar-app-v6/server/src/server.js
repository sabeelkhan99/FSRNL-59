import AppDataSource from "./data-source.js";
import app from './app.js';

const PORT = 1234;

(async() => {
    try {
        await AppDataSource.connect();
        console.log('Database connection open');
        app.listen(PORT, () => {
            console.log(`Started the server at port ${PORT}`);
        })
    }
    catch (err) {
        console.log(err);
    }
})();