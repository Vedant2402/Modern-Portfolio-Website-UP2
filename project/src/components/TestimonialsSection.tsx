import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type TestimonialsSectionProps = {
  darkMode: boolean;
};

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  imageUrl: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      content: 'Working with John was an exceptional experience. His attention to detail and creative vision brought our project to life in ways we couldn\'t have imagined. The UI/UX design was intuitive and the implementation was flawless.',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'Innovate Solutions',
      content: 'John\'s work on our web application exceeded our expectations. His ability to understand our requirements and translate them into a beautiful, functional design was impressive. The project was delivered on time and our users love the new interface.',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Brand Forward',
      content: 'We hired John to redesign our company website and the results were outstanding. He took our brand identity and created a cohesive digital experience that perfectly represents our values. His communication throughout the project was excellent.',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="testimonials" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Client Testimonials
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Hear what my clients have to say about their experiences working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className={`p-8 md:p-12 rounded-2xl shadow-xl ${
              darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-blur-sm' : 'bg-gray-50'
            }`}
          >
            <div className="absolute -top-6 left-8">
              <Quote 
                size={48} 
                className={`${darkMode ? 'text-blue-500 opacity-50' : 'text-blue-600 opacity-30'}`} 
              />
            </div>
            
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {testimonials[currentIndex].name}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
              </p>
            </div>
            
            <blockquote>
              <p className={`text-xl italic mb-4 relative z-10 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                "{testimonials[currentIndex].content}"
              </p>
            </blockquote>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className={`p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className={`p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${darkMode ? 'bg-blue-600 opacity-10' : 'bg-blue-500 opacity-10'}`}></div>
          <div className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full ${darkMode ? 'bg-blue-600 opacity-10' : 'bg-blue-500 opacity-10'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;