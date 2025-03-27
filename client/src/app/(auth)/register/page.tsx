"use client";
import RegisterForm from "@/components/form/auth/RegisterForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="min-h-[85vh] w-[85%] flex rounded-2xl overflow-hidden shadow-xl bg-white">
        
        {/* Left Side - Branding */}
        <div className="h-[85vh] w-1/2 relative text-center flex items-center justify-center">
          <img
            className="object-cover absolute w-full h-full opacity-80"
            src="/emergencylogo.png"
            alt="Emergency Logo"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="relative z-20 text-white px-6">
            <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
              Saving Lives, <br /> Every Mile of the Way
            </h1>
            <p className="mt-4 text-lg font-medium max-w-lg mx-auto drop-shadow-md">
              Ensure seamless emergency care and efficient ambulance management.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 bg-white flex flex-col justify-center px-12">
          <div className="text-center mb-6">
            <Image
              onClick={() => router.push("/")}
              className="cursor-pointer mx-auto"
              src="/ambulancelogo.png"
              alt="Ambulance Logo"
              width={100}
              height={100}
            />
            <h1 className="text-3xl font-bold text-red-600 mt-3">
              Create an Account
            </h1>
            <p className="text-gray-500 text-sm">
              Sign up and get started today!
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;




// "use client";
// import RegisterForm from "@/components/form/auth/RegisterForm";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const RegisterPage = () => {
//   const router = useRouter();
//   return (
//     <div className=" bg-black min-h-screen min-w-full flex justify-center items-center">
//       <div className="min-h-[90vh] w-[80%] flex rounded-lg overflow-hidden shadow-black">
//         <div className="h-[90vh] w-1/2 relative text-center  transition-transform overflow-hidden bg-gradient-to-t from-blue-900/70 to-transparent flex items-center justify-center">
//           <img
//             className="object-cover absolute w-full h-full"
//             src="/emergencylogo.png"
//             alt="emergencylogo photo"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
//           <div className="z-20">
//             <div className=" mb-10 my-auto text-center text-4xl font-bold">
//               <h1>Saving Lives, Every Mile of the Way</h1>
//             </div>
//             <p className="mt-4 text-lg text-center">
//               Ensure seamless emergency care and efficient ambulance management.
//             </p>
//           </div>
//         </div>
//         <div className=" w-1/2 bg-gray-50 ">
//           <div className="w-full h-full flex px-10 flex-col justify-center space-y-2">
//             <div className="space-y-2 flex flex-col items-center">
//               <Image
//                 onClick={() => router.push("/")}
//                 className="cursor-pointer"
//                 src="/ambulancelogo.png"
//                 alt="logo"
//                 width={150} // Increased width
//                 height={150} // Increased height
//               />
//               <h1 className="text-2xl font-bold text-center text-red-600">
//                 Create an account
//               </h1>
//               <p className="text-muted-foreground text-center text-sm">
//                 Create your account and get started.
//               </p>
//             </div>
//             <RegisterForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;