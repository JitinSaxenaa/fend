import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search & Discover',
    description: 'Enter your location or symptoms to find relevant hospitals and medical facilities.',
    step: '01'
  },
  {
    icon: MapPin,
    title: 'Compare Options',
    description: 'View real-time availability, ratings, and distance to make the best choice.',
    step: '02'
  },
  {
    icon: Calendar,
    title: 'Book & Visit',
    description: 'Reserve your spot or get directions to receive the care you need.',
    step: '03'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting the right healthcare has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:relative md:top-0 md:left-0 md:transform-none md:mx-auto md:mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </div>

                <div className="glassmorphism-card p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 group mt-8 md:mt-0 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}