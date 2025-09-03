import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glassmorphism-card p-12 md:p-16 rounded-3xl shadow-2xl animate-slide-up">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-lg animate-bounce-slow">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Find Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Perfect Hospital?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who trust CureConnect for their healthcare needs. 
              Start your search today and experience the future of healthcare access.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 animate-glow-pulse">
              <span>Get Started</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="w-full sm:w-auto px-12 py-4 bg-white/70 backdrop-blur-sm border-2 border-blue-200 text-blue-600 rounded-xl font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>✨ No registration required • Free to use • Available 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}