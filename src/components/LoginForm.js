import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, validateSitareEmail } from '../utils/authService';

const LoginForm = ({ onLoginSuccess, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateSitareEmail(value)) {
      setEmailError('Please enter a valid Sitare University email address (e.g., su-24066@sitare.org)');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError('');
    setMessage('');

    try {
      const result = await signIn(email, password);
      
      if (result.success) {
        setMessage('Login successful! Welcome back.');
        
        // Call success callback
        if (onLoginSuccess) {
          onLoginSuccess(result.data);
        }

        // Reset form
        setEmail('');
        setPassword('');
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handlePasswordReset = () => {
    // Navigate to forgot password page
    navigate('/forgot-password');
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-secondary-900 mb-2">Login to Your Account</h2>
        <p className="text-secondary-600">Enter your Sitare University email and password</p>
      </div>

      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg mb-4">
          {message}
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="loginEmail" className="block text-sm font-semibold text-secondary-700 mb-2">
            Sitare University Email Address *
          </label>
          <input
            type="email"
            id="loginEmail"
            name="loginEmail"
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="su-23036@sitare.org"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <p className="text-xs text-secondary-500 mt-1">
            Only Sitare University email addresses are allowed
          </p>
          {emailError && (
            <p className="text-xs text-red-500 mt-1">
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="loginPassword" className="block text-sm font-semibold text-secondary-700 mb-2">
            Password *
          </label>
          <input
            type="password"
            id="loginPassword"
            name="loginPassword"
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <button 
          type="submit"
          disabled={isLoggingIn || emailError || !email || !password}
          className={`w-full btn btn-primary btn-large ${
            isLoggingIn || emailError || !email || !password ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoggingIn ? 'Logging In...' : 'Login'}
        </button>

        <div className="text-center">
          <button 
            type="button"
            onClick={handlePasswordReset}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Forgot your password?
          </button>
        </div>

        {onClose && (
          <button 
            type="button"
            onClick={onClose}
            className="w-full btn btn-outline btn-large"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
