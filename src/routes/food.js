'use strict';

const express = require('express');
const { foodCollection } = require('../models');

const router = express.Router();

// Fetch all food
router.get('/food', async (req, res, next) => {
  const food = await foodCollection.read();
  res.status(200).send(food);
});

// Fetch specific food
router.get('/food/:id', async (req, res, next) => {
  try {
    const food = await foodCollection.read(req.params.id);
    res.status(200).send(food);
  } catch (err) {
    next(err);
  }
});

// Add food
router.post('/food', async (req, res, next) => {
  try {
    const addFood = await foodCollection.create(req.body);
    res.status(201).send(addFood);
  } catch (err) {
    next(err);
  }
});

// Update food
router.put('/food/:id', async (req, res, next) => {
  try {
    const updatedFood = await foodCollection.update(req.body, req.params.id);
    console.log('update food', updatedFood);
    res.status(200).json(updatedFood[1]);
  } catch (err) {
    next(err);
  }
});

// Delete food
router.delete('/food/:id', async (req, res, next) => {
  try {
    let deletedRecord = await foodCollection.delete(req.params.id);
    res.status(200).send(deletedRecord);
  } catch (err) {
    next(err);
  }
});

module.exports = router;