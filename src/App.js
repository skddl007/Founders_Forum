import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getCurrentUserFromStorage, isAuthenticated } from './utils/authService';
import Header from './components/Header';
import Footer from './components/Footer';
import NotificationManager from './components/NotificationManager';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Activities from './pages/Activities';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import EmailVerification from './components/EmailVerification';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Join from './pages/Join';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get initial user from localStorage
    const currentUser = getCurrentUserFromStorage();
    if (currentUser && isAuthenticated()) {
      setUser(currentUser);
    }

    // Listen for storage changes (when user logs in/out)
    const handleStorageChange = (e) => {
      if (e.key === 'foundersForumUser' || e.key === 'foundersForumToken') {
        const currentUser = getCurrentUserFromStorage();
        if (currentUser && isAuthenticated()) {
          setUser(currentUser);
        } else {
          setUser(null);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes in the same window
    const checkAuthStatus = () => {
      const currentUser = getCurrentUserFromStorage();
      if (currentUser && isAuthenticated()) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    };

    // Check auth status periodically
    const interval = setInterval(checkAuthStatus, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </main>
        <Footer />
        {user && <NotificationManager user={user} />}
      </div>
    </Router>
  );
}

export default App;
