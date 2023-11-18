'use strict';

const clothes = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('clothes', {
    clothing_item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'food',
        key: 'id',
      },
    },
  });
};

module.exports = clothes;