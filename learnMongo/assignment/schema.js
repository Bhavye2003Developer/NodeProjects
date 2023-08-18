const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    pincode: { type: Number, required: true },
    street: { type: String, required: true },
    phone: { type: String, minLength: 10, maxLength: 10 }
})


const emailValidator = (email) => {
    return /\S+@\S+\.\S+/.test(value);
}


const userSchema = new Schema({
    firstName: { type: String, required: true, maxLength: 16 },
    lastName: { type: String, required: false, maxLength: 16 },
    age: { type: Number, min: 12, max: 100 },
    email: {
        type: String, required: true, validator: emailValidator
    },
    address: {
        type: addressSchema
    }
})


module.exports = { addressSchema, userSchema }