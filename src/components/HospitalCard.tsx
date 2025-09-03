import React from "react";
import { MapPin, Phone, Clock, Star } from "lucide-react";

interface Hospital {
  id: string;
  name: string;
  address: string;
  phone?: string;
  rating: number;
  distanceKm: number;
  durationMinutes: number;
  vacancy: number;
  openNow: boolean;
  lat: number;
  lng: number;
}

interface HospitalCardProps {
  hospital: Hospital;
  onSelect: (hospital: Hospital) => void;
  isSelected: boolean;
}

export default function HospitalCard({
  hospital,
  onSelect,
  isSelected,
}: HospitalCardProps) {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => onSelect(hospital)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight">
          {hospital.name}
        </h3>
        <div className="flex items-center space-x-1 ml-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">{hospital.rating}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-600 leading-tight">
            {hospital.address}
          </span>
        </div>

        {hospital.phone && (
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{hospital.phone}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span
              className={`text-sm ${
                hospital.openNow ? "text-green-600" : "text-red-600"
              }`}
            >
              {hospital.openNow ? "Open Now" : "Closed"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">
              {hospital.distanceKm.toFixed(1)} km
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-teal-50 text-teal-700 font-medium">
              {hospital.durationMinutes} min
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-semibold">
              Vacancy: {hospital.vacancy}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(hospital);
              }}
              className="ml-2 text-xs px-2.5 py-1 rounded bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium hover:shadow-sm"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
