const db = require('../config/connection');
const { User } = require('../models');
const userSeed = require('./userSeed.json');

db.once('open', async () => {
 await User.deleteMany({});
 await User.create(userSeed);

 console.log('Users have been seeded');
 process.exit(0);

});