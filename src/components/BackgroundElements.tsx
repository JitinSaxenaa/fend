import React from 'react';
import { Plus, Heart } from 'lucide-react';

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100 animate-gradient-shift"></div>
      
      {/* Main Floating Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-teal-400/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-2xl animate-float-delayed"></div>
      
      {/* Simple Healthcare Icons */}
      <div className="absolute top-32 right-20 opacity-5 animate-float-slow">
        <Plus className="w-16 h-16 text-blue-600" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-8 animate-float">
        <Heart className="w-12 h-12 text-teal-600" />
      </div>
      
      {/* Heartbeat Line */}
      <div className="absolute bottom-32 left-0 right-0 opacity-5">
        <svg className="w-full h-16" viewBox="0 0 800 80" fill="none">
          <path
            d="M0 40 L100 40 L120 20 L140 60 L160 10 L180 70 L200 40 L300 40 L320 20 L340 60 L360 10 L380 70 L400 40 L500 40 L520 20 L540 60 L560 10 L580 70 L600 40 L800 40"
            stroke="url(#heartbeatGradient)"
            strokeWidth="2"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Circular Waves */}
      <div className="absolute top-1/3 left-10 opacity-3">
        <div className="w-32 h-32 border border-blue-400/20 rounded-full animate-ping-slow"></div>
        <div className="absolute top-4 left-4 w-24 h-24 border border-teal-400/15 rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}