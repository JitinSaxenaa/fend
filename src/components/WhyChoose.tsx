import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'HIPAA-compliant platform with verified hospital partnerships and secure data handling.',
    color: 'blue'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get instant results with our optimized search algorithms and real-time data updates.',
    color: 'teal'
  },
  {
    icon: Target,
    title: 'Precise Matching',
    description: 'AI-powered recommendations based on your symptoms, location, and preferences.',
    color: 'purple'
  }
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-teal-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              CareConnect?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing healthcare access with cutting-edge technology and user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glassmorphism-card p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 group animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r from-${reason.color}-500 to-${reason.color}-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}