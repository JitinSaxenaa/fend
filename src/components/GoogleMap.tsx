import React, { useEffect, useRef, useState } from "react";

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

interface GoogleMapProps {
  center: { lat: number; lng: number };
  hospitals: Hospital[];
  selectedHospital: Hospital | null;
  onHospitalSelect: (hospital: Hospital) => void;
  onMapClick?: (location: { lat: number; lng: number }) => void;
  isSelectingLocation: boolean;
  userLocation?: { lat: number; lng: number } | null;
}

export default function GoogleMap({
  center,
  hospitals,
  selectedHospital,
  onHospitalSelect,
  onMapClick,
  isSelectingLocation,
  userLocation,
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const userLocationMarkerRef = useRef<google.maps.Marker | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom: 13,
      styles: [
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi.medical",
          stylers: [{ visibility: "simplified" }],
        },
      ],
    });

    mapInstanceRef.current = map;
    infoWindowRef.current = new google.maps.InfoWindow();

    // Add click listener for location selection
    if (isSelectingLocation) {
      map.addListener("click", (e: google.maps.MapMouseEvent) => {
        if (e.latLng && onMapClick) {
          onMapClick({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          });
        }
      });
    }

    if (userLocation) {
      const userMarker = new google.maps.Marker({
        position: userLocation,
        map: mapInstanceRef.current,
        title: "Your Location",
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#3B82F6"/>
                <circle cx="16" cy="16" r="8" fill="white"/>
                <circle cx="16" cy="16" r="4" fill="#3B82F6"/>
              </svg>
            `),
          scaledSize: new google.maps.Size(32, 32),
        },
        zIndex: 1000, // Ensure user location is on top
      });

      // Add click listener to show user location info
      userMarker.addListener("click", () => {
        if (infoWindowRef.current) {
          const content = `
              <div class="p-3">
                <h3 class="font-semibold text-blue-600 mb-2">📍 Your Current Location</h3>
                <p class="text-sm text-gray-600 mb-1">Latitude: ${userLocation.lat.toFixed(
                  6
                )}</p>
                <p class="text-sm text-gray-600 mb-1">Longitude: ${userLocation.lng.toFixed(
                  6
                )}</p>
                <p class="text-sm text-gray-500 italic">This is where you are located</p>
              </div>
            `;
          infoWindowRef.current.setContent(content);
          infoWindowRef.current.open(mapInstanceRef.current, userMarker);
        }
      });

      userLocationMarkerRef.current = userMarker;
    }

    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
      if (userLocationMarkerRef.current) {
        userLocationMarkerRef.current.setMap(null);
        userLocationMarkerRef.current = null;
      }
    };
  }, [center, isSelectingLocation, onMapClick]);

  // Update map center
  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setCenter(center);
    }
  }, [center]);

  // Update user location marker
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    console.log("user location marker ====>>> ", userLocation);

    // Clear existing user location marker
    // if (userLocationMarkerRef.current) {
    //   userLocationMarkerRef.current.setMap(null);
    //   userLocationMarkerRef.current = null;
    // }

    // Add user location marker if available
    if (userLocation) {
      const userMarker = new google.maps.Marker({
        position: userLocation,
        map: mapInstanceRef.current,
        title: "Your Location",
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#3B82F6"/>
              <circle cx="16" cy="16" r="8" fill="white"/>
              <circle cx="16" cy="16" r="4" fill="#3B82F6"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(32, 32),
        },
        zIndex: 1000, // Ensure user location is on top
      });

      // Add click listener to show user location info
      userMarker.addListener("click", () => {
        if (infoWindowRef.current) {
          const content = `
            <div class="p-3">
              <h3 class="font-semibold text-blue-600 mb-2">📍 Your Current Location</h3>
              <p class="text-sm text-gray-600 mb-1">Latitude: ${userLocation.lat.toFixed(
                6
              )}</p>
              <p class="text-sm text-gray-600 mb-1">Longitude: ${userLocation.lng.toFixed(
                6
              )}</p>
              <p class="text-sm text-gray-500 italic">This is where you are located</p>
            </div>
          `;
          infoWindowRef.current.setContent(content);
          infoWindowRef.current.open(mapInstanceRef.current, userMarker);
        }
      });

      userLocationMarkerRef.current = userMarker;
    }
  }, [userLocation]);

  // Update hospital markers
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // Add new markers
    hospitals.forEach((hospital) => {
      const marker = new google.maps.Marker({
        position: { lat: hospital.lat, lng: hospital.lng },
        map: mapInstanceRef.current,
        title: hospital.name,
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#EF4444"/>
              <path d="M16 8V24M8 16H24" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(32, 32),
        },
      });

      marker.addListener("click", () => {
        onHospitalSelect(hospital);

        if (infoWindowRef.current) {
          const content = `
            <div class="p-3">
              <h3 class="font-semibold text-gray-900 mb-2">${hospital.name}</h3>
              <p class="text-sm text-gray-600 mb-1">${hospital.address}</p>
              ${
                hospital.phone
                  ? `<p class="text-sm text-gray-600 mb-1">${hospital.phone}</p>`
                  : ""
              }
              <div class="flex items-center justify-between">
                <span class="text-sm ${
                  hospital.openNow ? "text-green-600" : "text-red-600"
                }">
                  ${hospital.openNow ? "Open Now" : "Closed"}
                </span>
                <span class="text-sm text-blue-600 font-medium">${hospital.distanceKm.toFixed(
                  1
                )} km • ${hospital.durationMinutes} min • Vac ${
            hospital.vacancy
          }</span>
              </div>
            </div>
          `;

          infoWindowRef.current.setContent(content);
          infoWindowRef.current.open(mapInstanceRef.current, marker);
        }
      });

      markersRef.current.push(marker);
    });
  }, [hospitals, onHospitalSelect]);

  // Handle selected hospital highlighting
  useEffect(() => {
    if (selectedHospital && mapInstanceRef.current) {
      const marker = markersRef.current.find((marker) => {
        const position = marker.getPosition();
        return (
          position &&
          Math.abs(position.lat() - selectedHospital.lat) < 0.0001 &&
          Math.abs(position.lng() - selectedHospital.lng) < 0.0001
        );
      });

      if (marker && infoWindowRef.current) {
        const content = `
          <div class="p-3">
            <h3 class="font-semibold text-gray-900 mb-2">${
              selectedHospital.name
            }</h3>
            <p class="text-sm text-gray-600 mb-1">${
              selectedHospital.address
            }</p>
            ${
              selectedHospital.phone
                ? `<p class="text-sm text-gray-600 mb-1">${selectedHospital.phone}</p>`
                : ""
            }
            <div class="flex items-center justify-between">
              <span class="text-sm ${
                selectedHospital.openNow ? "text-green-600" : "text-red-600"
              }">
                ${selectedHospital.openNow ? "Open Now" : "Closed"}
              </span>
              <span class="text-sm text-blue-600 font-medium">${selectedHospital.distanceKm.toFixed(
                1
              )} km • ${selectedHospital.durationMinutes} min • Vac ${
          selectedHospital.vacancy
        }</span>
            </div>
          </div>
        `;

        infoWindowRef.current.setContent(content);
        infoWindowRef.current.open(mapInstanceRef.current, marker);

        // Center map on selected hospital
        mapInstanceRef.current.panTo({
          lat: selectedHospital.lat,
          lng: selectedHospital.lng,
        });
      }
    }
  }, [selectedHospital]);

  return (
    <div className="w-full h-full relative">
      <div
        ref={mapRef}
        className={`w-full h-full rounded-lg ${
          isSelectingLocation ? "cursor-crosshair" : ""
        }`}
      />

      {isSelectingLocation && (
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium">
            Click on the map to select your location
          </p>
        </div>
      )}
    </div>
  );
}
