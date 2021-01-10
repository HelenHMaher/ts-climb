const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exercise = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date(),
  },
  mostRecent: {
    type: Number,
  },
});
mongoose.set('useCreateIndex', true);
exercise.index({ name: 'text' });

module.exports = mongoose.model('Exercise', exercise);
