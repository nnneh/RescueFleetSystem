"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import RideSchema from "@/schema/RideSchema";

const RideForm = () => {
  const router = useRouter();
  const [isFindingAmbulance, setIsFindingAmbulance] = useState(false);

  const handleCreateRide = async (values: any) => {
    setIsFindingAmbulance(true);
    try {
      const res = await axios.post("/api/auth/ride", values);
      if (res.status === 200 || res.status === 201) {
        toast.success(res.data.msg);
        router.push("/ride");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.msg);
    } finally {
      setIsFindingAmbulance(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      patientName: '',
      patientContact: '',
      patientAge: '',
      patientGender: '',
      medicalCondition: '',
      pickupLocation: '',
      dropoffLocation: '',
      pickupLatitude: '',
      pickupLongitude: '',
      dropoffLatitude: '',
      dropoffLongitude: '',
      ambulanceId: '',
      driverId: '',
      paymentMethod: '',
      paymentStatus: '',
      totalFare: '',
      notes: '',
    },
    validationSchema: RideSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      handleCreateRide(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Ambulance Ride Request</h2>

      <div className="grid gap-4 mb-4">
        <div>
          <Label htmlFor="patientName" className="text-gray-700">Patient Name</Label>
          <Input
            type="text"
            id="patientName"
            name="patientName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.patientName}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.patientName && formik.errors.patientName && (
            <p className="text-red-500 text-sm">{formik.errors.patientName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="patientContact" className="text-gray-700">Patient Contact</Label>
          <Input
            type="text"
            id="patientContact"
            name="patientContact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.patientContact}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.patientContact && formik.errors.patientContact && (
            <p className="text-red-500 text-sm">{formik.errors.patientContact}</p>
          )}
        </div>

        <div>
          <Label htmlFor="patientAge" className="text-gray-700">Patient Age</Label>
          <Input
            type="number"
            id="patientAge"
            name="patientAge"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.patientAge}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.patientAge && formik.errors.patientAge && (
            <p className="text-red-500 text-sm">{formik.errors.patientAge}</p>
          )}
        </div>

        <div>
          <Label htmlFor="patientGender" className="text-gray-700">Patient Gender</Label>
          <select
            id="patientGender"
            name="patientGender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.patientGender}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.patientGender && formik.errors.patientGender && (
            <p className="text-red-500 text-sm">{formik.errors.patientGender}</p>
          )}
        </div>

        <div>
          <Label htmlFor="medicalCondition" className="text-gray-700">Medical Condition</Label>
          <textarea
            id="medicalCondition"
            name="medicalCondition"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.medicalCondition}
            // rows="3"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {formik.touched.medicalCondition && formik.errors.medicalCondition && (
            <p className="text-red-500 text-sm">{formik.errors.medicalCondition}</p>
          )}
        </div>

        <div>
          <Label htmlFor="pickupLocation" className="text-gray-700">Pickup Location</Label>
          <Input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pickupLocation}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.pickupLocation && formik.errors.pickupLocation && (
            <p className="text-red-500 text-sm">{formik.errors.pickupLocation}</p>
          )}
        </div>

        <div>
          <Label htmlFor="dropoffLocation" className="text-gray-700">Dropoff Location</Label>
          <Input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dropoffLocation}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.dropoffLocation && formik.errors.dropoffLocation && (
            <p className="text-red-500 text-sm">{formik.errors.dropoffLocation}</p>
          )}
        </div>

        {/* <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="pickupLatitude" className="text-gray-700">Pickup Latitude</Label>
            <Input
              type="number"
              id="pickupLatitude"
              name="pickupLatitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pickupLatitude}
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.pickupLatitude && formik.errors.pickupLatitude && (
              <p className="text-red-500 text-sm">{formik.errors.pickupLatitude}</p>
            )}
          </div>

          <div>
            <Label htmlFor="pickupLongitude" className="text-gray-700">Pickup Longitude</Label>
            <Input
              type="number"
              id="pickupLongitude"
              name="pickupLongitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pickupLongitude}
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.pickupLongitude && formik.errors.pickupLongitude && (
              <p className="text-red-500 text-sm">{formik.errors.pickupLongitude}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="dropoffLatitude" className="text-gray-700">Dropoff Latitude</Label>
            <Input
              type="number"
              id="dropoffLatitude"
              name="dropoffLatitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dropoffLatitude}
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.dropoffLatitude && formik.errors.dropoffLatitude && (
              <p className="text-red-500 text-sm">{formik.errors.dropoffLatitude}</p>
            )}
          </div>

          <div>
            <Label htmlFor="dropoffLongitude" className="text-gray-700">Dropoff Longitude</Label>
            <Input
              type="number"
              id="dropoffLongitude"
              name="dropoffLongitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dropoffLongitude}
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.dropoffLongitude && formik.errors.dropoffLongitude && (
              <p className="text-red-500 text-sm">{formik.errors.dropoffLongitude}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="ambulanceId" className="text-gray-700">Ambulance ID</Label>
          <Input
            type="text"
            id="ambulanceId"
            name="ambulanceId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ambulanceId}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.ambulanceId && formik.errors.ambulanceId && (
            <p className="text-red-500 text-sm">{formik.errors.ambulanceId}</p>
          )}
        </div> */}

        {/* <div>
          <Label htmlFor="driverId" className="text-gray-700">Driver ID</Label>
          <Input
            type="text"
            id="driverId"
            name="driverId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.driverId}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.driverId && formik.errors.driverId && (
            <p className="text-red-500 text-sm">{formik.errors.driverId}</p>
          )}
        </div> */}

        {/* <div>
          <Label htmlFor="paymentMethod" className="text-gray-700">Payment Method</Label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.paymentMethod}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="Online">Online</option>
          </select>
          {formik.touched.paymentMethod && formik.errors.paymentMethod && (
            <p className="text-red-500 text-sm">{formik.errors.paymentMethod}</p>
          )}
        </div> */}

        {/* <div>
          <Label htmlFor="paymentStatus" className="text-gray-700">Payment Status</Label>
          <select
            id="paymentStatus"
            name="paymentStatus"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.paymentStatus}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Payment Status</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Failed">Failed</option>
          </select>
          {formik.touched.paymentStatus && formik.errors.paymentStatus && (
            <p className="text-red-500 text-sm">{formik.errors.paymentStatus}</p>
          )}
        </div> */}

        <div>
          <Label htmlFor="totalFare" className="text-gray-700">Total Fare</Label>
          <Input
            type="number"
            id="totalFare"
            name="totalFare"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalFare}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.totalFare && formik.errors.totalFare && (
            <p className="text-red-500 text-sm">{formik.errors.totalFare}</p>
          )}
        </div>

        {/* <div>
          <Label htmlFor="notes" className="text-gray-700">Notes</Label>
          <textarea
            id="notes"
            name="notes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.notes}
            // rows="4"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {formik.touched.notes && formik.errors.notes && (
            <p className="text-red-500 text-sm">{formik.errors.notes}</p>
          )}
        </div> */}
      </div>
      
       <Button type="submit" className="w-full bg-red-600 hover:bg-red-500 cursor-pointer"
          disabled={isFindingAmbulance}
>
          {isFindingAmbulance ? "Finding Ambulance..." : "Find Ambulance"}
      </Button>
    </form>
  );
};

export default RideForm;
