import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Activities = () => {
  const activities = [
    {
      icon: '🎓',
      title: 'Introductory Sessions',
      description: 'Comprehensive workshops covering entrepreneurship fundamentals and financial basics',
      category: 'Education'
    },
    {
      icon: '🎤',
      title: 'Pitch Competitions',
      description: 'Startup and finance pitch competitions with industry expert judges',
      category: 'Competition'
    },
    {
      icon: '📊',
      title: 'Case Studies',
      description: 'Real-world business case studies and financial analysis challenges',
      category: 'Analysis'
    },
    {
      icon: '💬',
      title: 'Panel Discussions',
      description: 'Expert panel discussions and debates on current business trends',
      category: 'Discussion'
    },
    {
      icon: '🤝',
      title: 'Collaboration Projects',
      description: 'Cross-functional finance and business collaboration projects',
      category: 'Collaboration'
    },
    {
      icon: '🎙️',
      title: 'Guest Speaker Series',
      description: 'Industry leaders sharing insights and networking opportunities',
      category: 'Networking'
    },
    {
      icon: '💰',
      title: 'Finance in Business',
      description: 'Practical applications of financial principles in business operations',
      category: 'Finance'
    },
    {
      icon: '⚡',
      title: 'Hackathons',
      description: 'Innovation-driven hackathons focusing on fintech and business solutions',
      category: 'Innovation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">Our Activities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Discover the diverse range of programs and events designed to enhance your entrepreneurial and financial skills
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>What We Offer</h2>
            <p>Comprehensive programs designed to build your entrepreneurial and financial expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-bounce-slow">{activity.icon}</div>
                  <div className="text-sm font-semibold text-primary-600 mb-2">{activity.category}</div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">{activity.title}</h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">{activity.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-primary-600 font-medium text-sm">Learn More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Program Categories</h2>
            <p>Our activities are organized into focused categories to maximize your learning experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="text-6xl mb-6 animate-bounce-slow">📚</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Educational Programs</h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Structured learning sessions covering entrepreneurship fundamentals, financial literacy, and business strategy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Introductory Workshops
                </li>
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Financial Literacy Training
                </li>
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Business Strategy Sessions
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🏆</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Competitive Events</h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Challenge yourself through pitch competitions, case study challenges, and innovation contests.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Pitch Competitions
                </li>
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Case Study Challenges
                </li>
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Innovation Hackathons
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🌐</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Networking & Collaboration</h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Connect with industry professionals, mentors, and fellow entrepreneurs to expand your network.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Guest Speaker Series
                </li>
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Panel Discussions
                </li>
                <li className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Collaboration Projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Upcoming Events</h2>
            <p>Mark your calendar for these exciting upcoming activities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex flex-col items-center justify-center text-white mr-4">
                  <span className="text-lg font-bold">15</span>
                  <span className="text-xs">Dec</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">Startup Pitch Competition</h3>
                  <p className="text-secondary-600 text-sm">Present your innovative business ideas to a panel of industry experts and investors.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-secondary-600">
                <span>📍 Conference Hall A</span>
                <span>⏰ 2:00 PM</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex flex-col items-center justify-center text-white mr-4">
                  <span className="text-lg font-bold">22</span>
                  <span className="text-xs">Dec</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">Financial Literacy Workshop</h3>
                  <p className="text-secondary-600 text-sm">Learn essential financial concepts and their practical applications in business.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-secondary-600">
                <span>📍 Room 301</span>
                <span>⏰ 10:00 AM</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex flex-col items-center justify-center text-white mr-4">
                  <span className="text-lg font-bold">05</span>
                  <span className="text-xs">Jan</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">Guest Speaker: Tech Entrepreneurship</h3>
                  <p className="text-secondary-600 text-sm">Join us for an inspiring talk by a successful tech entrepreneur sharing their journey.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-secondary-600">
                <span>📍 Auditorium</span>
                <span>⏰ 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our activities and start building your entrepreneurial and financial skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-primary btn-large bg-white text-primary-600 hover:bg-gray-100">
                View Calendar
              </button>
              <button className="btn btn-outline btn-large border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Join Our Activities</h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Ready to participate in our exciting activities and events? Join The Founders Forum 
                and get access to all our programs, workshops, and networking opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🎯</span>
                  </div>
                  <span className="text-secondary-700">Participate in pitch competitions and hackathons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🎓</span>
                  </div>
                  <span className="text-secondary-700">Attend workshops and skill development sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🤝</span>
                  </div>
                  <span className="text-secondary-700">Network with industry experts and mentors</span>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <RegistrationForm 
                title="Join The Founders Forum"
                subtitle="Get access to all our activities and events"
                showBenefits={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
