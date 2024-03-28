const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
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
  countryCode: {
    type: String,
    default: 63,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: null,
  },
  lastConsultId: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('Patient', patientSchema);
