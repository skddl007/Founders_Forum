import React, { useState, useEffect, useCallback } from 'react';
import { getUnreadNotifications, markNotificationAsRead } from '../utils/notificationService';
import NotificationPopup from './NotificationPopup';

const NotificationManager = ({ user }) => {
  const [notifications, setNotifications] = useState([]);
  const [popupNotifications, setPopupNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = useCallback(async () => {
    try {
      setLoading(true);
      
      // Get unread notifications for the user
      const result = await getUnreadNotifications();
      
      if (result.success) {
        setNotifications(result.data || []);
        
        // Filter notifications that should show as popups
        const popupNotifs = (result.data || []).filter(notif => notif.show_popup);
        setPopupNotifications(popupNotifs);
      } else {
        console.error('Error fetching notifications:', result.error);
        setNotifications([]);
        setPopupNotifications([]);
      }
      
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setNotifications([]);
      setPopupNotifications([]);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchNotifications();
    }
  }, [user, fetchNotifications]);

  const handleClosePopup = (notificationId) => {
    setPopupNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const handleMarkAsRead = (notificationId) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
    setPopupNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const markAllAsRead = async () => {
    try {
      // Mark all notifications as read
      for (const notification of notifications) {
        try {
          await markNotificationAsRead(notification.id);
        } catch (error) {
          console.error('Error marking notification as read:', error);
        }
      }

      setNotifications([]);
      setPopupNotifications([]);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <>
      {/* Popup Notifications */}
      {popupNotifications.map((notification) => (
        <NotificationPopup
          key={notification.id}
          notification={notification}
          onClose={() => handleClosePopup(notification.id)}
          onMarkAsRead={handleMarkAsRead}
        />
      ))}

      {/* Notification Bell Icon (if there are notifications) */}
      {notifications.length > 0 && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="relative">
            <button
              onClick={markAllAsRead}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
              title={`${notifications.length} unread notification${notifications.length > 1 ? 's' : ''}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications.length}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationManager;
