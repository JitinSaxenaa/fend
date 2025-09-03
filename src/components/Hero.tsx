import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigation hook
import { MapPin, Search, Stethoscope } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState(""); // track user input
  const [symptoms, setSymptoms] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (location.trim() !== "") {
      navigate(`/hospitals?location=${encodeURIComponent(location)}`);
    } else {
      alert("Please enter a location before searching.");
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Advanced Healthcare-themed animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50"></div>

        {/* Floating geometric shapes with healthcare colors */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-16 right-24 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>

        {/* Animated medical cross patterns */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-32 h-32 border-2 border-blue-200/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-teal-200/30 rounded-full animate-spin-slow-reverse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-indigo-200/30 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>

        {/* Floating medical icons with enhanced animations */}
        <div className="absolute top-20 left-10 text-blue-300/30 animate-bounce-slow filter drop-shadow-lg">
          <div className="text-6xl transform hover:scale-110 transition-transform duration-300">
            🏥
          </div>
        </div>
        <div className="absolute top-40 right-20 text-teal-300/30 animate-bounce-slow-delayed filter drop-shadow-lg">
          <div className="text-5xl transform hover:scale-110 transition-transform duration-300">
            💊
          </div>
        </div>
        <div className="absolute bottom-40 left-20 text-indigo-300/30 animate-pulse-slow filter drop-shadow-lg">
          <div className="text-4xl transform hover:scale-110 transition-transform duration-300">
            🩺
          </div>
        </div>
        <div className="absolute bottom-20 right-10 text-cyan-300/30 animate-bounce-slow filter drop-shadow-lg">
          <div className="text-5xl transform hover:scale-110 transition-transform duration-300">
            🚑
          </div>
        </div>

        {/* DNA helix with enhanced styling */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="flex space-x-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-10 bg-gradient-to-b from-blue-400/50 via-cyan-400/50 to-teal-400/50 rounded-full animate-pulse shadow-lg"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    transform: `rotate(${i * 45}deg)`,
                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))",
                  }}
                ></div>
              ))}
            </div>
            {/* Central nucleus */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-ping-slow shadow-lg"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/40 to-teal-400/40 rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Animated wave patterns */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-full">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="fill-blue-200/30"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z;M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-17,126.83,9.84,38.74,24.14,66.9,62.94,79.6,105.8,13.19,44.3,18.8,92.47,15.54,140.7-9.31,110.47-82.48,201.8-182.31,233.82-11.98,3.93-24.31,6-36.79,6.57-82.35,3.83-165.23-20.88-225.61-73.22C182.07,363.6,149.56,310.81,143.31,253.68c-3.69-33.08-.54-67.99,9.28-100.17C164.78,118.31,189.84,77.8,224.6,48.62,248.13,29.29,274.47,15.59,302.82,6.81,328.87-1.35,356.09-.37,381.23,6.69,407.54,14.41,431.7,29.12,456.84,44.69,480.88,60.25,505.8,77.74,531.64,96.37,558.24,116.1,585.62,136.87,613.8,158.84,642.6,181.87C671.77,205.07,701.65,229.3,732.36,253.37c43.67,32.11,90.65,56.45,139.81,71.23,19.84,5.93,39.84,10.2,59.93,13.73,7.38,1.36,14.83,2.25,22.29,2.6,82.4,3.51,162.3-29.83,233.84-87.09,12.33-8.57,24.4-17.66,36.12-27.21C1300.57,348.55,1320.88,264.75,1313.25,180.84c-6.76-76.77-31.08-147.84-75.89-211.24C1219.43,81.29,1166.05,32.72,1103.63,6.3,1071.51-7.72,1037.85-12.91,1004.47-15.81C972.11,18.69,940.24,28.92,908.3,35.34,876.15,41.82,843.84,45.54,811.45,46.29c-42.84,1.17-85.69-1.9-128.45-8.46-26.34-4.05-52.68-10.53-78.91-20.13-82.77-28.91-152.61-84.08-197.15-149.07a9.39,9.39,0,0,0-13.18-3.11c-38.93,24.09-76.2,50.59-111.64,80.13A236.16,236.16,0,0,0,499.55,118.3c-9.94,1.29-19.94,2.1-29.94,2.42C442.71,123.88,408.67,122.09,375.1,118.28,343.27,114.69,311.61,110.3,280.09,105C246.87,99.35,213.49,94.74,180.1,93.29c-82.65-3.69-162.73,15.88-233.71,54.47C67.12,177.55,33.79,220.81,10.39,267.37,6.3,273.76,2.22,280.15-1.84,286.54C-28.78,400.84-22.6,473.52,26.34,539.06c28.2,37.28,64.65,69.35,105.75,94.07C181.22,664.88,227.36,690.08,277.43,705.5c62.3,19.13,127.18,23.88,191.64,13.2,28.75-4.8,57.09-13.68,84.78-25.59,19.62-8.23,38.43-18.14,56.68-29.24,23.88-14.51,46.94-30.56,69.13-47.84,19.9-15.88,39.1-32.62,57.6-50.05,48.96-45.69,90.36-100.41,123.14-161.57,11.49-21.69,20.4-44.67,26.15-68.37,5.47-22.34,8.35-45.67,8.35-69.13C1000.85,118.49,1000.85,118.49,1000.85,118.49Z"
                  opacity=".25"
                  className="fill-teal-200/30"
                />
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-17,126.83,9.84,38.74,24.14,66.9,62.94,79.6,105.8,13.19,44.3,18.8,92.47,15.54,140.7-9.31,110.47-82.48,201.8-182.31,233.82-11.98,3.93-24.31,6-36.79,6.57-82.35,3.83-165.23-20.88-225.61-73.22C182.07,363.6,149.56,310.81,143.31,253.68c-3.69-33.08-.54-67.99,9.28-100.17C164.78,118.31,189.84,77.8,224.6,48.62,248.13,29.29,274.47,15.59,302.82,6.81,328.87-1.35,356.09-.37,381.23,6.69,407.54,14.41,431.7,29.12,456.84,44.69,480.88,60.25,505.8,77.74,531.64,96.37,558.24,116.1,585.62,136.87,613.8,158.84,642.6,181.87C671.77,205.07,701.65,229.3,732.36,253.37c43.67,32.11,90.65,56.45,139.81,71.23,19.84,5.93,39.84,10.2,59.93,13.73,7.38,1.36,14.83,2.25,22.29,2.6,82.4,3.51,162.3-29.83,233.84-87.09,12.33-8.57,24.4-17.66,36.12-27.21C1300.57,348.55,1320.88,264.75,1313.25,180.84c-6.76-76.77-31.08-147.84-75.89-211.24C1219.43,81.29,1166.05,32.72,1103.63,6.3,1071.51-7.72,1037.85-12.91,1004.47-15.81C972.11,18.69,940.24,28.92,908.3,35.34,876.15,41.82,843.84,45.54,811.45,46.29c-42.84,1.17-85.69-1.9-128.45-8.46-26.34-4.05-52.68-10.53-78.91-20.13-82.77-28.91-152.61-84.08-197.15-149.07a9.39,9.39,0,0,0-13.18-3.11c-38.93,24.09-76.2,50.59-111.64,80.13A236.16,236.16,0,0,0,499.55,118.3c-9.94,1.29-19.94,2.1-29.94,2.42C442.71,123.88,408.67,122.09,375.1,118.28,343.27,114.69,311.61,110.3,280.09,105C246.87,99.35,213.49,94.74,180.1,93.29c-82.65-3.69-162.73,15.88-233.71,54.47C67.12,177.55,33.79,220.81,10.39,267.37,6.3,273.76,2.22,280.15-1.84,286.54C-28.78,400.84-22.6,473.52,26.34,539.06c28.2,37.28,64.65,69.35,105.75,94.07C181.22,664.88,227.36,690.08,277.43,705.5c62.3,19.13,127.18,23.88,191.64,13.2,28.75-4.8,57.09-13.68,84.78-25.59,19.62-8.23,38.43-18.14,56.68-29.24,23.88-14.51,46.94-30.56,69.13-47.84,19.9-15.88,39.1-32.62,57.6-50.05,48.96-45.69,90.36-100.41,123.14-161.57,11.49-21.69,20.4-44.67,26.15-68.37,5.47-22.34,8.35-45.67,8.35-69.13C1000.85,118.49,1000.85,118.49,1000.85,118.49Z"
                />
              </path>
            </svg>
          </div>
        </div>

        {/* Glowing orbs with healthcare symbols */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Hero Text */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find the Right{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Hospital
            </span>{" "}
            Near You
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-time updates on beds, queues, and emergency capacity. Get the
            care you need, when you need it.
          </p>
        </div>

        {/* Enhanced Search Card */}
        <div className="relative p-8 md:p-10 rounded-3xl animate-slide-up max-w-2xl mx-auto transition-all duration-500 group">
          {/* Card background with enhanced glassmorphism */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/20 to-teal-50/30 rounded-3xl"></div>

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Location Search */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Search by Location</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location..."
                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white/80"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 min-w-fit animate-glow-pulse"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/hospitals?selectOnMap=true")}
                  className="flex-1 px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Select on Map</span>
                </button>
                <button
                  onClick={() => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(
                        (position) => {
                          const { latitude, longitude } = position.coords;
                          navigate(
                            `/hospitals?location=${latitude},${longitude}${
                              symptoms ? `&symptoms=${symptoms}` : ""
                            }`
                          );
                        },
                        (error) => {
                          alert(
                            "Unable to get your location. Please enter manually or select on map."
                          );
                        }
                      );
                    } else {
                      alert(
                        "Geolocation not supported. Please enter location manually."
                      );
                    }
                  }}
                  className="flex-1 px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <span>Detect Location</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/70 backdrop-blur-sm rounded-full text-gray-500">
                  or
                </span>
              </div>
            </div>

            {/* Symptom Search */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center space-x-2">
                <Stethoscope className="w-5 h-5 text-teal-600" />
                <span>Search by Symptoms</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Describe your symptoms..."
                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white/80"
                  />
                </div>
                <button
                  onClick={() => {
                    if (symptoms.trim() !== "") {
                      navigate(
                        `/hospitals?symptoms=${encodeURIComponent(symptoms)}`
                      );
                    } else {
                      navigate("/hospitals");
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 min-w-fit animate-glow-pulse-alt"
                >
                  <span>🧑‍⚕️</span>
                  <span>Find Hospitals</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm animate-fade-in-delayed">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Real-time Data</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span>24/7 Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
          <span>Verified Hospitals</span>
        </div>
      </div>
    </div>
    // </div>
  );
}
