import React from 'react';
import { facultyAdvisor, studentTeamMembers } from '../components/TeamData';

const Team = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">Meet Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Our diverse team of passionate individuals working together to foster entrepreneurship and innovation
            </p>
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
                  <div className="w-40 h-40 mx-auto lg:mx-0 mb-6 animate-float">
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
                    <div className={`w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-4xl text-white ${facultyAdvisor.image ? 'hidden' : 'flex'}`}>
                      {facultyAdvisor.name.charAt(0)}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-secondary-900 mb-3">{facultyAdvisor.name}</h3>
                  <p className="text-xl text-primary-600 font-semibold mb-4">{facultyAdvisor.role}</p>
                  <p className="text-secondary-600 leading-relaxed mb-6 text-lg">{facultyAdvisor.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                    {facultyAdvisor.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-4 py-2 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={`mailto:${facultyAdvisor.email}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 text-lg"
                  >
                    {facultyAdvisor.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Student Leadership Team</h2>
            <p>Meet the dedicated student leaders who drive our organization and execute our mission</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentTeamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-gray-100" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 animate-float">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-4 border-primary-500 shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-3xl text-white ${member.image ? 'hidden' : 'flex'}`}>
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-secondary-600 leading-relaxed mb-4">{member.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Our Team Values</h2>
            <p>The principles that guide our team's collaboration and decision-making</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="text-6xl mb-6 animate-bounce-slow">🤝</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Collaboration</h3>
              <p className="text-secondary-600 leading-relaxed">
                We believe in the power of teamwork and collective effort to achieve our goals.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">💡</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Innovation</h3>
              <p className="text-secondary-600 leading-relaxed">
                We encourage creative thinking and innovative approaches to problem-solving.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🎯</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Excellence</h3>
              <p className="text-secondary-600 leading-relaxed">
                We strive for excellence in everything we do, from planning to execution.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-6xl mb-6 animate-bounce-slow">🌱</div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Growth</h3>
              <p className="text-secondary-600 leading-relaxed">
                We are committed to continuous learning and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're always looking for passionate individuals who share our vision and want to make a difference in the entrepreneurial ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-primary btn-large bg-white text-primary-600 hover:bg-gray-100">
                Apply Now
              </button>
              <button className="btn btn-outline btn-large border-white text-white hover:bg-white hover:text-primary-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
