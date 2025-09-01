import React, { useState, useEffect } from 'react';
import { getJoinDeadline } from '../utils/notificationService';

const JoinDeadlineBanner = () => {
  const [deadline, setDeadline] = useState('2025-09-15');
  const [daysLeft, setDaysLeft] = useState(0);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    // Open the Microsoft form in a new tab
    window.open('https://forms.cloud.microsoft/r/Jd6cpZeCiK', '_blank');
  };

  useEffect(() => {
    const fetchDeadlineInfo = async () => {
      try {
        // Try to get deadline from database
        try {
          const result = await getJoinDeadline();
          if (result.success && result.data) {
            setDeadline(result.data.setting_value);
          }
        } catch (functionError) {
          console.log('Deadline setting not available yet, using default');
        }

        // Check if registration is still open
        const now = new Date();
        const deadlineDate = new Date(deadline);
        setIsRegistrationOpen(now <= deadlineDate);

        // Calculate days left
        const timeDiff = deadlineDate.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        setDaysLeft(daysDiff);
      } catch (error) {
        console.error('Error fetching deadline info:', error);
        // Fallback calculation
        const deadlineDate = new Date('2025-09-15');
        const today = new Date();
        const timeDiff = deadlineDate.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        setDaysLeft(daysDiff);
      }
    };

    fetchDeadlineInfo();
  }, [deadline]);

  if (!isRegistrationOpen) {
    return (
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="font-semibold">
            ⏰ Registration for The Founders Forum is now closed. The deadline was {deadline}.
          </p>
        </div>
      </div>
    );
  }

  if (daysLeft <= 0) {
    return (
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="font-semibold">
            ⏰ Last day to join The Founders Forum! Registration closes today at midnight.
          </p>
        </div>
      </div>
    );
  }

  if (daysLeft <= 7) {
    return (
      <div className="bg-orange-600 text-white py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="font-semibold">
            ⏰ Only {daysLeft} day{daysLeft !== 1 ? 's' : ''} left to join The Founders Forum! 
            Registration closes on {deadline}. 
            <a href="#registration" onClick={handleRegisterClick} className="underline ml-2 hover:no-underline cursor-pointer font-semibold hover:text-white transition-colors duration-200">
              Join now →
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (daysLeft <= 30) {
    return (
      <div className="bg-yellow-600 text-white py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="font-semibold">
            ⏰ Join The Founders Forum before {deadline}! Only {daysLeft} days remaining.
            <a href="#registration" onClick={handleRegisterClick} className="underline ml-2 hover:no-underline cursor-pointer font-semibold hover:text-white transition-colors duration-200">
              Register now →
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-600 text-white py-3 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="font-semibold">
          🎉 Join The Founders Forum! Registration open until {deadline}.
                      <a href="#registration" onClick={handleRegisterClick} className="underline ml-2 hover:no-underline cursor-pointer font-semibold hover:text-white transition-colors duration-200">
              Apply now →
            </a>
        </p>
      </div>
    </div>
  );
};

export default JoinDeadlineBanner;
