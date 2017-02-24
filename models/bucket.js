const mongoose = require('mongoose');
const Schema = mongoose.Schemal

const Bucket = new Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model( 'Bucket', Bucket);