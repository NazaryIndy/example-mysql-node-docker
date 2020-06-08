'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 50;

    let date = new Date();

    while (amount--){
      data.push({
          name: faker.name.findName(),
          price: faker.commerce.price(),
          category: faker.lorem.word(),
          createdAt: date,
          updatedAt: date
      })
    }
    return queryInterface.bulkInsert('items', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterfacebulkDelete('items', null, {});
  }
};
