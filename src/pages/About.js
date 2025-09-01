import React from 'react';
import { mainTeamMembers, subCoordinators } from '../components/TeamData';
import RegistrationForm from '../components/RegistrationForm';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">About Our Club</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Discover the story behind The Founders Forum and our mission to empower future entrepreneurs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-secondary-600 leading-relaxed">
                <p>
                  The Founders Forum is a dynamic student organization dedicated to fostering entrepreneurial spirit and financial acumen among students. We bridge the gap between academic learning and real-world business applications through innovative programs and networking opportunities.
                </p>
                <p>
                  Our community brings together aspiring entrepreneurs, finance enthusiasts, and industry professionals to create a collaborative environment where ideas flourish and businesses are born.
                </p>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-12 text-center shadow-xl">
                <div className="text-8xl mb-4 animate-bounce-slow">🏢</div>
                <p className="text-2xl font-semibold text-secondary-800">Our Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Leadership Team</h2>
            <p>Meet the dedicated individuals who guide our organization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {mainTeamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 animate-float">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-2 border-primary-500 shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl text-white ${member.image ? 'hidden' : 'flex'}`}>
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-secondary-600 leading-relaxed mb-4">{member.description}</p>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 text-sm"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">Sub-Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subCoordinators.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 animate-float">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-2 border-primary-500 shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-lg text-white ${member.image ? 'hidden' : 'flex'}`}>
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">{member.name}</h4>
                  <p className="text-primary-600 text-sm mb-2">{member.role}</p>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 text-xs"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Our Values</h2>
            <p>The core principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="text-6xl mb-6 animate-bounce-slow">🎯</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Innovation</h3>
              <p className="text-secondary-600 leading-relaxed">
                We encourage creative thinking and innovative solutions to real-world business challenges.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🤝</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Collaboration</h3>
              <p className="text-secondary-600 leading-relaxed">
                We believe in the power of teamwork and building strong partnerships within our community.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">📈</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Growth</h3>
              <p className="text-secondary-600 leading-relaxed">
                We are committed to continuous learning and personal development for all our members.
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
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Ready to Join Our Community?</h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Become part of The Founders Forum and start your journey towards entrepreneurial success. 
                Join our community of innovators, leaders, and future business pioneers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-secondary-700">Access to exclusive workshops and events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-secondary-700">Network with industry professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-secondary-700">Mentorship and guidance opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <RegistrationForm 
                title="Join The Founders Forum"
                subtitle="Start your entrepreneurial journey today"
                showBenefits={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
