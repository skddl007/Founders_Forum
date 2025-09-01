import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Vision = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">Our Vision</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Discover our mission to nurture entrepreneurial and financial leadership among students
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Our Vision</h2>
              <div className="space-y-6">
                <blockquote className="text-lg text-secondary-600 leading-relaxed italic border-l-4 border-primary-500 pl-6">
                  "To nurture entrepreneurial and financial leadership among students by combining startup innovation with strong financial literacy, creating a bridge between academic excellence and real-world business success.
                </blockquote>
                <blockquote className="text-lg text-secondary-600 leading-relaxed italic border-l-4 border-primary-500 pl-6">
                  We envision a community where every student has the tools, knowledge, and network to transform their ideas into impactful ventures that drive economic growth and social change."
                </blockquote>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-12 text-center shadow-xl">
                <div className="text-8xl mb-4 animate-bounce-slow">🎯</div>
                <p className="text-2xl font-semibold text-secondary-800">Our Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Our Mission Pillars</h2>
            <p>The foundation of our vision and the principles that guide our actions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="text-6xl mb-6 animate-bounce-slow">🚀</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Entrepreneurial Excellence</h3>
              <p className="text-secondary-600 leading-relaxed">
                Fostering innovative thinking and entrepreneurial skills through hands-on experiences and mentorship programs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">💰</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Financial Literacy</h3>
              <p className="text-secondary-600 leading-relaxed">
                Building strong financial foundations through education, workshops, and practical applications in business scenarios.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🌉</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Academic Bridge</h3>
              <p className="text-secondary-600 leading-relaxed">
                Connecting theoretical knowledge with real-world business applications to prepare students for successful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Our Strategic Goals</h2>
            <p>Key objectives that drive our mission forward</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-6 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Skill Development</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Equip students with essential entrepreneurial and financial skills through comprehensive training programs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Network Building</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Create a robust network of industry professionals, mentors, and fellow entrepreneurs for collaboration.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Innovation Hub</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Establish a platform for students to develop and launch innovative business ideas and startups.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                04
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Industry Integration</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Bridge the gap between academia and industry through partnerships and real-world project opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-gradient-to-br from-accent-100 to-accent-200">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Our Impact</h2>
            <p>Measuring success through the achievements of our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="text-6xl mb-6 animate-bounce-slow">👥</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Community Growth</h3>
              <p className="text-secondary-600 leading-relaxed">
                Building a diverse community of 100+ active members passionate about entrepreneurship and finance.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">💼</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Career Development</h3>
              <p className="text-secondary-600 leading-relaxed">
                Supporting students in launching successful careers in entrepreneurship, finance, and business leadership.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🌱</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Startup Ecosystem</h3>
              <p className="text-secondary-600 leading-relaxed">
                Contributing to the growth of the startup ecosystem through student-led ventures and innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="section bg-gradient-to-br from-accent-100 to-accent-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Be Part of Our Vision</h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Join The Founders Forum and become part of our mission to nurture entrepreneurial 
                and financial leadership. Help us build a community where ideas flourish and businesses are born.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🚀</span>
                  </div>
                  <span className="text-secondary-700">Develop your entrepreneurial mindset</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">💰</span>
                  </div>
                  <span className="text-secondary-700">Build strong financial foundations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🌉</span>
                  </div>
                  <span className="text-secondary-700">Bridge academic and real-world business</span>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <RegistrationForm 
                title="Join The Founders Forum"
                subtitle="Be part of our vision for the future"
                showBenefits={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
