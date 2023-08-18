const mongoose = require('mongoose');
const schema = require('./schema');

main()
    .then(() => {
        console.log("Connected to MongoDB successfully...");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/UsersDB');
}

const users = mongoose.model('users', schema.userSchema);

const user = new users({
    firstName: "Bhavye The god",
    lastName: "Jain",
    age: 20,
    email: "bhavyedevelopment2003@gmail.com",
    address: {
        pincode: 110035,
        street: "238/9 kashmere gate",
        phone: "989120028"
    }
});

user.save();