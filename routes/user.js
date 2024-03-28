const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.json({ size: data.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const data = new User(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
