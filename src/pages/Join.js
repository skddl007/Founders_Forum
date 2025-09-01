import React from 'react';
import JoinForm from '../components/JoinForm';

const Join = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">Join The Founders Forum</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Become part of a community of innovators and leaders at Sitare University.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Why Join?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-slide-up">
                  <div className="text-3xl animate-bounce-slow">🚀</div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">Access to Resources</h4>
                    <p className="text-secondary-600">Exclusive workshops, mentorship, and networking opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
                  <div className="text-3xl animate-bounce-slow">🤝</div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">Community Network</h4>
                    <p className="text-secondary-600">Connect with fellow entrepreneurs and industry professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <div className="text-3xl animate-bounce-slow">💡</div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">Skill Development</h4>
                    <p className="text-secondary-600">Build entrepreneurial and financial skills through programs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <JoinForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;



