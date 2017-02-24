const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bowl = new Schema({
  name:{ type: String, required: true},
  bucketId: {type: String, required: true}
});

module.exports = mongoose.model('Bowl', Bowl);
