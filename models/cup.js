const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cup = new Schema({
  name: {type: String, required: true},
  bowlId: {type: String, required: true}
})

module.exports = mongoose.model('Cup', Cup);