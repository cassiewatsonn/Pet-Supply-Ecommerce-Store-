const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
      type: Date,
      default: Date.now
    },
    status: {
        type: String,
    },
    products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
      ],
      address: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Address'
        }
      ]
    });
    
    const Order = mongoose.model('Order', orderSchema);
    
    module.exports = Order;