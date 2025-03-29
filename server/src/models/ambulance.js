const mongoose = require('mongoose');

const ambulanceSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  model: {
    type: String,
    trim: true,
  },
  currentLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  status: {
    type: String,
    enum: ['available', 'enRoute', 'onScene', 'transporting', 'unavailable'],
    default: 'available',
  },
  assignedRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AmbulanceRequest', // Link to the current assigned request
    default: null,
  },
  lastLocationUpdate: {
    type: Date,
  },
  driverInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Link to the User who is driving the ambulance (assuming drivers are users)
  },
  medicalEquipment: [String], // List of medical equipment available in the ambulance
  capacity: {
    type: Number,
    default: 1, // Number of patients the ambulance can accommodate
  },
  isOperational: {
    type: Boolean,
    default: true,
  },
  serviceArea: [String], // Areas this ambulance typically serves
});

const Ambulance = mongoose.model('Ambulance', ambulanceSchema);

module.exports = Ambulance;