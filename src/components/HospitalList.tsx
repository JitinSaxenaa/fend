import React, { useState } from "react";
import { Search } from "lucide-react";
import HospitalCard from "./HospitalCard";

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

interface HospitalListProps {
  hospitals: Hospital[];
  onHospitalSelect: (hospital: Hospital) => void;
  selectedHospital: Hospital | null;
}

export default function HospitalList({
  hospitals,
  onHospitalSelect,
  selectedHospital,
}: HospitalListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-4 border-b bg-white">
        {/* <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Nearby Hospitals ({filteredHospitals.length})
        </h2> */}

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => {
            const total = filteredHospitals.length;
            // Opacity decreases slightly as the index increases (min 0.4)
            const opacity = Math.max(
              1 - (index / Math.max(total - 1, 1)) * 0.6,
              0.4
            );
            const gradient =
              "linear-gradient(90deg, rgba(236,253,245,1) 0%, rgba(239,246,255,1) 100%)";
            return (
              <div
                key={hospital.id}
                style={{
                  opacity,
                  background: gradient,
                  border:
                    index === 0 ? "2px solid rgba(0, 0, 0, 0.9)" : undefined,
                  boxShadow:
                    index === 0 ? "0 0 8px rgba(0, 0, 0, 0.25)" : undefined,
                }}
                className="rounded-xl"
              >
                <HospitalCard
                  hospital={hospital}
                  onSelect={onHospitalSelect}
                  isSelected={selectedHospital?.id === hospital.id}
                />
              </div>
            );
          })
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No hospitals found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
