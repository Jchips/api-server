'use strict';

const express = require('express');
const { foodModel } = require('../models');

const router = express.Router();

// Fetch all food
router.get('/food', async (req, res, next) => {
  const food = await foodModel.findAll();
  res.status(200).send(food);
});

// Fetch specific food
router.get('/food/:id', async (req, res, next) => {
  try {
    const food = await foodModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(food);
  } catch (err) {
    next(err);
  }
});

// Add food
router.post('/food', async (req, res, next) => {
  try {
    const addFood = await foodModel.create(req.body);
    res.status(201).send(addFood);
  } catch (err) {
    next(err);
  }
});

// Update food
router.put('/food/:id', async (req, res, next) => {
  try {
    const updatedFood = await foodModel.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    });
    console.log('update food', updatedFood);
    res.status(200).json(updatedFood[1]);
  } catch (err) {
    next(err);
  }
});

// Delete food
router.delete('/food/:id', async (req, res, next) => {
  try {
    await foodModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send('deleted food');
  } catch (err) {
    next(err);
  }
});

module.exports = router;