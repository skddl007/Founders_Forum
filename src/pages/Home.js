import React from 'react';
import { Link } from 'react-router-dom';
import { facultyAdvisor, mainTeamMembers } from '../components/TeamData';
import RegistrationForm from '../components/RegistrationForm';
import JoinDeadlineBanner from '../components/JoinDeadlineBanner';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Join Deadline Banner */}
      <JoinDeadlineBanner />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
              The Founders Forum
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Empowering the next generation of entrepreneurs and financial leaders through innovation, collaboration, and strategic thinking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <button
                onClick={() => window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank')}
                className="btn btn-primary btn-large animate-float"
              >
                Join the Club
              </button>
              <Link 
                to="/about" 
                className="btn btn-outline btn-large border-white text-white hover:bg-white hover:text-secondary-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Why Join The Founders Forum?</h2>
            <p>Discover the unique opportunities that await you in our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="text-6xl mb-6 animate-bounce-slow">🚀</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Entrepreneurial Spirit</h3>
              <p className="text-secondary-600 leading-relaxed">
                Develop your entrepreneurial mindset through hands-on projects and real-world challenges.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">💡</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Innovation Hub</h3>
              <p className="text-secondary-600 leading-relaxed">
                Access cutting-edge resources and collaborate with like-minded innovators and creators.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🤝</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Networking</h3>
              <p className="text-secondary-600 leading-relaxed">
                Connect with industry professionals, mentors, and fellow entrepreneurs to expand your network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">100+</h3>
              <p className="text-lg opacity-90">Active Members</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">50+</h3>
              <p className="text-lg opacity-90">Events Organized</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">25+</h3>
              <p className="text-lg opacity-90">Industry Partners</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.3s'}}>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">15+</h3>
              <p className="text-lg opacity-90">Startups Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Advisor Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Faculty Advisor</h2>
            <p>Our experienced faculty mentor who guides our strategic direction and academic partnerships</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 animate-float">
                    {facultyAdvisor.image ? (
                      <img 
                        src={facultyAdvisor.image} 
                        alt={facultyAdvisor.name}
                        className="w-full h-full object-cover rounded-full border-4 border-primary-500 shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-3xl text-white ${facultyAdvisor.image ? 'hidden' : 'flex'}`}>
                      {facultyAdvisor.name.charAt(0)}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">{facultyAdvisor.name}</h3>
                  <p className="text-lg text-primary-600 font-semibold mb-4">{facultyAdvisor.role}</p>
                  <p className="text-secondary-600 leading-relaxed mb-6">{facultyAdvisor.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                    {facultyAdvisor.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={`mailto:${facultyAdvisor.email}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                  >
                    {facultyAdvisor.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Student Leadership Team</h2>
            <p>Our dedicated student leaders who drive our organization and execute our mission</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainTeamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center">
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
          
          <div className="text-center mt-12 animate-fade-in">
            <Link 
              to="/team" 
              className="btn btn-primary btn-large animate-float"
            >
              Meet Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section id="registration" className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Join The Founders Forum</h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Take the first step towards your entrepreneurial journey. Join our community of innovators and leaders.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-slide-up">
                  <div className="text-3xl animate-bounce-slow">🚀</div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">Access to Resources</h4>
                    <p className="text-secondary-600">Get exclusive access to workshops, mentorship, and networking opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
                  <div className="text-3xl animate-bounce-slow">🤝</div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">Community Network</h4>
                    <p className="text-secondary-600">Connect with like-minded entrepreneurs and industry professionals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <div className="text-3xl animate-bounce-slow">💡</div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">Skill Development</h4>
                    <p className="text-secondary-600">Enhance your entrepreneurial and financial skills through our programs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <RegistrationForm 
                title="Join The Founders Forum"
                subtitle="Take the first step towards your entrepreneurial journey"
                showBenefits={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-accent-100 to-accent-200">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Join our community of innovators and take the first step towards building your entrepreneurial future.
            </p>
            <button
              onClick={() => window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank')}
              className="btn btn-primary btn-large animate-float"
            >
              Join The Founders Forum
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
