const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
  qTitle: String,
  qDefinition: String
});

const setSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: String,
  questions: [questionsSchema]
});

mongoose.model('Set', setSchema);