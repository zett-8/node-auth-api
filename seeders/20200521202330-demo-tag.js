'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {
        tag_name: 'sample',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: 'blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
    return queryInterface.bulkDelete('Tags', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
}
