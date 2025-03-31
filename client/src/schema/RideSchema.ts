import * as Yup from "yup";


const RideSchema = Yup.object().shape({
  patientName: Yup.string().required('Patient Name is required'),
  patientContact: Yup.string(),
  patientAge: Yup.number().integer().positive(),
  patientGender: Yup.string().oneOf(['Male', 'Female', 'Other']),
  medicalCondition: Yup.string(),
  pickupLocation: Yup.string().required('Pickup Location is required'),
  dropoffLocation: Yup.string().required('Dropoff Location is required'),
  pickupLatitude: Yup.number(),
  pickupLongitude: Yup.number(),
  dropoffLatitude: Yup.number(),
  dropoffLongitude: Yup.number(),
  ambulanceId: Yup.string().required('Ambulance ID is required'), // Assuming you have a way to select this
  driverId: Yup.string(), // Assuming you have a way to select this
  paymentMethod: Yup.string().oneOf(['Cash', 'Card', 'Online']),
  paymentStatus: Yup.string().oneOf(['Pending', 'Paid', 'Failed']),
  totalFare: Yup.number().positive(),
  notes: Yup.string(),
});

export default RideSchema;