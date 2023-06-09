const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order, Address } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const {Types} = require('mongoose');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
        // for admin access
        users: async () => {
            return User.find({});
        },
        // for user/admin access
        user: async (parent, userId) => {
            const id = new Types.ObjectId(userId);
            return await User.findById(id);
        },
        products: async () => {
            return Product.find();
        },
        product: async (parent, { productId }) => {
            return Product.findOne({ _id: productId});
        },
        orders: async () => {
            return Order.find().sort({ orderDate});
        },
        order: async (parent, { orderDate }) => {
            return Order.findOne({orderDate: orderDate});
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = User.create({
                firstName: args.firstName, 
                lastName: args.lastName, 
                email: args.email, 
                password: args.password, 
                accessLvl: args.accessLvl
            }
            );
            const token = signToken(user)
            return {
                token, user 
            }
        },
        updateUser: async (parent, args) => {
            return User.findByIdAndUpdate({_id: args.userId},
                {
                    firstName: args.firstName, 
                    lastName: args.lastName, 
                    email: args.email, 
                    phone: args.phone
                }
            )
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId})
        },
        updatePassword: async(parent, {userId, password}) => {
            return User.findOneAndUpdate({ _id: userId},
                
                {password: password}
                )},

        addAddress: async(parent, args) => {
            return User.findByIdAndUpdate({_id: args.userId},
                {
                    $addToSet: {
                        address: {
                            number: args.number,
                            address1: args.address1,
                            address2: args.address2,
                            city: args.city,
                            province: args.province,
                            country: args.country,
                            postalCode: args.postalCode,
                            deliveryNotes: args.deliveryNotes,
                            primary: args.primary,
                            addressId: args.addressId
                        }  
                    }
                },
                { new: true })
        },
        updateAddress: async(parent, args) => {
            return User.findByIdAndUpdate({_id: args.userId},
                { filter: {addressId: args.addressId}},
                {
                    $addToSet: {
                        address: {
                            number: args.number,
                            address1: args.address1,
                            address2: args.address2,
                            city: args.city,
                            province: args.province,
                            country: args.country,
                            postalCode: args.postalCode,
                            deliveryNotes: args.deliveryNotes,
                            primary: args.primary,
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
        removeProduct: async(parent, args) => {
            return Product.findOneAndDelete({_id: args.productId})
        },
        login: async (parent, args) => {
            const user = await User.findOne({email: args.email});
            if(!user) throw new AuthenticationError("Incorrect email");
            const correctPw = await user.isCorrectPassword(args.password); 

            if(!correctPw) throw new AuthenticationError("Incorrect password");
            const token = signToken(user)
                return{user, token} 

                
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