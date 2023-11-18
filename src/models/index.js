'use strict';

require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');
const food = require('./food');
const clothes = require('./clothes');
const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

// db instance
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const foodModel = food(sequelizeDatabase, DataTypes);
const clothesModel = clothes(sequelizeDatabase, DataTypes);

foodModel.hasOne(clothesModel, { foreignKey: 'foodId'});
clothesModel.belongsTo(foodModel);

module.exports = {
  sequelizeDatabase,
  foodCollection: new Collection(foodModel),
  clothesCollection: new Collection(clothesModel),
  // foodModel,
  // clothesModel,
};