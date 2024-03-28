const express = require('express');
const router = express.Router();

const Patient = require('../models/patient');

router.get('/', async (req, res, next) => {
  try {
    const data = await Patient.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:mobile', async (req, res) => {
  try {
    const data = await Patient.find({ mobile: req.params.mobile });
    res.json(data.length === 1 ? data[0] : {});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const data = new Patient(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
