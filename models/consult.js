const mongoose = require('mongoose');

const Status = ['DONE', 'DOCS SENT', 'FOR PHYSICAL', 'REFERRED', 'CANCELLED', 'OTHERS'];
const PaymentStatus = ['CONFIRMED', 'UNPAID', 'WAIVED', 'OTHERS'];
const PaymentMode = ['GCASH', 'BPI', 'MAYA', 'OTHERS'];

const consultSchema = new mongoose.Schema({
  patientId: {
    required: true,
    type: String,
  },
  doctorId: {
    required: true,
    type: String,
  },
  SC: {
    type: Boolean,
    default: false,
  },
  RX: {
    type: Boolean,
    default: false,
  },
  LR: {
    type: Boolean,
    default: false,
  },
  MC: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: Status,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: PaymentStatus,
    default: null,
  },
  paymentMode: {
    type: String,
    enum: PaymentMode,
    default: null,
  },
  paymentDate: {
    type: Date,
    default: null,
  },
  PCO: {
    type: String,
    default: null,
  },
  proofUploaded: {
    type: Boolean,
    default: false,
  },
  documentsUploaded: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Consult', consultSchema);
