module.exports  = function (sequelize, dataTypes) {
    return sequelize.define('item', {
        name: dataTypes.STRING,
        price: dataTypes.DECIMAL,
        category: dataTypes.STRING//,
        // exampleItem: {
        //     type: Sequelize.INTEGER(11),
        //     allowNull: false,
        // }

    });
};