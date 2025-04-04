'use client';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import React, { useEffect, useState, useRef, useCallback } from "react";
// import Avatar from './avatar';
// import { DatePickerWithRange } from './datePicker';
// import type { EventData, VenueData } from "@/lib/types"; // Assuming you have types
import { Button } from "@/components/ui/button";
import { Calendar, Check, Clock, MapPin, MapPinIcon, Music, Search, Users, X } from "lucide-react";
// import { formatDate } from "@/lib/utils";
import { Input } from "./ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dailog";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter

// Define types for Ambulance data and Booked Ambulance data
interface AmbulanceData {
    id: string;
    latitude: number;
    longitude: number;
    status: 'available' | 'booked' | 'en_route' | 'unavailable';
    vehicleNumber?: string;
    driverName?: string;
    // Add other relevant properties
}

interface BookedAmbulanceData extends AmbulanceData {
    hospitalLatitude: number;
    hospitalLongitude: number;
    hospitalAddress?: string;
    estimatedArrivalTime?: string;
}

interface MapProps {
    availableAmbulances: AmbulanceData[];
    bookedAmbulance: BookedAmbulanceData | null;
    onBookAmbulance: (ambulanceId: string) => void;
    onCancelBooking: () => void;
}

const createAmbulanceIcon = (status: AmbulanceData['status']) => {
    let iconUrl = '/ambulance-available.svg'; // Default
    if (status === 'booked' || status === 'en_route') {
        iconUrl = '/ambulance-booked.svg';
    } else if (status === 'unavailable') {
        iconUrl = '/ambulance-unavailable.svg';
    }
    return new L.Icon({
        iconUrl: iconUrl,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
        className: `ambulance-marker ambulance-${status}`,
    });
};

interface LocationMarkerProps {
    position: { lat: number; lng: number } | null;
    setPosition: React.Dispatch<React.SetStateAction<{ lat: number; lng: number } | null>>;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    hospitalAddress: string;
}

const createHospitalIcon = () => {
    return new L.Icon({
        iconUrl: "/hospital-marker.svg", // Replace with your hospital marker icon path
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
        className: "hospital-marker",
    });
};

function LocationMarker({ position, setPosition, setIsDialogOpen, hospitalAddress }: LocationMarkerProps) {
    const map = useMapEvents({
        click(e) {
            if (!position?.lat || !position?.lng) {
                setPosition(e.latlng);
            }
        },
    });

    const handleMarkerDragEnd = (event: any) => {
        console.log(event);
        setPosition(event.target._latlng);
    };

    return position === null ? null : (
        <Marker
            eventHandlers={{
                dragend: handleMarkerDragEnd,
            }}
            draggable={true}
            position={position}
            icon={createHospitalIcon()} // Use the hospital icon
        >
            <Popup>{hospitalAddress}</Popup>
        </Marker>
    );
}

export default function CustomMap({ availableAmbulances, bookedAmbulance, onBookAmbulance, onCancelBooking }: MapProps) {
    const [mapCenter, setMapCenter] = useState<[number, number]>([27.700769, 85.300140]);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) {
            return;
        }
        delete (L.Icon.Default.prototype as any)._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "/marker-icon-2x.png",
            iconUrl: "/marker-icon.png",
            shadowUrl: "/marker-shadow.png",
        });
    }, [isClient]);

    const handleBookAmbulanceClick = (ambulanceId: string) => {
        onBookAmbulance(ambulanceId);
    };

    const handleCancelBookingClick = () => {
        onCancelBooking();
    };

    // Function to calculate distance between two coordinates (in km)
    const calculateDistance = useCallback((lat1: number, lon1: number, lat2: number, lon2: number): number => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }, []);

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
    };

    return (
        <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%', zIndex: 899 }} ref={mapRef}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Display available ambulances */}
            {availableAmbulances.map((ambulance) => (
                <Marker
                    key={ambulance.id}
                    position={[ambulance.latitude, ambulance.longitude]}
                    icon={createAmbulanceIcon(ambulance.status)}
                >
                    <Popup>
                        <div>
                            <h3>Ambulance {ambulance.vehicleNumber || ambulance.id}</h3>
                            <p>Status: {ambulance.status}</p>
                            {ambulance.driverName && <p>Driver: {ambulance.driverName}</p>}
                            <Button onClick={() => handleBookAmbulanceClick(ambulance.id)}>Book Ambulance</Button>
                        </div>
                    </Popup>
                </Marker>
            ))}

            {/* Display booked ambulance details and location */}
            {bookedAmbulance && (
                <Marker
                    key={bookedAmbulance.id}
                    position={[bookedAmbulance.latitude, bookedAmbulance.longitude]}
                    icon={createAmbulanceIcon(bookedAmbulance.status)}
                >
                    <Popup>
                        <div>
                            <h3>Ambulance {bookedAmbulance.vehicleNumber || bookedAmbulance.id}</h3>
                            <p>Status: {bookedAmbulance.status}</p>
                            {bookedAmbulance.driverName && <p>Driver: {bookedAmbulance.driverName}</p>}
                            {bookedAmbulance.hospitalAddress && <p>Hospital: {bookedAmbulance.hospitalAddress}</p>}
                            {bookedAmbulance.estimatedArrivalTime && <p>ETA: {bookedAmbulance.estimatedArrivalTime}</p>}

                            {bookedAmbulance.hospitalLatitude && bookedAmbulance.hospitalLongitude && (
                                <p>
                                    Distance to Hospital: {calculateDistance(
                                        bookedAmbulance.latitude,
                                        bookedAmbulance.longitude,
                                        bookedAmbulance.hospitalLatitude,
                                        bookedAmbulance.hospitalLongitude
                                    ).toFixed(2)} km
                                </p>
                            )}

                            <Button onClick={handleCancelBookingClick}>Cancel Booking</Button>
                            {/* Add more details or actions as needed */}
                        </div>
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
}