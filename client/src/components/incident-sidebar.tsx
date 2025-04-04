// // incident-sidebar.tsx
// "use client";

// import { IncidentData, AmbulanceData } from "@/lib/types";
// import { XCircle, AlertTriangle, MapPin, Clock, Car } from "lucide-react";
// import { useState } from "react";

// interface IncidentSidebarProps {
//   incident: IncidentData;
//   isOpen: boolean;
//   onClose: () => void;
//   ambulances?: AmbulanceData[]; // Optional: List of available ambulances for assignment
//   onAssignAmbulance?: (ambulanceId: string, incidentId: string) => void;
// }

// const IncidentSidebar: React.FC<IncidentSidebarProps> = ({
//   incident,
//   isOpen,
//   onClose,
//   ambulances,
//   onAssignAmbulance,
// }) => {
//   if (!isOpen || !incident) {
//     return null;
//   }

//   const [selectedAmbulanceId, setSelectedAmbulanceId] = useState<string | null>(null);

//   const handleAssignClick = () => {
//     if (selectedAmbulanceId && onAssignAmbulance) {
//       onAssignAmbulance(selectedAmbulanceId, incident.id);
//     }
//   };

//   return (
//     <aside
//       className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl transform translate-x-full transition-transform duration-300 ease-in-out z-50"
//       style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
//     >
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold flex items-center">
//             <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
//             Incident Details
//           </h2>
//           <button onClick={onClose} aria-label="Close sidebar">
//             <XCircle className="h-6 w-6 text-gray-500 hover:text-gray-700" />
//           </button>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-lg font-medium">ID: {incident.id}</h3>
//         </div>

//         <div className="mb-4">
//           <p className="font-medium">Type: {incident.type}</p>
//           <p className="text-sm text-gray-600">Priority: {incident.priority}</p>
//           <p className="text-sm text-gray-600">Status: {incident.status}</p>
//         </div>

//         <div className="mb-4">
//           <h4 className="text-md font-semibold mb-2 flex items-center">
//             <MapPin className="mr-2 h-4 w-4 text-gray-700" />
//             Location:
//           </h4>
//           <p className="text-gray-700">
//             Latitude: {incident.location.latitude}
//           </p>
//           <p className="text-gray-700">
//             Longitude: {incident.location.longitude}
//           </p>
//         </div>

//         <div className="mb-4">
//           <h4 className="text-md font-semibold mb-2 flex items-center">
//             <Clock className="mr-2 h-4 w-4 text-gray-700" />
//             Time:
//           </h4>
//           <p className="text-gray-700">
//             Reported: {new Date(incident.reportedTime).toLocaleString()}
//           </p>
//         </div>

//         <div className="mb-4">
//           <p className="font-medium">Description:</p>
//           <p className="text-gray-700">{incident.description}</p>
//         </div>

//         {incident.assignedAmbulanceId && (
//           <div className="mb-4">
//             <h4 className="text-md font-semibold mb-2 flex items-center">
//               <Car className="mr-2 h-4 w-4 text-blue-500" />
//               Assigned Ambulance:
//             </h4>
//             <p className="text-blue-500">{incident.assignedAmbulanceId}</p>
//           </div>
//         )}

//         {ambulances && onAssignAmbulance && incident.status !== "Completed" && (
//           <div className="mb-4">
//             <h4 className="text-md font-semibold mb-2">Assign Ambulance:</h4>
//             {ambulances.length > 0 ? (
//               <>
//                 <select
//                   value={selectedAmbulanceId || ""}
//                   onChange={(e) => setSelectedAmbulanceId(e.target.value)}
//                   className="w-full p-2 border rounded-md mb-2"
//                 >
//                   <option value="" disabled>Select Ambulance</option>
//                   {ambulances.map((ambulance) => (
//                     <option key={ambulance.id} value={ambulance.id}>
//                       {ambulance.id} - {ambulance.status}
//                     </option>
//                   ))}
//                 </select>
//                 <button
//                   onClick={handleAssignClick}
//                   disabled={!selectedAmbulanceId}
//                   className={`w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 ${
//                     !selectedAmbulanceId ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   Assign Selected Ambulance
//                 </button>
//               </>
//             ) : (
//               <p className="text-yellow-600">No available ambulances.</p>
//             )}
//           </div>
//         )}

//         {incident.status === "Completed" && (
//           <p className="text-green-600 mt-4">This incident has been completed.</p>
//         )}
//       </div>
//     </aside>
//   );
// };

// export default IncidentSidebar;