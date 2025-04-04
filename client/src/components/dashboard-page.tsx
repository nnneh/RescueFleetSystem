import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { Home, MapPin, Bell, Settings, LogOut } from "lucide-react";
import AmbulanceSidebar from "./ambulance-sidebar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Load the Map component dynamically (Client-Side only)
const Map = dynamic(() => import("./map"), { ssr: false });

// Define a type for ambulance data
interface AmbulanceData {
  id: string;
  latitude: number;
  longitude: number;
  status: "available" | "booked" | "en_route" | "unavailable";
  vehicleNumber?: string;
  driverName?: string;
}

// Define a type for the Map component props
interface MapProps {
  availableAmbulances: AmbulanceData[];
  bookedAmbulance: AmbulanceData | null; // Changed type here
  onBookAmbulance: (ambulanceId: string) => void;
  onCancelBooking: () => void;
}

export default function Dashboard() {
  const [ambulances, setAmbulances] = useState<AmbulanceData[]>([]);
  const [requests, setRequests] = useState<any[]>([]);
  const [selectedAmbulance, setSelectedAmbulance] = useState<AmbulanceData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch ambulances and requests on component mount
  useEffect(() => {
    fetch("/api/ambulances")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched ambulances:", data); // Debugging log
        setAmbulances(data || []); // Ensure it is always an array
      })
      .catch((error) => console.error("Error fetching ambulances:", error));

    fetch("/api/requests")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched requests:", data); // Debugging log
        setRequests(data || []); // Ensure it is always an array
      })
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  const handleAmbulanceClick = (ambulance: AmbulanceData) => {
    setSelectedAmbulance(ambulance);
    setSidebarOpen(true);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-20 bg-gray-900 text-white flex flex-col items-center py-5 space-y-4">
        <button onClick={() => (window.location.href = "/home")} className="p-2 hover:bg-gray-700 rounded">
          <Home size={24} />
        </button>
        <button onClick={() => (window.location.href = "/map")} className="p-2 hover:bg-gray-700 rounded">
          <MapPin size={24} />
        </button>
        <button onClick={() => (window.location.href = "/alerts")} className="p-2 hover:bg-gray-700 rounded">
          <Bell size={24} />
        </button>
        <button onClick={() => (window.location.href = "/settings")} className="p-2 hover:bg-gray-700 rounded">
          <Settings size={24} />
        </button>
        <button onClick={() => alert("Logging Out...")} className="p-2 hover:bg-red-700 rounded mt-auto">
          <LogOut size={24} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Ambulance Dashboard</h1>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Card>
            <CardContent>
              <h2 className="text-xl">Total Ambulances</h2>
              <p className="text-3xl font-bold">{ambulances.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl">Active Requests</h2>
              <p className="text-3xl font-bold">{requests.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl">Avg Response Time</h2>
              <p className="text-3xl font-bold">12 min</p>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-6 h-96">
          {ambulances.length > 0 ? (
            <Map
              availableAmbulances={ambulances}
              bookedAmbulance={null}
              onBookAmbulance={() => {}}
              onCancelBooking={() => {}}
            />
          ) : (
            <p className="text-gray-500">Loading map...</p>
          )}
        </div>

        {/* Analytics Chart */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Response Time Trends</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={[{ name: "Jan", time: 10 }, { name: "Feb", time: 12 }, { name: "Mar", time: 8 }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="time" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>

      {/* Ambulance Sidebar */}
      <AmbulanceSidebar ambulance={selectedAmbulance} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}