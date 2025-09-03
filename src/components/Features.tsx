import React from 'react';
import { Building2, Bed, Clock, Ambulance } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Nearby Hospitals',
    description: 'Find hospitals within your radius with detailed information and ratings.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Bed,
    title: 'Bed Availability',
    description: 'Real-time bed availability across all departments and specialties.',
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: Clock,
    title: 'OPD Queue Updates',
    description: 'Live queue status and estimated waiting times for outpatient departments.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Ambulance,
    title: 'Emergency Capacity',
    description: 'Emergency room availability and critical care capacity monitoring.',
    gradient: 'from-red-500 to-red-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Healthcare
            </span>{' '}
            Information
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access real-time data from hospitals across your region to make informed healthcare decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glassmorphism-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}