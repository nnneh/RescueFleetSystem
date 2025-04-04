"use client";

// import { AmbulanceData } from "./dashboard-page";
import { XCircle, Car, User, Phone } from "lucide-react";

interface AmbulanceData {
    id: string;
    status: "Available" | "Booked" | "En_route" | "Unavailable";
    assignedIncidentId?: string;
    crew: string[];
    vehicleType: string;
    contactNumber?: string;
    
  }

interface AmbulanceSidebarProps {
  ambulance: AmbulanceData;
  isOpen: boolean;
  onClose: () => void;
  onDispatch?: (ambulanceId: string, incidentId: string) => void;
  incidentId?: string; // Optional: If the sidebar is opened from an incident context
}

const AmbulanceSidebar: React.FC<AmbulanceSidebarProps> = ({
  ambulance,
  isOpen,
  onClose,
  onDispatch,
  incidentId,
}) => {
  if (!isOpen || !ambulance) {
    return null;
  }

  return (
    <aside
      className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl transform translate-x-full transition-transform duration-300 ease-in-out z-50"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <Car className="mr-2 h-5 w-5 text-primary" />
            Ambulance Details
          </h2>
          <button onClick={onClose} aria-label="Close sidebar">
            <XCircle className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">ID: {ambulance.id}</h3>
        </div>

        <div className="mb-4">
          <p className="font-medium">Status: {ambulance.status}</p>
          {ambulance.assignedIncidentId && (
            <p className="text-sm text-gray-600">
              Assigned to Incident: {ambulance.assignedIncidentId}
            </p>
          )}
        </div>

        <div className="mb-4">
          <h4 className="text-md font-semibold mb-2">Crew:</h4>
          {ambulance.crew.map((member, index) => (
            <div key={index} className="flex items-center text-gray-700 mb-1">
              <User className="mr-2 h-4 w-4" />
              {member}
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="font-medium">Vehicle Type: {ambulance.vehicleType}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-md font-semibold mb-2">Contact:</h4>
          {ambulance.contactNumber && (
            <p className="flex items-center text-gray-700">
              <Phone className="mr-2 h-4 w-4" />
              {ambulance.contactNumber}
            </p>
          )}
        </div>

        {onDispatch && incidentId && ambulance.status === "Available" && (
          <button
            onClick={() => onDispatch(ambulance.id, incidentId)}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
          >
            Dispatch to Incident
          </button>
        )}

        {onDispatch && incidentId && ambulance.status !== "Available" && (
          <p className="text-yellow-600 mt-4">Ambulance is currently {ambulance.status.toLowerCase()}.</p>
        )}
      </div>
    </aside>
  );
};

export default AmbulanceSidebar;