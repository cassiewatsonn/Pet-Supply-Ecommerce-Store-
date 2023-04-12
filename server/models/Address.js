const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true,
    },
    deliveryNotes: {
        type: String
    },
    primary: {
        type: Boolean,
        required: true
    },
    addressId: {
        type: Number,
        required: true
    },

});

   
const Address = mongoose.model('Address', addressSchema);
    
module.exports = Address;