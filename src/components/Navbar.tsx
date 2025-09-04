import React from "react";
import { Heart, Menu, X, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              CareConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {!isHomePage && (
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            )}
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Features
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              How It Works
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Testimonials
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-slow">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 px-6 py-4 space-y-4 animate-slide-down">
            {!isHomePage && (
              <button
                onClick={() => navigate("/")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
            )}
            <a
              href="#features"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Testimonials
            </a>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
