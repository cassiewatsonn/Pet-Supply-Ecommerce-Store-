const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0,
    },
    image: {
        type: String
    },
    tags: {
        type: String
    },
    category: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;