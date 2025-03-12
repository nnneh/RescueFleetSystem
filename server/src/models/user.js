const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
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
    coordinates: { // For mapping and location services
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        // Basic phone number validation, customize as needed
        return /^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Enforce password strength
  },
  role: {
    type: String,
    enum: ['user', 'responder', 'admin', 'dispatcher'], // Different roles for the system
    default: 'user',
  },
  profilePicture: {
    type: String, // URL or path to the profile picture
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false, // For email verification
  },
  verificationToken: {
    type: String, // For email verification
  },
  verificationTokenExpires: {
    type: Date, // For email verification expiration
  },
  resetPasswordToken: {
    type: String, // For password reset
  },
  resetPasswordExpires: {
    type: Date, // For password reset expiration
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
  emergencyContacts: [{ // For users to add emergency contacts
    name: String,
    contactNumber: String,
    relationship: String,
  }],
  medicalInformation: { // For responders or people requesting rescue
    bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    allergies: [String],
    medicalConditions: [String],
    medications: [String],
    otherDetails: String,
  },
  responderDetails: { // For responders
    availability: { type: Boolean, default: false },
    vehicleType: { type: String, enum: ['car', 'motorcycle', 'boat', 'helicopter', 'drone', 'foot'] }, //vehicle they use for rescue.
    specializations: [String], // e.g., first aid, water rescue, etc.
    certification: String, // Path to certification document.
    experience: String,
    location: { //Current location of responders.
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  dispatcherDetails: { // for dispatchers
    assignedAreas: [String]
  },
  userPreferences: {
      language: {type: String, default: 'en'},
      notificationsEnabled: {type: Boolean, default: true}
  },
  activeRequests: [{type: mongoose.Schema.Types.ObjectId, ref: 'Request'}], //requests the user has either made or is assigned to.
  rescueHistory: [{type: mongoose.Schema.Types.ObjectId, ref: 'Request'}], //past rescue requests
  deviceTokens: [String], //for push notifications.
  isOnline: {type: Boolean, default: false} //for real time tracking of responders.
});

const User = mongoose.model('User', userSchema);

module.exports = User;