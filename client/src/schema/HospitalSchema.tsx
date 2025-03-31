import * as Yup from 'yup';

const HospitalSchema = Yup.object().shape({
  name: Yup.string().required('Hospital name is required'),
  address: Yup.object().shape({
    street: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    postalCode: Yup.string(),
    country: Yup.string(),
    coordinates: Yup.object().shape({
      latitude: Yup.number().transform((value, originalValue) => originalValue === '' ? null : value),
      longitude: Yup.number().transform((value, originalValue) => originalValue === '' ? null : value),
    }),
  }),
  contactNumber: Yup.string(),
  email: Yup.string().email('Invalid email format'),
  totalBeds: Yup.number().integer().min(0, 'Total beds cannot be negative'),
  availableBeds: Yup.number().integer().min(0, 'Available beds cannot be negative'),
  specializations: Yup.array().of(Yup.string()),
  services: Yup.array().of(Yup.string()),
  rating: Yup.number().nullable().min(0).max(5).transform((value, originalValue) => originalValue === '' ? null : value),
  lastAvailabilityUpdate: Yup.date().nullable().transform((value, originalValue) => originalValue === '' ? null : value),
});

export default HospitalSchema;