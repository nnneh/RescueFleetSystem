const mongoose = require('mongoose');

const ambulanceRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Link to the User who made the request
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  callDetails: {
    type: String,
    trim: true,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  requestTime: {
    type: Date,
    default: Date.now,
  },
  patientDetails: {
    name: { type: String, trim: true },
    age: { type: Number, min: 0 },
    medicalHistory: { type: String, trim: true },
  },
  status: {
    type: String,
    enum: ['Pending', 'Dispatched', 'En Route', 'On Scene', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  assignedAmbulance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ambulance', // Link to the assigned Ambulance
    default: null,
  },
  estimatedArrivalTime: {
    type: Date,
  },
  currentAmbulanceLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  updates: [{
    status: {
      type: String,
      enum: ['Pending', 'Dispatched', 'En Route', 'On Scene', 'Completed', 'Cancelled'],
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }],
});

const AmbulanceRequest = mongoose.model('AmbulanceRequest', ambulanceRequestSchema);

module.exports = AmbulanceRequest;