'use client';

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import HospitalSchema from '@/schema/HospitalSchema'; 

const HospitalForm = () => {
  const router = useRouter();

  const handleCreateHospital = async (values: any) => {
    try {
      const res = await axios.post("/api/auth/hospital", values);
      if (res.status === 200 || res.status === 201) {
        toast.success(res.data.msg);
        router.push("/hospital"); 
      }
    } catch (error: any) {
      toast.error(error.response?.data?.msg);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        coordinates: {
          latitude: '',
          longitude: '',
        },
      },
      contactNumber: '',
      email: '',
      totalBeds: '',
      availableBeds: '',
      specializations: [],
      services: [],
      rating: '',
      lastAvailabilityUpdate: '',
    },
    validationSchema: HospitalSchema, 
    onSubmit: (values) => {
      handleCreateHospital(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-md shadow-md space-y-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Hospital</h2>

      <div className="grid gap-4 mb-4">
        <div>
          <Label htmlFor="name" className="text-gray-700">Hospital Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="address.street" className="text-gray-700">Street Address</Label>
          <Input
            type="text"
            id="address.street"
            name="address.street"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address.street}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.address?.street && formik.errors.address?.street && (
            <p className="text-red-500 text-sm">{formik.errors.address.street}</p>
          )}
        </div>

        <div>
          <Label htmlFor="address.city" className="text-gray-700">City</Label>
          <Input
            type="text"
            id="address.city"
            name="address.city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address.city}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.address?.city && formik.errors.address?.city && (
            <p className="text-red-500 text-sm">{formik.errors.address.city}</p>
          )}
        </div>

        <div>
          <Label htmlFor="address.state" className="text-gray-700">State</Label>
          <Input
            type="text"
            id="address.state"
            name="address.state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address.state}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.address?.state && formik.errors.address?.state && (
            <p className="text-red-500 text-sm">{formik.errors.address.state}</p>
          )}
        </div>

        {/* <div>
          <Label htmlFor="address.postalCode" className="text-gray-700">Postal Code</Label>
          <Input
            type="text"
            id="address.postalCode"
            name="address.postalCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address.postalCode}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.address?.postalCode && formik.errors.address?.postalCode && (
            <p className="text-red-500 text-sm">{formik.errors.address.postalCode}</p>
          )}
        </div> */}

        {/* <div>
          <Label htmlFor="address.country" className="text-gray-700">Country</Label>
          <Input
            type="text"
            id="address.country"
            name="address.country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address.country}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.address?.country && formik.errors.address?.country && (
            <p className="text-red-500 text-sm">{formik.errors.address.country}</p>
          )}
        </div> */}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="address.coordinates.latitude" className="text-gray-700">Latitude</Label>
            <Input
              type="number"
              id="address.coordinates.latitude"
              name="address.coordinates.latitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address.coordinates.latitude}
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.address?.coordinates?.latitude && formik.errors.address?.coordinates?.latitude && (
              <p className="text-red-500 text-sm">{formik.errors.address.coordinates.latitude}</p>
            )}
          </div>

          <div>
            <Label htmlFor="address.coordinates.longitude" className="text-gray-700">Longitude</Label>
            <Input
              type="number"
              id="address.coordinates.longitude"
              name="address.coordinates.longitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address.coordinates.longitude}
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.address?.coordinates?.longitude && formik.errors.address?.coordinates?.longitude && (
              <p className="text-red-500 text-sm">{formik.errors.address.coordinates.longitude}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="contactNumber" className="text-gray-700">Contact Number</Label>
          <Input
            type="text"
            id="contactNumber"
            name="contactNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactNumber}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.contactNumber && formik.errors.contactNumber && (
            <p className="text-red-500 text-sm">{formik.errors.contactNumber}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="totalBeds" className="text-gray-700">Total Beds</Label>
          <Input
            type="number"
            id="totalBeds"
            name="totalBeds"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalBeds}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.totalBeds && formik.errors.totalBeds && (
            <p className="text-red-500 text-sm">{formik.errors.totalBeds}</p>
          )}
        </div>

        <div>
          <Label htmlFor="availableBeds" className="text-gray-700">Available Beds</Label>
          <Input
            type="number"
            id="availableBeds"
            name="availableBeds"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.availableBeds}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.availableBeds && formik.errors.availableBeds && (
            <p className="text-red-500 text-sm">{formik.errors.availableBeds}</p>
          )}
        </div>

        <div>
          <Label className="block text-gray-700 text-sm font-bold mb-2">Specializations</Label>
          <div className="flex flex-wrap gap-2">
            <label>
              <input
                type="checkbox"
                name="specializations"
                value="Cardiology"
                checked={formik.values.specializations.includes('Cardiology')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-2"
              />
              Cardiology
            </label>
            <label>
              <input
                type="checkbox"
                name="specializations"
                value="Oncology"
                checked={formik.values.specializations.includes('Oncology')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-2"
              />
              Oncology
            </label>
            {/* Add more specializations as needed */}
          </div>
          {formik.touched.specializations && formik.errors.specializations && (
            <p className="text-red-500 text-sm">{formik.errors.specializations}</p>
          )}
        </div>

        <div>
          <Label className="block text-gray-700 text-sm font-bold mb-2">Services</Label>
          <div className="flex flex-wrap gap-2">
            <label>
              <input
                type="checkbox"
                name="services"
                value="Emergency Services"
                checked={formik.values.services.includes('Emergency Services')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-2"
              />
              Emergency Services
            </label>
            <label>
              <input
                type="checkbox"
                name="services"
                value="Surgery"
                checked={formik.values.services.includes('Surgery')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-2"
              />
              Surgery
            </label>
            {/* Add more services as needed */}
          </div>
          {formik.touched.services && formik.errors.services && (
            <p className="text-red-500 text-sm">{formik.errors.services}</p>
          )}
        </div>

        <div>
          <Label htmlFor="rating" className="text-gray-700">Rating (0-5)</Label>
          <Input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rating}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.rating && formik.errors.rating && (
            <p className="text-red-500 text-sm">{formik.errors.rating}</p>
          )}
        </div>

        <div>
          <Label htmlFor="lastAvailabilityUpdate" className="text-gray-700">Last Availability Update</Label>
          <Input
            type="datetime-local"
            id="lastAvailabilityUpdate"
            name="lastAvailabilityUpdate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastAvailabilityUpdate}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.lastAvailabilityUpdate && formik.errors.lastAvailabilityUpdate && (
            <p className="text-red-500 text-sm">{formik.errors.lastAvailabilityUpdate}</p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add Hospital
      </Button>
    </form>
  );
};

export default HospitalForm;