const mongoose = require('mongoose');

// Define the schema for an Ambulance Ride
const ambulanceRideSchema = new mongoose.Schema({
  // Unique identifier for the ride
  rideId: {
    type: String,
    required: true,
    unique: true,
  },
  // Patient's information
  patientName: {
    type: String,
    required: true,
  },
  patientContact: {
    type: String,
  },
  patientAge: {
    type: Number,
  },
  patientGender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  medicalCondition: {
    type: String,
  },
  // Location details
  pickupLocation: {
    type: String,
    required: true,
  },
  dropoffLocation: {
    type: String,
    required: true,
  },
  pickupLatitude: {
    type: Number,
  },
  pickupLongitude: {
    type: Number,
  },
  dropoffLatitude: {
    type: Number,
  },
  dropoffLongitude: {
    type: Number,
  },
  // Time stamps
  requestTime: {
    type: Date,
    default: Date.now,
  },
  dispatchTime: {
    type: Date,
  },
  arrivalTimeAtPickup: {
    type: Date,
  },
  departureTimeFromPickup: {
    type: Date,
  },
  arrivalTimeAtDropoff: {
    type: Date,
  },
  // Ambulance details
  ambulanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ambulance', // Assuming you have an Ambulance model
    required: true,
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver', // Assuming you have a Driver model
  },
  // Status of the ride
  status: {
    type: String,
    enum: ['Requested', 'Dispatched', 'En Route to Pickup', 'Arrived at Pickup', 'En Route to Dropoff', 'Completed', 'Cancelled'],
    default: 'Requested',
  },
  // Payment information (optional)
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Card', 'Online'],
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed'],
  },
  totalFare: {
    type: Number,
  },
  // Additional notes or information
  notes: {
    type: String,
  },
  // Timestamps for creation and updates
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the AmbulanceRide model
const AmbulanceRide = mongoose.model('AmbulanceRide', ambulanceRideSchema);

// Export the model
module.exports = AmbulanceRide;