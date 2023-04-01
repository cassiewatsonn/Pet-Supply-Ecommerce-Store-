const db = require('../config/connection');
const { User, Product } = require('../models');
const userSeed = require('./userSeed.json');
const productseed = require ('./productseed.json');

db.once('open', async () => {
 await User.deleteMany({});
 await User.create(userSeed);

 await Product.deleteMany({});
 await Product.create(productseed);

 console.log("product has been seeded");

 console.log('Users have been seeded');
 process.exit(0);

});