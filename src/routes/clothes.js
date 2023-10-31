'use strict';

const express = require('express');
const { clothesModel } = require('../models');

const router = express.Router();

// Fetch all clothing items
router.get('/clothes', async (req, res, next) => {
  try {
    const allClothes = await clothesModel.findAll();
    res.status(200).send(allClothes);
  } catch (err) {
    next(err);
  }
});

// Fetch specific clothing item
router.get('/clothes/:id', async (req, res, next) => {
  try {
    const clothingItem = await clothesModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(clothingItem);
  } catch (err) {
    next(err);
  }
});

// Add clothing item
router.post('/clothes', async (req, res, next) => {
  try {
    const addClothingItem = await clothesModel.create(req.body);
    res.status(201).send(addClothingItem);
  } catch (err) {
    next(err);
  }
});

// Update clothing item
router.put('/clothes/:id', async (req, res, next) => {
  try {
    const updateClothingItem = await clothesModel.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    res.status(200).send(updateClothingItem[1]);
  } catch (err) {
    next(err);
  }
});

// Remove clothing item
router.delete('/clothes/:id', async (req, res, next) => {
  try {
    const removeClothingItem = await clothesModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(removeClothingItem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;