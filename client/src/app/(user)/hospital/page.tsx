"use client";
import HospitalForm from "@/components/form/auth/HospitalForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HospitalPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer mx-auto"
            src="/hospital logo.jpg"
            alt="Hospital Logo"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-semibold mt-4 text-gray-800">Hospital</h2>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <HospitalForm />
        </div>
      </div>
    </div>
  );
};

export default HospitalPage;