// src/utils/notificationService.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('foundersForumToken');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.detail || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Get all notifications
export const getAllNotifications = async () => {
  try {
    const response = await apiRequest('/notifications');
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get unread notifications
export const getUnreadNotifications = async () => {
  try {
    const response = await apiRequest('/notifications/unread');
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Mark notification as read
export const markNotificationAsRead = async (notificationId) => {
  try {
    const response = await apiRequest(`/notifications/${notificationId}/read`, {
      method: 'POST'
    });
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Create notification (admin only)
export const createNotification = async (notificationData) => {
  try {
    const response = await apiRequest('/notifications', {
      method: 'POST',
      body: JSON.stringify(notificationData)
    });
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get club settings
export const getClubSettings = async () => {
  try {
    const response = await apiRequest('/settings');
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get specific setting
export const getSetting = async (key) => {
  try {
    // Use public endpoint for basic settings that don't require authentication
    const publicSettings = ['join_deadline', 'registration_status', 'club_name', 'club_description'];
    const endpoint = publicSettings.includes(key) ? `/public/settings/${key}` : `/settings/${key}`;
    
    const response = await apiRequest(endpoint);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get join deadline without authentication (for public access)
export const getJoinDeadline = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000'}/public/settings/join_deadline`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.detail || 'Failed to fetch join deadline');
    }
    
    return { success: true, data: data };
  } catch (error) {
    console.error('Error fetching join deadline:', error);
    return { success: false, error: error.message };
  }
};
