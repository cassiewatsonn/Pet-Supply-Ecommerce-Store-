const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order, Address } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        // for admin access
        users: async () => {
            return User.find();
        },
        // for user/admin access
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        products: async () => {
            return Product.find();
        },
        product: async (parent, { productId }) => {
            return Product.findOne({ productId: productId});
        },
        orders: async () => {
            return Order.find().sort({ orderDate});
        },
        order: async (parent, { orderDate }) => {
            return Order.findOne({orderDate: orderDate});
        },
    },
    Mutation: {
        addUser: async (parent, {firstName, lastName, email, password, accessLvl}) => {
            return User.create({firstName, lastName, email, password, accessLvl});
        },
        updateUser: async (parent, {id, firstName, lastName, email, password, phone, address}) => {
            return User.findByIdAndUpdate({id},
                {firstName, lastName, email, password, phone, address}
                )
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId})
        },   
        addAddress: async(parent, { userId, addressId, number, streetName, province, country, postalCode, deliveryNotes, primary  }) => {
            return User.findByIdAndUpdate({ userId},
                {
                    $addToSet: {
                        address: {
                            number: number,
                            streetName: streetName,
                            province: province,
                            country: country,
                            postalCode: postalCode,
                            deliveryNotes: deliveryNotes,
                            primary: primary,
                            addressId: addressId
                        }  
                    }
                },
                { new: true })
        },
        updateAddress: async(parent, { userId, addressId, number, streetName, province, country, postalCode, deliveryNotes,primary }) => {
            return User.findByIdAndUpdate({userId},
                { filter: {addressId: addressId}},
                {
                    $addToSet: {
                        address: {
                            number: number,
                            streetName: streetName,
                            province: province,
                            country: country,
                            postalCode: postalCode,
                            deliveryNotes: deliveryNotes,
                            primary: primary,
                        }  
                    }
                },
                { new: true }
            )
        },
        removeAddress: async(parent, { userId, addressId }) => {
            return User.findOneAndUpdate(
                {_id: userId},
                { $pull: {address: {addressId: addressId}}
                },
                { new: true }
                )
        },
        addProduct: async(parent, {productId, name, price, category, tags, image, description, stockCount}) => {
            return Product.create({productId, name, price, category, tags, image, description, stockCount})
        },
        updateProduct: async(parent, {productId, name, price, category, tags, image, description, stockCount}) => {
            return Product.findOneAndUpdate({productId: productId},
                {productId, name, price, category, tags, image, description, stockCount},
                { new: true }
                )
        },
        removeProduct: async(parent, {productId}) => {
            return Product.delete(productId = productId)
        }
        // addOrder(products: [Product], orderDate: Date, orderPrice: Float!): Order
        // updateOrder(): Order
        // removeOrder(orderId: Int!): Order
    }

//Boilerplate Stripe Code 
    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }

};

module.exports = resolvers;