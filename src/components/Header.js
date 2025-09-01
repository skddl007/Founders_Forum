import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, getCurrentUserFromStorage, logout } from '../utils/authService';
import LoginForm from './LoginForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getCurrentUserFromStorage());
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            onClick={closeMenu}
          >
            <img 
              src="/sitarelogo.png" 
              alt="Sitare University Logo" 
              className="h-10 w-auto"
            />
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-primary-600' : 'text-white drop-shadow-lg'
            }`}>
              The Founders Forum
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link transition-all duration-300 hover:scale-105 font-medium ${
                isActive('/') 
                  ? 'text-primary-600 font-semibold' 
                  : isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link transition-all duration-300 hover:scale-105 font-medium ${
                isActive('/about') 
                  ? 'text-primary-600 font-semibold' 
                  : isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/vision" 
              className={`nav-link transition-all duration-300 hover:scale-105 font-medium ${
                isActive('/vision') 
                  ? 'text-primary-600 font-semibold' 
                  : isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
              }`}
              onClick={closeMenu}
            >
              Vision
            </Link>
            <Link 
              to="/activities" 
              className={`nav-link transition-all duration-300 hover:scale-105 font-medium ${
                isActive('/activities') 
                  ? 'text-primary-600 font-semibold' 
                  : isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
              }`}
              onClick={closeMenu}
            >
              Activities
            </Link>
            <Link 
              to="/team" 
              className={`nav-link transition-all duration-300 hover:scale-105 font-medium ${
                isActive('/team') 
                  ? 'text-primary-600 font-semibold' 
                  : isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
              }`}
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link transition-all duration-300 hover:scale-105 font-medium ${
                isActive('/contact') 
                  ? 'text-primary-600 font-semibold' 
                  : isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                {user.isAdmin ? (
                  <Link 
                    to="/admin" 
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isScrolled 
                        ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg' 
                        : 'bg-purple-600/20 text-white hover:bg-purple-600/30 backdrop-blur-md border border-purple-600/30'
                    }`}
                    onClick={closeMenu}
                  >
                    Admin Panel
                  </Link>
                ) : (
                  <Link 
                    to="/dashboard" 
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isScrolled 
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg' 
                        : 'bg-green-600/20 text-white hover:bg-green-600/30 backdrop-blur-md border border-green-600/30'
                    }`}
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isScrolled 
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg' 
                      : 'bg-red-600/20 text-white hover:bg-red-600/30 backdrop-blur-md border border-red-600/30'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isScrolled 
                      ? 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg' 
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/30'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank');
                    closeMenu();
                  }}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isScrolled 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg' 
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/30'
                  }`}
                >
                  Join Club
                </button>
              </>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-700' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-700' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-700' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            <Link 
              to="/" 
              className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-700 hover:bg-secondary-100'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-700 hover:bg-secondary-100'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/vision" 
              className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/vision') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-700 hover:bg-secondary-100'
              }`}
              onClick={closeMenu}
            >
              Vision
            </Link>
            <Link 
              to="/activities" 
              className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/activities') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-700 hover:bg-secondary-100'
              }`}
              onClick={closeMenu}
            >
              Activities
            </Link>
            <Link 
              to="/team" 
              className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/team') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-700 hover:bg-secondary-100'
              }`}
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-700 hover:bg-secondary-100'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            {user ? (
              <>
                {user.isAdmin ? (
                  <Link 
                    to="/admin" 
                    className="block py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Admin Panel
                  </Link>
                ) : (
                  <Link 
                    to="/dashboard" 
                    className="block py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    closeMenu();
                  }}
                  className="block w-full text-left py-2 px-4 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-all duration-300"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank');
                    closeMenu();
                  }}
                  className="block w-full text-left py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300"
                >
                  Join Club
                </button>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 shadow-lg"
            >
              ✕
            </button>
            <LoginForm 
              onLoginSuccess={handleLoginSuccess}
              onClose={() => setShowLoginModal(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
