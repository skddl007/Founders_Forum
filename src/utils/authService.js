// src/utils/authService.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

// Admin email addresses
const ADMIN_EMAILS = [
  'ashwini@sitare.org',
  'su-22010@sitare.org',
  'su-23036@sitare.org',
  'su-24066@sitare.org',
  'su-24038@sitare.org',
  'su-24084@sitare.org',
  'su-24114@sitare.org'
];

// Validate Sitare University email format
export const validateSitareEmail = (email) => {
  const sitareEmailPattern = /^su-\d{3,6}@sitare\.org$/;
  return sitareEmailPattern.test(email);
};

// Helper function to make API requests
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

// Sign up with email and password
export const signUp = async (email, password, userData) => {
  try {
    // Validate Sitare University email format
    if (!validateSitareEmail(email)) {
      return { success: false, error: 'Please enter a valid Sitare University email address (e.g., su-23036@sitare.org).' };
    }

    const response = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        full_name: userData.fullName,
        mobile_number: userData.mobileNumber,
        email_address: email,
        password: password
      })
    });

    return { 
      success: true, 
      message: response.message,
      requiresVerification: true
    };
  } catch (error) {
    console.error('Error in signUp:', error);
    return { success: false, error: error.message || 'An error occurred during registration. Please try again.' };
  }
};

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    // Validate Sitare University email format
    if (!validateSitareEmail(email)) {
      return { success: false, error: 'Please enter a valid Sitare University email address (e.g., su-23036@sitare.org).' };
    }

    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    // Store user session
    const userData = response.user;
    const isUserAdmin = isAdmin(email);
    userData.isAdmin = isUserAdmin;
    
    localStorage.setItem('foundersForumUser', JSON.stringify(userData));
    localStorage.setItem('foundersForumToken', response.access_token);
    
    return { success: true, data: userData };
  } catch (error) {
    console.error('Error in signIn:', error);
    return { success: false, error: error.message || 'An error occurred during login. Please try again.' };
  }
};

// Logout
export const logout = async () => {
  try {
    localStorage.removeItem('foundersForumUser');
    localStorage.removeItem('foundersForumToken');
    return { success: true };
  } catch (error) {
    console.error('Error in logout:', error);
    return { success: false, error: 'An error occurred during logout.' };
  }
};

// Get user profile
export const getUserProfile = async (email) => {
  try {
    const response = await apiRequest('/members/me');
    return { success: true, data: response };
  } catch (error) {
    console.error('Error getting user profile:', error);
    return { success: false, error: 'An error occurred while fetching user profile.' };
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const user = localStorage.getItem('foundersForumUser');
  const token = localStorage.getItem('foundersForumToken');
  return !!(user && token);
};

// Check if user is admin
export const isAdmin = (email) => {
  return ADMIN_EMAILS.includes(email);
};

// Get current user from localStorage
export const getCurrentUserFromStorage = () => {
  const user = localStorage.getItem('foundersForumUser');
  return user ? JSON.parse(user) : null;
};

// Request password reset
export const requestPasswordReset = async (email) => {
  try {
    if (!validateSitareEmail(email)) {
      return { success: false, error: 'Please enter a valid Sitare University email address.' };
    }

    const response = await apiRequest('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email: email })
    });

    return { success: true, message: response.message };
  } catch (error) {
    console.error('Error requesting password reset:', error);
    return { success: false, error: error.message || 'An error occurred while requesting password reset.' };
  }
};

// Update password
export const changePassword = async (newPassword) => {
  try {
    const response = await apiRequest('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ new_password: newPassword })
    });

    return { success: true, message: response.message };
  } catch (error) {
    console.error('Error changing password:', error);
    return { success: false, error: error.message || 'An error occurred while changing password.' };
  }
};

// Email verification
export const verifyEmail = async (token) => {
  try {
    const response = await apiRequest('/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify({ token: token })
    });

    return { success: true, message: response.message };
  } catch (error) {
    console.error('Error verifying email:', error);
    return { success: false, error: error.message || 'An error occurred during email verification.' };
  }
};
