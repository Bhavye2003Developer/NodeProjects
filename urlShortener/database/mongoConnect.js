const mongoose = require('mongoose');

function connectDB() {
    main()
        .then(() => {
            console.log("Connected to database successfully")
        })
        .catch(err => console.log(err));

    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/urlDB');

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }
}


module.exports = connectDB;