import * as Yup from "yup";

const RegisterSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be at most 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Full name must contain only letters and spaces")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  contactNumber: Yup.string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number must be at most 15 digits")
    .matches(/^[0-9]+$/, "Contact number must contain only digits")
    .required("Contact number is required"),

  streetAddress: Yup.string()
    .min(5, "Street address must be at least 5 characters")
    .max(100, "Street address must be at most 100 characters")
    .required("Street address is required"),

  city: Yup.string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be at most 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "City must contain only letters and spaces")
    .required("City is required"),

  stateProvince: Yup.string()
    .min(2, "State/Province must be at least 2 characters")
    .max(50, "State/Province must be at most 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "State/Province must contain only letters and spaces")
    .required("State/Province is required"),

  country: Yup.string()
    .min(2, "Country must be at least 2 characters")
    .max(50, "Country must be at most 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Country must contain only letters and spaces")
    .required("Country is required"),

  role: Yup.string()
    .oneOf(["user", "organizer", "dispatcher", "responder", "admin"], "Invalid role")
    .required("Role is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot be longer than 20 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
    .required("Password is required"),
});

export default RegisterSchema;
