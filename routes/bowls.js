const express = require('express');
const router = express.Router();
const Bowl = require('./models/bowl');
const Cup = require('./models/cup');

router.get('/', (req, res) => {
  Bowl.find({ bucketId: req.query.boardId }, (err, buckets) => {
    res.json(buckets);
  });
});

router.post('/', (req, res) => {
  let { bucketId, name } = req.body;
  new Bowl({
    name,
    bucketId
  }).save( (err, bowl) => {
    res.json(bowl);
  });
});

router.delete('/:id', (req, res) => {
  Bowl.findById(req.params.id, (err, bowl) => {
    bowl.remove();
    Cup.find({}'bowlId': req.query.id}).remove().exec( (err, bowl) => {
      res.status(200).send({success: true});
    }); 
  });
});

module.exports = router;