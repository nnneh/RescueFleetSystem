"use client";

import Link from "next/link";
import { useFormik } from "formik";
import RegisterSchema from "@/schema/RegisterSchema";
import axios from "axios";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const nepalProvinces = [
  "Province 1",
  "Province 2",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Province",
  "Karnali Province",
  "Sudurpashchim Province",
];

const RegisterForm = () => {
  const router = useRouter();

  const handleRegister = async (values: any) => {
    try {
      const res = await axios.post("/api/auth/register", values);
      if (res.status == 200 || res.status == 201) {
        toast.success(res.data.msg);
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.msg);
    }
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role: "user",
      address: {
        street: "",
        city: "",
        state: "", // Changed to dropdown
        postalCode: "",
        country: "Nepal", // Default to Nepal
      },
      contactNumber: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="grid gap-6 p-8 rounded-lg shadow-md bg-white">
      {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create an account</h2> */}
      {/* <p className="text-sm text-gray-600 mb-6">Create your account and get started.</p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Enter your Full Name"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-gray-700">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your Email"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contactNumber" className="text-gray-700">Contact Number</Label>
          <Input
            id="contactNumber"
            name="contactNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.contactNumber}
            placeholder="Enter your Contact No."
            className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" // Increased padding
          />
          {formik.touched.contactNumber && formik.errors.contactNumber && (
            <p className="text-red-500 text-sm">{formik.errors.contactNumber}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="text-gray-700">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your Password"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="street" className="text-gray-700">Street Address</Label>
          <Input
            id="address.street"
            name="address.street"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address.street}
            placeholder="Street Address"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {formik.touched.address?.street && formik.errors.address?.street && (
            <p className="text-red-500 text-sm">{formik.errors.address.street}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city" className="text-gray-700">City</Label>
          <Input
            id="address.city"
            name="address.city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address.city}
            placeholder="City"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {formik.touched.address?.city && formik.errors.address?.city && (
            <p className="text-red-500 text-sm">{formik.errors.address.city}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="state" className="text-gray-700">State/Province</Label>
          <select
            id="address.state"
            name="address.state"
            onChange={formik.handleChange}
            value={formik.values.address.state}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" label="Select Province" />
            {nepalProvinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          {formik.touched.address?.state && formik.errors.address?.state && (
            <p className="text-red-500 text-sm">{formik.errors.address.state}</p>
          )}
        </div>
        {/* <div className="grid gap-2">
          <Label htmlFor="postalCode" className="text-gray-700">Postal Code</Label>
          <Input
            id="address.postalCode"
            name="address.postalCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address.postalCode}
            placeholder="Postal Code"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {formik.touched.address?.postalCode && formik.errors.address?.postalCode && (
            <p className="text-red-500 text-sm">{formik.errors.address.postalCode}</p>
          )}
        </div> */}
        <div className="grid gap-2">
          <Label htmlFor="country" className="text-gray-700">Country</Label>
          <Input
            id="address.country"
            name="address.country"
            type="text"
            value={formik.values.address.country}
            readOnly // Set to readOnly as it's Nepal
            className="border rounded-md px-4 py-2 w-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-not-allowed"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="role" className="text-gray-700">Role</Label>
          <select
            id="role"
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="user">User</option>
            <option value="responder">Responder</option>
            <option value="admin">Admin</option>
            <option value="organizer">Organizer</option>
            <option value="dispatcher">Dispatcher</option>
          </select>
          {formik.touched.role && formik.errors.role && (
            <p className="text-red-500 text-sm">{formik.errors.role}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Creating account..." : "Submit"}
      </Button>

      <div className="relative text-center text-sm mt-6">
        <div className="absolute inset-0 top-1/2 left-0 right-0 h-0.5 bg-gray-300"></div>
        <span className="relative z-10 bg-white px-2 text-gray-500">
          Or continue with
        </span>
      </div>

      <Button variant="outline" className="w-full mt-4 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500">
        Sign up with Google
      </Button>

      <div className="text-center text-sm mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-red-600 underline underline-offset-4 hover:text-red-700">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;



// "use client";

// import Link from "next/link";
// import { useFormik } from "formik";
// import RegisterSchema from "@/schema/RegisterSchema";
// import axios from "axios";
// import toast from "react-hot-toast";

// import { useRouter } from "next/navigation";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const RegisterForm = () => {
//   const router = useRouter();

//   const handleRegister = async (values: any) => {
//     try {
//       const res = await axios.post("/api/auth/register", values);
//       if (res.status == 200 || res.status == 201) {
//         toast.success(res.data.msg);
//         router.push("/login");
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.msg);
//     }
//   };
//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       email: "",
//       password: "",
//       role: "",
//     },
//     validationSchema: RegisterSchema,
//     onSubmit: (values) => {
//       handleRegister(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className="grid gap-4 2xl:gap-6 2xl:p-20 px-8">
//       <div className="flex 2xl:flex-col 2xl:gap-6 gap-3">
//         <div className="grid gap-2 w-1/2 2xl:w-full">
//           <Label htmlFor="fullName">Full Name</Label>
//           <Input
//             id="fullName"
//             name="fullName"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.fullName}
//             placeholder="Enter your Full Name"
//           />
//           {formik.touched.fullName && formik.errors.fullName && (
//             <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
//           )}
//         </div>
//         <div className="grid gap-1 w-1/2 2xl:w-full">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             placeholder="Enter your Email"
//           />
//           {formik.touched.email && formik.errors.email && (
//             <p className="text-red-500 text-sm">{formik.errors.email}</p>
//           )}
//         </div>
//       </div>
//       <div className="flex 2xl:flex-col 2xl:gap-6 gap-3 ">
//         <div className="grid gap-2 w-1/2 2xl:w-full">
//           <Label htmlFor="role">Role</Label>
//           <select
//             id="role"
//             name="role"
//             onChange={formik.handleChange}
//             value={formik.values.role}
//             className="border rounded-md p-2 w-full"
//           >
//             <option value="user">User</option>
//             <option value="hospital">Hospital</option>
//             <option value="driver">Driver</option>
//           </select>

//           {formik.touched.role && formik.errors.role && (
//             <p className="text-red-500 text-sm">{formik.errors.role}</p>
//           )}
//         </div>
//         <div className="grid gap-2 w-1/2 2xl:w-full">
//           <Label htmlFor="password">Password</Label>
//           <Input
//             id="password"
//             name="password"
//             type="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             placeholder="Enter your Password"
//           />
//           {formik.touched.password && formik.errors.password && (
//             <p className="text-red-500 text-sm">{formik.errors.password}</p>
//           )}
//         </div>
//       </div>

//       <Button
//         type="submit"
//         className="w-full bg-red-600 hover:bg-red-500 cursor-pointer"
//         disabled={formik.isSubmitting}
//       >
//         {formik.isSubmitting ? "Creating account..." : "Submit"}
//       </Button>
//       <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//         <span className="relative z-10 bg-background px-2 text-muted-foreground">
//           Or continue with
//         </span>
//       </div>
//       <Button variant="outline" className="w-full">
//         Sign up with Google
//       </Button>
//       <div className="text-center text-sm">
//         Already have an account?{" "}
//         <Link href="/login" className="underline underline-offset-4">
//           Log in
//         </Link>
//       </div>
//     </form>
//   );
// };

// export default RegisterForm;



// "use client";

// import Link from "next/link";
// import { useFormik } from "formik";
// import RegisterSchema from "@/schema/RegisterSchema";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const RegisterForm = () => {
//   const router = useRouter();

//   const handleRegister = async (values: any) => {
//     try {
//       const res = await axios.post("/api/auth/register", values);
//       if (res.status == 200 || res.status == 201) {
//         toast.success(res.data.msg);
//         router.push("/login");
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.msg);
//     }
//   };
//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       email: "",
//       password: "",
//       role: "",
//     },
//     validationSchema: RegisterSchema,
//     onSubmit: (values) => {
//       handleRegister(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className="grid gap-4 2xl:gap-6 2xl:p-20 px-8">
//       <div className="flex 2xl:flex-col 2xl:gap-6 gap-3">
//         <div className="grid gap-2 w-1/2 2xl:w-full">
//           <Label htmlFor="fullName">Full Name</Label>
//           <Input
//             id="fullName"
//             name="fullName"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.fullName}
//             placeholder="Enter your Full Name"
//           />
//           {formik.touched.fullName && formik.errors.fullName && (
//             <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
//           )}
//         </div>
//         <div className="grid gap-1 w-1/2 2xl:w-full">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             placeholder="Enter your Email"
//           />
//           {formik.touched.email && formik.errors.email && (
//             <p className="text-red-500 text-sm">{formik.errors.email}</p>
//           )}
//         </div>
//       </div>
//       <div className="flex 2xl:flex-col 2xl:gap-6 gap-3 ">
//         <div className="grid gap-2 w-1/2 2xl:w-full">
//           <Label htmlFor="role">Role</Label>
//           <select
//             id="role"
//             name="role"
//             onChange={formik.handleChange}
//             value={formik.values.role}
//             className="border rounded-md p-2 w-full"
//           >
//             <option value="user">User</option>
//             <option value="hospital">Hospital</option>
//             <option value="driver">Driver</option>
//           </select>

//           {formik.touched.role && formik.errors.role && (
//             <p className="text-red-500 text-sm">{formik.errors.role}</p>
//           )}
//         </div>
//         <div className="grid gap-2 w-1/2 2xl:w-full">
//           <Label htmlFor="password">Password</Label>
//           <Input
//             id="password"
//             name="password"
//             type="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             placeholder="Enter your Password"
//           />
//           {formik.touched.password && formik.errors.password && (
//             <p className="text-red-500 text-sm">{formik.errors.password}</p>
//           )}
//         </div>
//       </div>

//       <Button
//         type="submit"
//         className="w-full bg-red-600 hover:bg-red-500 cursor-pointer"
//         disabled={formik.isSubmitting}
//       >
//         {formik.isSubmitting ? "Creating account..." : "Submit"}
//       </Button>
//       <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//         <span className="relative z-10 bg-background px-2 text-muted-foreground">
//           Or continue with
//         </span>
//       </div>
//       <Button variant="outline" className="w-full">
//         Sign up with Google
//       </Button>
//       <div className="text-center text-sm">
//         Already have an account?{" "}
//         <Link href="/login" className="underline underline-offset-4">
//           Log in
//         </Link>
//       </div>
//     </form>
//   );
// };

// export default RegisterForm;
