'use strict';

module.exports = {//https://sequelize.org/master/class/lib/query-interface.js~QueryInterface.html
    // up: (queryInterface, Sequelize) => Promise.all([
    //list of changes
    // ]),

    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('items', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11)
            },
            name: {
                type: Sequelize.STRING(255)
            },
            price: {
                type: Sequelize.DECIMAL(10,0)
            },
            category: {
                type: Sequelize.STRING(255)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('items');
    }
};
