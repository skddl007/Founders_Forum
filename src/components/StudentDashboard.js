import React, { useState, useEffect } from 'react';
import { getCurrentUserFromStorage, logout } from '../utils/authService';
import { getMemberAttendanceHistory, getUpcomingMeetings } from '../utils/meetingService';

const StudentDashboard = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);

  useEffect(() => {
    const currentUser = getCurrentUserFromStorage();
    if (currentUser) {
      setUser(currentUser);
      fetchAttendanceHistory(currentUser.id);
      fetchUpcomingMeetings();
    }
  }, []);

  const fetchAttendanceHistory = async (memberId) => {
    try {
      const result = await getMemberAttendanceHistory(memberId);
      if (result.success) {
        setAttendanceHistory(result.data || []);
      }
    } catch (error) {
      console.error('Error fetching attendance history:', error);
    }
  };

  const fetchUpcomingMeetings = async () => {
    try {
      const result = await getUpcomingMeetings();
      if (result.success) {
        setUpcomingMeetings(result.data || []);
      }
    } catch (error) {
      console.error('Error fetching upcoming meetings:', error);
    }
  };

  const handleLogout = () => {
    logout();
    if (onLogout) {
      onLogout();
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="mt-1 text-gray-600">Welcome back, {user.full_name}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">{user.email_address}</p>
                <p className="text-xs text-gray-500">Member since {formatDate(user.joined_at)}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'attendance', name: 'Attendance', icon: '📅' },
              { id: 'competitions', name: 'Competitions', icon: '🏆' },
              { id: 'events', name: 'Events', icon: '🎪' },
              { id: 'profile', name: 'Profile', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Events Attended</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Competitions</p>
                    <p className="text-2xl font-semibold text-gray-900">3</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Workshops</p>
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Points Earned</p>
                    <p className="text-2xl font-semibold text-gray-900">450</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Attended Financial Literacy Workshop</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">🏆</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Participated in Startup Pitch Competition</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 text-sm">📚</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Completed Entrepreneurship Course</p>
                      <p className="text-sm text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Sunday Meeting Attendance</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Attendance Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">
                        {attendanceHistory.filter(a => a.status === 'present').length}
                      </p>
                      <p className="text-sm text-green-700">Present</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-600">
                        {attendanceHistory.filter(a => a.status === 'absent').length}
                      </p>
                      <p className="text-sm text-red-700">Absent</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-600">
                        {attendanceHistory.filter(a => a.status === 'late').length}
                      </p>
                      <p className="text-sm text-yellow-700">Late</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-600">
                        {attendanceHistory.filter(a => a.status === 'excused').length}
                      </p>
                      <p className="text-sm text-gray-700">Excused</p>
                    </div>
                  </div>
                </div>

                {/* Attendance History */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Attendance History</h4>
                  <div className="space-y-4">
                    {attendanceHistory.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No attendance records found.</p>
                      </div>
                    ) : (
                      attendanceHistory.map((record, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{record.meetings?.title || 'Sunday Meeting'}</p>
                            <p className="text-sm text-gray-500">
                              {formatDate(record.meetings?.meeting_date || record.created_at)}
                            </p>
                            <p className="text-xs text-gray-400">{record.meetings?.location}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            record.status === 'present' 
                              ? 'bg-green-100 text-green-800'
                              : record.status === 'absent'
                              ? 'bg-red-100 text-red-800'
                              : record.status === 'late'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Upcoming Meetings */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Upcoming Sunday Meetings</h4>
                  <div className="space-y-4">
                    {upcomingMeetings.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No upcoming Sunday meetings scheduled.</p>
                      </div>
                    ) : (
                      upcomingMeetings.map((meeting, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2">{meeting.title}</h5>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span>📅 {formatDate(meeting.meeting_date)}</span>
                            <span>⏰ {new Date(`2000-01-01T${meeting.meeting_time}`).toLocaleTimeString('en-IN', {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true
                            })}</span>
                            <span>📍 {meeting.location}</span>
                          </div>
                          {meeting.description && (
                            <p className="text-sm text-gray-600 mb-3">{meeting.description}</p>
                          )}
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-sm text-blue-700">
                              <strong>Reminder:</strong> Please arrive 10 minutes before the scheduled time. Attendance will be marked at the beginning of the meeting.
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'competitions' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Competitions & Achievements</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Startup Pitch Competition</h4>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Winner</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Presented innovative business idea and won first place</p>
                  <p className="text-xs text-gray-500">January 10, 2024</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Financial Analysis Challenge</h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Runner-up</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Analyzed real-world financial data and provided insights</p>
                  <p className="text-xs text-gray-500">December 20, 2023</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Business Case Study</h4>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Participated</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Participated in case study analysis and presentation</p>
                  <p className="text-xs text-gray-500">December 15, 2023</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { event: 'Advanced Financial Modeling Workshop', date: '2024-01-25', time: '2:00 PM', location: 'Room 301' },
                  { event: 'Industry Networking Session', date: '2024-01-30', time: '4:00 PM', location: 'Conference Hall A' },
                  { event: 'Innovation Hackathon', date: '2024-02-05', time: '10:00 AM', location: 'Computer Lab' }
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{item.event}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>📅 {formatDate(item.date)}</span>
                      <span>⏰ {item.time}</span>
                      <span>📍 {item.location}</span>
                    </div>
                    <button className="mt-3 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm">
                      Register for Event
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <p className="mt-1 text-sm text-gray-900">{user.full_name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <p className="mt-1 text-sm text-gray-900">{user.email_address}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <p className="mt-1 text-sm text-gray-900">{user.mobile_number}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Member Since</label>
                  <p className="mt-1 text-sm text-gray-900">{formatDate(user.joined_at)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <span className="mt-1 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
