'use strict';

const { start } = require('./src/server');

// bc index is the root in the folder, I don't have to type it after /models
const { sequelizeDatabase } = require('./src/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Sequelize connected');
    start();
  })
  .catch(err => console.error(err));