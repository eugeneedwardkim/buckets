const express = require('express');
const router = express.Router();
const Cup = require('../models/cup');


router.get('/', (req, res) =>{
  Cup.find({ bowlId: req.query.bowlId }, (err, cups) => {
    res. json(cups);
  });
});

router.post('/', (req, res) => {
  let { bowlId, name} = req.body;
  new Cup({
    name,
    bowlId
  }).save( (err, bowl) => {
    res.json(bowl);
  });
});

router.delete('./:id', (req, res) => {
  Cup.findById(req.params.id, (err, cup) =>{
    cup.remove();
    res.status(200).send({succes: true});
  });
});

module.exports = router;