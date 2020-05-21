'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        article_name: 'title1',
        article_content: 'contents1',
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_name: 'title2',
        article_content: 'contents2',
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_name: 'title3',
        article_content: 'contents3',
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_name: 'title4',
        article_content: 'contents4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        article_name: 'title5',
        article_content: 'contents5',
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('Articles', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
