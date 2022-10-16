const {Users} = require('../models');

const usersdata = [
    {
        username: 'Sheetal',
        email: 'sheetal@gmail.com',
        password: 'password12345',
      },
      {
        username: 'Joon',
        email: 'joon@gmail.com',
        password: 'password12345',
      },
      {
        username: 'Cosmin',
        email: 'cosmin@gmail.com',
        password: 'password12345',
      },
];

const seedUsers = () => Users.bulkCreate(usersdata);

module.exports = seedUsers;
