"use client";
import RideForm from "@/components/form/auth/RideForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RidePage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer mx-auto"
            src="/ambulancelogo.png"
            alt="Ambulance Logo"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-semibold mt-4 text-gray-800">Ambulance Ride Request</h2>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md z-999">
          <RideForm />
        </div>
      </div>
    </div>
  );
};

export default RidePage;