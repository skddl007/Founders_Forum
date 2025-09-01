// src/utils/meetingService.js

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

// Get all meetings
export const getAllMeetings = async () => {
  try {
    const response = await apiRequest('/meetings');
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get upcoming meetings
export const getUpcomingMeetings = async () => {
  try {
    const response = await apiRequest('/meetings/upcoming');
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Create meeting (admin only)
export const createMeeting = async (meetingData) => {
  try {
    const response = await apiRequest('/meetings', {
      method: 'POST',
      body: JSON.stringify(meetingData)
    });
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update meeting (admin only)
export const updateMeeting = async (id, updates) => {
  try {
    const response = await apiRequest(`/meetings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Cancel meeting (admin only)
export const cancelMeeting = async (id, reason) => {
  try {
    const response = await apiRequest(`/meetings/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason: reason })
    });
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get all club members
export const getAllClubMembers = async () => {
  try {
    const response = await apiRequest('/members');
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Mark attendance
export const markAttendanceInDB = async (attendanceData) => {
  try {
    const response = await apiRequest('/attendance', {
      method: 'POST',
      body: JSON.stringify(attendanceData)
    });
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get member attendance history
export const getMemberAttendanceHistory = async (memberId) => {
  try {
    const response = await apiRequest(`/attendance/member/${memberId}`);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
