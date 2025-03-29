"use client";
// import About from "@/components/About";
// import Events from "@/components/Event"; // Consider renaming or repurposing
// import FeatureSection from "@/components/Feature";
// import ImageSlider from "@/components/ImageSlider"; // Consider renaming or repurposing
// import NavBar from "@/components/Navbar";
import { Calendar, Clock, LockKeyhole, PhoneCall, Car } from "lucide-react"; // More relevant icons
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

const PreLoader = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 `}
    >
      <div className="flex flex-col items-center gap-4 text-white">
        <div className="pre-load">RescueFleet</div>
      </div>
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <PreLoader />}
      {!loading && (
        <div className="min-h-screen max-w-full relatice bg-black bg-gra-50">
          {/* <NavBar /> */}
          <section
            className="bg-red-50 overflow-hidden text-white bg-[url('/ambulanceservice.png')] bg-center h-screen bg-no-repeat" // Updated background image
            style={{
              filter: "brightness(0.9) contrast(1.3)",
            }}
          >
            <div className="w-full h-screen absolute">
              <div className="container mx-auto px-4 flex items-center relative top-1/2">
                <div className="md:w-1/2 2xl:w-[60%] mb-8 md:mb-0 p-3 rounded-">
                  <h1 className="text-4xl 2xl:text-7xl md:text-5xl font-bold mb-4 text-red-400"> 
                    Efficient Rescue Vehicle Dispatch at Your Command
                  </h1>
                  <p className=" 2xl:text-5xl text-lg md:text-xl mb-6 text-black">
                    RescueFleet revolutionizes how rescue services are managed,
                    providing a seamless experience for dispatchers and those requiring assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      href={"/login"}
                      className="bg-red-500 2xl:text-3xl border bg-wh border-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-400 transition" 
                    >
                      Login
                    </Link>
                    <Link
                      href={"/register"}
                      className="bg-transparent  2xl:text-3xl border bg-wh border-red-500 text-red-500 font-semibold py-3 px-6 rounded-lg hover:text-white transition" 
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <About />
          <Events /> {/* Consider renaming this component for relevance */}
          {/* <ImageSlider /> {/* Consider renaming this component for relevance */}
          {/* <FeatureSection /> */} 

          <section id="contact" className="bg-black pb-15">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-[60%] mb-8 md:mb-0">
                  <h2 className="text-5xl font-bold mb-4 text-red-500"> 
                    Experience Rapid Response and Reliable Rescue Services
                  </h2>
                  <p className="text-2xl mb-6 italic px-10 text-gray-700">
                    RescueFleet transforms how rescue services are requested,
                    dispatched, and managed. With our intuitive interface and
                    powerful features, you'll ensure timely help arrives when it's
                    needed most.
                  </p>
                  <ul className="space-y-3 text-2xl text-white">
                    <li className="flex items-center gap-1">
                      <div className="flex h-4 w-4 rounded-full bg-red-500 justify-center items-center"> 
                        <TiTick size={12} className="text-white" />
                      </div>
                      <span>Quickly request a rescue vehicle in emergency situations</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="flex h-4 w-4 rounded-full bg-red-500 justify-center items-center"> 
                        <TiTick size={12} className="text-white" />
                      </div>
                      <span>Track the location of rescue vehicles in real-time</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <div className="flex h-4 w-4 rounded-full bg-red-500 justify-center items-center"> 
                        <TiTick size={12} className="text-white" />
                      </div>
                      <span>Efficiently manage rescue fleet and dispatch operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-red-500 text-white"> 
            <div className="container mx-auto px-4 py-4">
              <div className="border-t border-red-500 text-center text-sm pt-2"> 
                <p>© {new Date().getFullYear()} RescueFleet System. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Home;




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
