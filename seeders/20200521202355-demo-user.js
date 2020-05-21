'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: "admin",
        // pass: admin
        password: '$2a$08$CvWdZ8GZyedLr7fftdNGj.L9vHmwKVJB0fwvLYtV49xbswRizZg7.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "test@gmail.com",
        // pass: admin
        password: '$2a$08$CvWdZ8GZyedLr7fftdNGj.L9vHmwKVJB0fwvLYtV49xbswRizZg7.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
