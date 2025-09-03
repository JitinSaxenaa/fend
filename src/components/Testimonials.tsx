import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'CureConnect helped me find the nearest hospital with available beds during an emergency. The real-time updates were incredibly accurate.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Emergency Physician',
    content: 'As a healthcare provider, I appreciate how CureConnect helps patients make informed decisions about where to seek care.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Mother of Two',
    content: 'The symptom-based search feature is amazing. It helped me find the right pediatric care for my daughter quickly.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-8 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from people who found the care they needed.
          </p>
        </div>

        <div className="relative">
          <div className="glassmorphism-card p-8 md:p-12 rounded-3xl shadow-2xl animate-slide-up">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}