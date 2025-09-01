import React, { useState, useEffect } from 'react';
import { markNotificationAsRead } from '../utils/notificationService';

const NotificationPopup = ({ notification, onClose, onMarkAsRead }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation to complete
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleMarkAsRead = async () => {
    try {
      await markNotificationAsRead(notification.id);
      onMarkAsRead(notification.id);
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'info':
        return 'ℹ️';
      case 'meeting_reminder':
        return '📅';
      case 'deadline_reminder':
        return '⏰';
      default:
        return '📢';
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'meeting_reminder':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'deadline_reminder':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
      <div className={`
        transform transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${getNotificationColor(notification.type)}
        border rounded-lg shadow-lg p-4
      `}>
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold mb-1">
              {notification.title}
            </h4>
            <p className="text-sm mb-3">
              {notification.message}
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={handleMarkAsRead}
                className="text-xs underline hover:no-underline"
              >
                Mark as read
              </button>
              <button
                onClick={handleClose}
                className="text-xs underline hover:no-underline"
              >
                Dismiss
              </button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
