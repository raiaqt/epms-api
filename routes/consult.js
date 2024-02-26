var express = require('express');
var router = express.Router();

const Consult = require('../models/consult');

router.get('/', async (req, res, next) => {
  try{
    const data = await Consult.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
});

router.get('/:id', async (req, res) => {
  try{
      const data = await Consult.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

router.post('/', async (req, res) => {
  const data = new Consult(req.body)

  try{
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch(error){
    res.status(400).json({message: error.message})
  }
})

router.patch('/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Consult.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;
