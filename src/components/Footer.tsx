import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                CareConnect
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Revolutionizing healthcare access with real-time hospital information, 
              helping you make informed decisions about your medical care.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">Find Hospitals<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">Emergency Care<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">Specialties<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">About Us<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">Help Center<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">Contact Us<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">Privacy Policy<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">Terms of Service<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 CareConnect. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ for better healthcare access
          </p>
        </div>
      </div>
    </footer>
  );
}