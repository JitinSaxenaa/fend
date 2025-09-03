import React from 'react';
import { MapPin, Search, Stethoscope, Navigation } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Text */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find the Right{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Hospital
            </span>{' '}
            Near You
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-time updates on beds, queues, and emergency capacity.
            Get the care you need, when you need it.
          </p>
        </div>

        {/* Search Card */}
        <div className="glassmorphism-card p-8 md:p-10 rounded-3xl shadow-2xl animate-slide-up max-w-2xl mx-auto hover:shadow-3xl transition-all duration-500">
          <div className="space-y-6">
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
                    placeholder="Enter your location..."
                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white/80"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 min-w-fit animate-glow-pulse">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Select on Map</span>
                </button>
                <button className="flex-1 px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
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
                <span className="px-4 bg-white/70 backdrop-blur-sm rounded-full text-gray-500">or</span>
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
                    placeholder="Describe your symptoms..."
                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-500 hover:bg-white/80"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 min-w-fit animate-glow-pulse-alt">
                  <span>🧑‍⚕️</span>
                  <span>Find Hospitals</span>
                </button>
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
    </div>
  );
}