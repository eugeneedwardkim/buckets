const express = require('express');
const router = express.Router();
const Bucket = require('../models/bucket');
const Bowl = require('../models/bowl');
const Cup = require('../models/cup');

router.get('/', (req, res) => {
  Bucket.find( ( err, buckets ) => {
    res.json(buckets);
  });
});

router.post('/', (req, res) => {
  new Bucket({
    name: req.body.name
  }).save( (err, bucket) => {
    res.json(bucket);
  });
});

router.put('/:id', ( req, res ) => {
  let { name } = req.body;
  Bucket.findByIdAndUpdate(
    req.params.id,
    { $set: { name }},
    { new: true },
    (err, bucket) => {
      res.json(bucket);
    });
});

router.delete('/:id', (req, res) => {
  let bucketId = req.params.id;
  Bucket.findById(bucketId, (err, bucket) => {
    bucket.remove();
    Bowl.find({ bucketId }, (err, bowls) => {
      bowls.forEach( bowl => { 
        Cup.find({'bowlId': bowl._id}).remove().exec();
        bowl.remove() 
      } );
    });
    res.status(200).send({success: true});
  });
});

router.get('/:id', (req, res) => {
  Bucket.findById(req.params.id, (err, bucket) => {
    res.render('bucket', { bucket })
  })
});

module.exports = router;
