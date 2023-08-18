const mongoose = require('mongoose');

function mongoConnect() {

    // connect db
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/quotesDB');
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
        console.log("Database connected")
    }

    main()
        .then((res) => {
        })
        .catch(err => console.log(err));
}

module.exports = { mongoConnect }