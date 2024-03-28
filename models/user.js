const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
    middle: {
      type: String,
      default: null,
    },
  },
});

module.exports = mongoose.model('User', userSchema);
