import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppJoin from './WhatsAppJoin';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-primary-300">The Founders Forum</h3>
            <p className="text-secondary-300 leading-relaxed">
              Empowering students to become the entrepreneurs and financial leaders of tomorrow through innovation, collaboration, and strategic thinking.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h4 className="text-xl font-semibold mb-4 text-primary-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-secondary-300 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities" 
                  className="text-secondary-300 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 block"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-secondary-300 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank')}
                  className="text-secondary-300 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 block w-full text-left"
                >
                  Join Club
                </button>
              </li>
            </ul>
          </div>
          
          {/* Stay Connected */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-semibold mb-4 text-primary-300">Stay Connected</h4>
            <p className="text-secondary-300 mb-4">
              Join our community and stay updated with the latest events and opportunities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <span className="text-sm font-semibold">in</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <span className="text-sm font-semibold">𝕏</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <span className="text-sm font-semibold">📷</span>
              </a>
            </div>
            <div className="mt-4">
              <WhatsAppJoin 
                variant="outline" 
                size="small" 
                className="w-full bg-transparent border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                Join WhatsApp Group
              </WhatsAppJoin>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h4 className="text-xl font-semibold mb-4 text-primary-300">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-secondary-300 flex items-center space-x-2 hover:text-primary-300 transition-all duration-300">
                <span className="text-lg">📧</span>
                <span>foundersforumclub@gmail.com</span>
              </p>
              <p className="text-secondary-300 flex items-center space-x-2 hover:text-primary-300 transition-all duration-300">
                <span className="text-lg">📞</span>
                <span>+91 9982385483</span>
              </p>
              <p className="text-secondary-300 flex items-center space-x-2 hover:text-primary-300 transition-all duration-300">
                <span className="text-lg">📍</span>
                <span>SRMCEM Campus Lucknow</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-secondary-700 mt-12 pt-8 text-center animate-slide-up">
          <p className="text-secondary-400">
            &copy; 2025 The Founders Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
