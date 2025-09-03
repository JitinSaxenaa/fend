import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./components/Navbar";
import HospitalList from "./components/HospitalList";
import GoogleMap from "./components/GoogleMap";
// import { useState as useReactState } from "react";
import { X } from "lucide-react";

type Hospital = {
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
};

const DEFAULT_CENTER = { lat: 28.6139, lng: 77.209 }; // New Delhi

const HospitalFinderPage: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDokdxEmJXMkk_Ib6abfzcagVHXlmCdUFs",
    libraries: ["places"],
  });

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // ✅ Get raw strings
  const locationRaw = query.get("location"); // "28.61,77.20"
  const symptomsRaw = query.get("symptoms"); // "ortho"

  // ✅ Parse coords safely
  const parseCoords = (
    raw: string | null
  ): { lat: number; lng: number } | null => {
    if (!raw) return null;
    const [latStr, lngStr] = raw.split(",");
    const lat = Number(latStr);
    const lng = Number(lngStr);
    if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
    return { lat, lng };
  };

  const coords = parseCoords(locationRaw);
  const symptoms = symptomsRaw?.trim() || "";
  const selectOnMap = query.get("selectOnMap") === "true";

  const [center, setCenter] = useState(DEFAULT_CENTER);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(
    null
  );
  const [isSelectingLocation, setIsSelectingLocation] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [payName, setPayName] = useState("");
  const [payPhone, setPayPhone] = useState("");
  const [payCard, setPayCard] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [mapSelectionMode, setMapSelectionMode] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const detectUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log("📍 User detected at:", coords);

          setUserLocation(coords);
          setCenter(coords);

          // Update URL with detected coordinates
          const newUrl = `/hospitals?location=${coords.lat},${coords.lng}${
            symptomsQuery ? `&symptoms=${symptomsQuery}` : ""
          }`;

          window.history.pushState({}, "", newUrl);
        },
        (error) => {
          console.error("❌ Error detecting location:", error);
          alert("Unable to detect your location. Please allow access.");
        },
        {
          enableHighAccuracy: true, // ✅ makes GPS more precise
          timeout: 10000, // stop waiting after 10s
          maximumAge: 0, // don't use cached location
        }
      );
    } else {
      alert("Geolocation is not supported in your browser.");
    }
  };

  // Handle map selection mode
  useEffect(() => {
    if (selectOnMap) {
      setMapSelectionMode(true);
      setIsSelectingLocation(true);
    }
  }, [selectOnMap]);

  // Use dummy /search response shape provided
  useEffect(() => {
    if (!isLoaded) return;

    const mockSearch = async (
      userCoords: [number, number],
      symptoms: string | null
    ) => {
      // All available hospitals
      const allHospitals: Array<{
        id: string;
        cords: [number, number];
        name: string;
        departments: string[];
        vacancy: number;
        distance: number;
        duration: number;
      }> = [
        {
          id: "35f44f344f4gsdkdfg4t4",
          cords: [56.46464, 76.343434] as [number, number],
          name: "xyz hospital",
          departments: ["ortho", "ent"],
          vacancy: 4,
          distance: 1600,
          duration: 600,
        },
        {
          id: "35f44f344f4gsdkdfg4t5",
          cords: [56.45454, 76.333333] as [number, number],
          name: "abc care center",
          departments: ["ortho", "ent"],
          vacancy: 4,
          distance: 5000,
          duration: 1200,
        },
        {
          id: "h3",
          cords: [56.46001, 76.320001] as [number, number],
          name: "Sunrise Multispeciality",
          departments: ["cardiology", "ortho", "er"],
          vacancy: 7,
          distance: 2200,
          duration: 540,
        },
        {
          id: "h4",
          cords: [56.4702, 76.3502] as [number, number],
          name: "City Health Hub",
          departments: ["ent", "gastro"],
          vacancy: 2,
          distance: 3400,
          duration: 780,
        },
        {
          id: "h5",
          cords: [56.4681, 76.3304] as [number, number],
          name: "St. Mary Clinic",
          departments: ["neuro", "ortho"],
          vacancy: 5,
          distance: 4100,
          duration: 840,
        },
        {
          id: "h6",
          cords: [56.4622, 76.3456] as [number, number],
          name: "Green Valley Hospital",
          departments: ["pediatrics", "er"],
          vacancy: 3,
          distance: 2800,
          duration: 660,
        },
        {
          id: "h7",
          cords: [56.4577, 76.3477] as [number, number],
          name: "Metro Care Center",
          departments: ["derma", "ortho"],
          vacancy: 6,
          distance: 1900,
          duration: 520,
        },
        {
          id: "h8",
          cords: [56.4525, 76.3388] as [number, number],
          name: "Riverbank Medical",
          departments: ["cardiology", "er"],
          vacancy: 1,
          distance: 6100,
          duration: 1300,
        },
        {
          id: "h9",
          cords: [56.4633, 76.3566] as [number, number],
          name: "Harmony Health",
          departments: ["opthalmology", "ent"],
          vacancy: 4,
          distance: 2600,
          duration: 700,
        },
        {
          id: "h10",
          cords: [56.4699, 76.3699] as [number, number],
          name: "Lakeside Hospital",
          departments: ["ortho", "gyno"],
          vacancy: 8,
          distance: 4800,
          duration: 1100,
        },
        {
          id: "h11",
          cords: [56.4555, 76.3655] as [number, number],
          name: "Apollo City Care",
          departments: ["er", "neuro"],
          vacancy: 2,
          distance: 5300,
          duration: 1180,
        },
        {
          id: "h12",
          cords: [56.4466, 76.3266] as [number, number],
          name: "Prime Health Point",
          departments: ["gastro", "derma"],
          vacancy: 3,
          distance: 3700,
          duration: 900,
        },
      ];

      // Filter hospitals based on symptoms if provided
      let filteredHospitals = allHospitals;
      if (symptoms && symptoms.trim() !== "") {
        const symptomLower = symptoms.toLowerCase();
        filteredHospitals = allHospitals.filter((hospital) =>
          hospital.departments.some(
            (dept) =>
              dept.toLowerCase().includes(symptomLower) ||
              symptomLower.includes(dept.toLowerCase())
          )
        );
      }

      return new Promise<{
        ok: boolean;
        error: string | null;
        data: {
          count: number;
          list: Array<{
            id: string;
            cords: [number, number];
            name: string;
            departments: string[];
            vacancy: number;
            distance: number;
            duration: number;
          }>;
        };
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              ok: true,
              error: null,
              data: {
                count: filteredHospitals.length,
                list: filteredHospitals,
              },
            }),
          300
        )
      );
    };

    const run = async () => {
      const coords = parseCoords(query.get("location"));
      const symptoms = query.get("symptoms")?.trim() || "";

      if (coords) {
        // If coords are in query string
        setCenter(coords);
        setUserLocation(coords);
      } else {
        // 🚀 Detect live location if not given in query
        detectUserLocation();
      }

      const body = {
        cords: [coords?.lat, coords?.lng],
        symptoms,
      };
      const result = await fetch(`http://15.206.26.11/api/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await result.json();

      console.log(data);

      if (result.ok) {
        const normalized: Hospital[] = data.list.map((item) => ({
          id: item.id,
          name: item.name,
          // address: item.departments.join(", "),
          // phone: undefined,
          // rating: 0,
          distanceKm: Number((item.distance / 1000).toFixed(1)),
          durationMinutes: Math.round(item.duration / 60),
          vacancy: item.vacancy,
          openNow: true,
          lat: item.cords[0],
          lng: item.cords[1],
        }));
        setHospitals(normalized);
        setSelectedHospital(normalized[0] || null);
      } else {
        setHospitals([]);
        setSelectedHospital(null);
      }
    };

    run();
  }, [isLoaded, locationRaw, symptoms]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <Navbar />
      <div className="pt-24 pb-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {mapSelectionMode
                  ? "Click on map to select location"
                  : `Hospitals near ${"you"}`}
              </h1>
              {mapSelectionMode ? (
                <p className="text-gray-600 mt-1">
                  <span className="font-medium text-blue-600">
                    Map Selection Mode:
                  </span>{" "}
                  Click anywhere on the map to search for hospitals in that area
                </p>
              ) : symptomsRaw ? (
                <p className="text-gray-600 mt-1">
                  Filtered by symptoms:{" "}
                  <span className="font-medium text-teal-700">
                    {symptomsRaw}
                  </span>
                </p>
              ) : null}
            </div>
            {mapSelectionMode && (
              <button
                onClick={() => {
                  setMapSelectionMode(false);
                  setIsSelectingLocation(false);
                  window.history.pushState({}, "", "/hospitals");
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Cancel Selection
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Hospital List */}
          <div className="lg:col-span-1">
            <div className="glassmorphism-card rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
              <div className="border-b border-gray-100 px-4 py-4 bg-white/80 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                  Nearby Hospitals ({hospitals.length})
                </h2>
              </div>
              <div className="h-[70vh]">
                <HospitalList
                  hospitals={hospitals}
                  selectedHospital={selectedHospital}
                  onHospitalSelect={(h) => {
                    setSelectedHospital(h);
                    // Clear payment fields
                    setPayName("");
                    setPayPhone("");
                    setPayCard("");
                    setPayAmount("");
                    setShowPayment(true);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-2">
            <div className="glassmorphism-card rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
              <div className="h-[70vh]">
                {isLoaded && (
                  <GoogleMap
                    center={center}
                    hospitals={hospitals}
                    selectedHospital={selectedHospital}
                    onHospitalSelect={(h) => setSelectedHospital(h)}
                    isSelectingLocation={isSelectingLocation}
                    userLocation={userLocation}
                    onMapClick={(loc) => {
                      if (mapSelectionMode) {
                        // When in map selection mode, search for hospitals at clicked location
                        setCenter(loc);
                        setMapSelectionMode(false);
                        setIsSelectingLocation(false);
                        // Update URL with selected location
                        const newUrl = `/hospitals?location=${
                          userLocation.lat
                        },${userLocation.lng}${
                          symptomsQuery ? `&symptoms=${symptomsQuery}` : ""
                        }`;

                        window.history.pushState({}, "", newUrl);
                      } else {
                        setCenter(loc);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {showPayment && selectedHospital && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-xl overflow-hidden animate-slide-up">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Payment for {selectedHospital.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Reserve your slot securely
                  </p>
                </div>
                <button
                  onClick={() => setShowPayment(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-5 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <label className="p-4 rounded-xl bg-blue-50 block">
                    <span className="text-xs text-gray-600">
                      Account Holder
                    </span>
                    <input
                      value={payName}
                      onChange={(e) => setPayName(e.target.value)}
                      className="mt-1 w-full bg-transparent outline-none font-semibold text-gray-900"
                    />
                  </label>
                  <label className="p-4 rounded-xl bg-blue-50 block">
                    <span className="text-xs text-gray-600">Phone</span>
                    <input
                      value={payPhone}
                      onChange={(e) => setPayPhone(e.target.value)}
                      className="mt-1 w-full bg-transparent outline-none font-semibold text-gray-900"
                    />
                  </label>
                  <label className="p-4 rounded-xl bg-blue-50 col-span-2 block">
                    <span className="text-xs text-gray-600">
                      Account / Card Number
                    </span>
                    <input
                      value={payCard}
                      onChange={(e) => setPayCard(e.target.value)}
                      className="mt-1 w-full bg-transparent outline-none font-mono tracking-wider text-gray-900 text-lg"
                    />
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-4 border rounded-xl">
                    <img
                      alt="QR Code"
                      className="w-36 h-36"
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                        `upi://pay?pa=cureconnect@upi&pn=${
                          payName || "NAME"
                        }&am=${payAmount || "0.00"}&cu=INR`
                      )}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Scan to pay via UPI</p>
                    <p className="text-sm text-gray-600">Amount</p>
                    <input
                      value={payAmount}
                      onChange={(e) => setPayAmount(e.target.value)}
                      className="text-2xl font-bold text-gray-900 bg-transparent outline-none"
                    />
                    <button
                      className="mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium hover:shadow-lg"
                      onClick={() => setShowPayment(false)}
                    >
                      Pay
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  This is a demo payment sheet. Do not share sensitive
                  information.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default HospitalFinderPage;
