const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    postalCode: { type: String, trim: true },
    country: { type: String, trim: true },
    coordinates: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  contactNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  totalBeds: {
    type: Number,
    default: 0,
    min: 0,
  },
  availableBeds: {
    type: Number,
    default: 0,
    min: 0,
  },
  specializations: [String],
  services: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: null,
  },
  lastAvailabilityUpdate: {
    type: Date,
  },
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;