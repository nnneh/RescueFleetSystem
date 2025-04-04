"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import type { AmbulanceData, HospitalData, IncidentData } from "@/lib/types"; // Define your data types
// import { ambulanceData, hospitalData, incidentData } from "@/lib/data"; // Replace with API calls
import AmbulanceSidebar from "@/components/ambulance-sidebar"; // Create a new sidebar component
// import IncidentSidebar from "@/components/incident-sidebar"; // Create a new sidebar component

import { MapPin, Car, Hospital } from "lucide-react"; // Use relevant icons
// import Navbar from "./Navbar"; // Keep the Navbar if needed

const MapWithNoSSR = dynamic(() => import("@/components/map"), {
  loading: () => (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center bg-slate-100">
      <div className="flex flex-col items-center gap-2 text-center">
        <MapPin className="h-10 w-10 animate-pulse text-primary" />
        <p className="text-lg font-medium">Loading map...</p>
      </div>
    </div>
  ),
  ssr: false,
});

interface AmbulanceData {
    id: string;
    status: "Available" | "Booked" | "En_route" | "Unavailable";
    assignedIncidentId?: string;
    crew: string[];
    vehicleType: string;
    contactNumber?: string;
    
  }

  interface HospitalData {
    _id: string; // Or ObjectId if you have a specific type for MongoDB ObjectId
    name: string;
    address: {
      street?: string; // You can add more specific address fields if needed
      city?: string;
      state?: string;
      zipCode?: string;
      country?: string;
    };
    contactNumber: string;
    email: string;
    totalBeds: number;
    availableBeds: number;
    specializations: string[];
    services: string[];
    rating: number;
    lastAvailabilityUpdate: string; // Or Date if you prefer to work with Date objects
   
  }

export default function AmbulanceMap() {
  const [selectedAmbulance, setSelectedAmbulance] = useState<AmbulanceData | null>(null);
  const [selectedHospital, setSelectedHospital] = useState<HospitalData | null>(null);
//   const [selectedIncident, setSelectedIncident] = useState<IncidentData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ambulances, setAmbulances] = useState<AmbulanceData[]>([]); // Fetch from API
  const [hospitals, setHospitals] = useState<HospitalData[]>([]); // Fetch from API
//   const [incidents, setIncidents] = useState<IncidentData[]>([]); // Fetch from API
  const [filteredAmbulances, setFilteredAmbulances] = useState<AmbulanceData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  useEffect(() => {
    // Fetch ambulance, hospital, and incident data from your backend API
    // Example using fetch:
    fetch('/api/ambulances')
      .then(res => res.json())
      .then(data => setAmbulances(data));

    fetch('/api/hospitals')
      .then(res => res.json())
      .then(data => setHospitals(data));

    fetch('/api/incidents')
      .then(res => res.json())
    //   .then(data => setIncidents(data));

    // Set up real-time updates (e.g., using WebSockets)
    // const socket = new WebSocket('ws://your-backend.com/ws');
    // socket.onmessage = (event) => {
    //   const message = JSON.parse(event.data);
    //   // Update ambulance locations or incident statuses based on the message
    // };

  }, []);

  useEffect(() => {
    // Filter ambulances based on search query and status
    const filtered = ambulances.filter((ambulance) => {
      const searchMatch = ambulance.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ambulance.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ambulance.crew.join(', ').toLowerCase().includes(searchQuery.toLowerCase());
      const statusMatch = !filterStatus || ambulance.status === filterStatus;
      return searchMatch && statusMatch;
    });
    setFilteredAmbulances(filtered);
  }, [searchQuery, filterStatus, ambulances]);

  const handleEntitySelect = (entity: AmbulanceData | HospitalData , type: 'ambulance' | 'hospital' | 'incident') => {
    setSidebarOpen(true);
    setSelectedAmbulance(type === 'ambulance' ? entity as AmbulanceData : null);
    setSelectedHospital(type === 'hospital' ? entity as HospitalData : null);
    // setSelectedIncident(type === 'incident' ? entity as IncidentData : null);
  };

  // Example function for dispatching an ambulance
  const handleDispatchAmbulance = (ambulanceId: string, incidentId: string) => {
    // Call your backend API to assign the ambulance to the incident
    console.log(`Dispatching ambulance ${ambulanceId} to incident ${incidentId}`);
    // Update the local state as well
    setAmbulances(prevAmbulances =>
        prevAmbulances.map(amb =>
          amb.id === ambulanceId ? { ...amb, status: 'En_route', assignedIncidentId: incidentId } : amb
        )
      );
    // setAmbulances(prevAmbulances =>
    //   prevAmbulances.map(amb =>
    //     amb.id === ambulanceId ? { ...amb, status: 'En Route', assignedIncidentId: incidentId } : amb
    //   )
    // );
    // setIncidents(prevIncidents =>
    //   prevIncidents.map(inc =>
    //     inc.id === incidentId ? { ...inc, assignedAmbulanceId: ambulanceId, status: 'Dispatched' } : inc
    //   )
    );
    setSidebarOpen(false);
  };

  const handleFilterChange = (status: string | null) => {
    setFilterStatus(status);
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="relative flex flex-1 overflow-hidden">
        <MapWithNoSSR
          ambulances={filteredAmbulances}
          hospitals={hospitals}
        //   incidents={incidents}
          onEntitySelect={handleEntitySelect}
        />
        {selectedAmbulance && (
          <AmbulanceSidebar
            ambulance={selectedAmbulance}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onDispatch={handleDispatchAmbulance}
          />
        )}
        {/* {selectedIncident && (
          <IncidentSidebar
            incident={selectedIncident}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            ambulances={ambulances.filter(amb => amb.status === 'Available')} // Pass available ambulances
            onAssignAmbulance={handleDispatchAmbulance}
          />
        )} */}
        {/* You might create a HospitalSidebar as well */}
      </div>
    </div>
  );
}