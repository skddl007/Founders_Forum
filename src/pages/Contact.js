import React, { useState } from 'react';
import { teamMembers } from '../components/TeamData';
import RegistrationForm from '../components/RegistrationForm';

const Contact = () => {
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Message submitted:', messageData);
    alert('Thank you for your message! We will get back to you soon.');
    setMessageData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">Get In Touch</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title animate-fade-in">
            <h2>Connect with us</h2>
            <p>Get in touch with our team for any inquiries or support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
              <div className="text-5xl mb-4 animate-bounce-slow">📧</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Email</h3>
              <p className="text-secondary-600">foundersforumclub@gmail.com</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl mb-4 animate-bounce-slow">📞</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Phone</h3>
              <p className="text-secondary-600">+91 9982385483</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4 animate-bounce-slow">📍</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Location</h3>
              <p className="text-secondary-600">SRMCEM Campus Lucknow</p>
            </div>
          </div>

          {/* Team Contact Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">Contact Our Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12">
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
                      <div className={`w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-sm text-white ${member.image ? 'hidden' : 'flex'}`}>
                        {member.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900">{member.name}</h4>
                      <p className="text-primary-600 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 text-sm block text-center"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Send us a message</h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Have a question or want to learn more about our programs? Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <form onSubmit={handleMessageSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                      value={messageData.name}
                      onChange={handleMessageChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                      value={messageData.email}
                      onChange={handleMessageChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Enter your message"
                      value={messageData.message}
                      onChange={handleMessageChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full btn btn-primary btn-large animate-float"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow us on social media</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Stay updated with our latest events, activities, and opportunities
            </p>
                         <div className="flex flex-wrap justify-center gap-6">
               <a 
                 href="https://linkedin.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-float"
               >
                 <span className="text-xl font-semibold">in</span>
               </a>
               <a 
                 href="https://twitter.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-float"
                 style={{animationDelay: '0.1s'}}
               >
                 <span className="text-xl font-semibold">𝕏</span>
               </a>
               <a 
                 href="https://instagram.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-float"
                 style={{animationDelay: '0.2s'}}
               >
                 <span className="text-xl font-semibold">📷</span>
               </a>
               <a 
                 href="https://facebook.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-float"
                 style={{animationDelay: '0.3s'}}
               >
                 <span className="text-xl font-semibold">f</span>
               </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
