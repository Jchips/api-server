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
  });
};

module.exports = clothes;