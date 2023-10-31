'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());

app.use(foodRouter);
app.use(clothesRouter);

app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = { start, app };