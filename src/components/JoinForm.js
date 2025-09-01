import React from 'react';

const JoinForm = ({ className = '' }) => {
  const handleJoinClick = () => {
    // Open the Microsoft form in a new tab
    window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank');
  };

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-xl ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-secondary-900 mb-4">
          Join The Founders Forum
        </h3>
        <p className="text-secondary-600 mb-6">
          Ready to become part of our community? Click the button below to fill out our registration form.
        </p>
        
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

export default JoinForm;


