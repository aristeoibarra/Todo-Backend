const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  uid : String,
  date:{type: Date, default: new Date()}
});

module.exports = mongoose.model('Task', TaskSchema);