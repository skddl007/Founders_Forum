import React from 'react';

const RegistrationForm = ({ 
  className = "",
  title = "Join The Founders Forum",
  subtitle = "Take the first step towards your entrepreneurial journey",
  showBenefits = false
}) => {
  const handleJoinClick = () => {
    // Open the Microsoft form in a new tab
    window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank');
  };

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-xl ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-secondary-900 mb-4">
          {title}
        </h3>
        <p className="text-secondary-600 mb-6">
          {subtitle}
        </p>
        
        {showBenefits && (
          <div className="mb-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Access to Resources</h4>
                  <p className="text-sm text-secondary-600">Exclusive workshops, mentorship, and networking opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🤝</div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Community Network</h4>
                  <p className="text-sm text-secondary-600">Connect with fellow entrepreneurs and industry professionals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💡</div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Skill Development</h4>
                  <p className="text-sm text-secondary-600">Build entrepreneurial and financial skills through programs.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <button
          onClick={handleJoinClick}
          className="btn btn-primary btn-large animate-float w-full"
        >
          Fill Registration Form
        </button>
        
        <p className="text-xs text-secondary-500 mt-4">
          You will be redirected to our official registration form
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
