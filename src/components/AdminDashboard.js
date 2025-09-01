import React, { useState, useEffect } from 'react';
import { getAllClubMembers, getAllMeetings, getUpcomingMeetings, createMeeting, cancelMeeting, markAttendanceInDB } from '../utils/meetingService';
import { logout, getCurrentUserFromStorage } from '../utils/authService';
import { sendMeetingReminder, sendMeetingCancellation, getMeetingRecipients } from '../utils/meetingNotifications';
import NotificationManagement from './NotificationManagement';

const AdminDashboard = ({ onLogout }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [meetings, setMeetings] = useState([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [isMarkingAttendance, setIsMarkingAttendance] = useState(false);

  useEffect(() => {
    fetchMembers();
    fetchMeetings();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const result = await getAllClubMembers();
      if (result.success) {
        setMembers(result.data || []);
      } else {
        console.error('Failed to fetch members:', result.error);
      }
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    if (onLogout) {
      onLogout();
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredMembers = members.filter(member =>
    member.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email_address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchMeetings = async () => {
    try {
      const [meetingsResult, upcomingResult] = await Promise.all([
        getAllMeetings(),
        getUpcomingMeetings()
      ]);
      
      if (meetingsResult.success) {
        setMeetings(meetingsResult.data || []);
      }
      
      if (upcomingResult.success) {
        setUpcomingMeetings(upcomingResult.data || []);
      }

      // Check if we need to create next Sunday meeting
      await checkAndCreateNextSundayMeeting();
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };

  // Function to get next Sunday date
  const getNextSunday = () => {
    const today = new Date();
    const nextSunday = new Date(today);
    const daysUntilSunday = (7 - today.getDay()) % 7;
    nextSunday.setDate(today.getDate() + daysUntilSunday);
    return nextSunday.toISOString().split('T')[0]; // Return YYYY-MM-DD format
  };

  // Function to check and create next Sunday meeting if it doesn't exist
  const checkAndCreateNextSundayMeeting = async () => {
    try {
      const nextSunday = getNextSunday();
      
      // Check if meeting already exists for next Sunday
      const existingMeeting = meetings.find(m => m.meeting_date === nextSunday);
      
      if (!existingMeeting) {
        // Create automatic meeting for next Sunday
        const meetingData = {
          meeting_date: nextSunday,
          meeting_time: '10:00:00', // Default time: 10:00 AM
          title: `Sunday Meeting - ${new Date(nextSunday).toLocaleDateString('en-IN', {
            month: 'long',
            day: 'numeric'
          })}`,
          description: 'Weekly Sunday meeting for The Founders Forum members.',
          location: 'Room 301' // Default location
        };

        const result = await createMeeting(meetingData);
        if (result.success) {
          console.log('Automatically created next Sunday meeting:', result.data);
          // Refresh meetings list
          fetchMeetings();
        }
      }
    } catch (error) {
      console.error('Error creating next Sunday meeting:', error);
    }
  };



  // Check if attendance marking is allowed for a meeting (must be on or after Aug 31, 2025)
  const isAttendanceMarkingAllowed = (meetingDate) => {
    const attendanceStartDate = new Date('2025-08-31T00:00:00+05:30'); // Indian timezone
    const meetingDateTime = new Date(meetingDate);
    return meetingDateTime >= attendanceStartDate;
  };

  const handleCancelMeeting = async (meetingId, reason) => {
    try {
      const result = await cancelMeeting(meetingId, reason);
      if (result.success) {
        // Send cancellation email to all members
        const recipientsResult = await getMeetingRecipients();
        if (recipientsResult.success) {
          const meeting = meetings.find(m => m.id === meetingId);
          await sendMeetingCancellation(meeting, recipientsResult.data);
        }
        fetchMeetings();
      }
    } catch (error) {
      console.error('Error cancelling meeting:', error);
    }
  };

  const handleSendMeetingReminder = async (meeting) => {
    try {
      const recipientsResult = await getMeetingRecipients();
      if (recipientsResult.success) {
        const result = await sendMeetingReminder(meeting, recipientsResult.data);
        if (result.success) {
          alert('Meeting reminder sent successfully!');
        }
      }
    } catch (error) {
      console.error('Error sending meeting reminder:', error);
    }
  };

  const markAttendance = async (memberId, meetingId, status) => {
    try {
      // Find the meeting to check its date
      const meeting = meetings.find(m => m.id === meetingId);
      if (!meeting) {
        alert('Meeting not found!');
        return;
      }

      // Check if attendance marking is allowed for this meeting date
      if (!isAttendanceMarkingAllowed(meeting.meeting_date)) {
        alert('Attendance marking is only allowed for meetings on or after August 31, 2025.');
        return;
      }

      setIsMarkingAttendance(true);
      const attendanceData = {
        meeting_id: meetingId,
        member_id: memberId,
        status: status,
        marked_by: getCurrentUserFromStorage()?.id
      };
      
      const result = await markAttendanceInDB(attendanceData);
      if (result.success) {
        // Show success message based on status
        const statusMessages = {
          'present': 'Marked as Present',
          'absent': 'Marked as Absent',
          'late': 'Marked as Late',
          'excused': 'Marked as Excused'
        };
        alert(`${statusMessages[status]} successfully!`);
      }
    } catch (error) {
      console.error('Error marking attendance:', error);
      alert('Error marking attendance. Please try again.');
    } finally {
      setIsMarkingAttendance(false);
    }
  };

  // Function to mark all students as present by default
  const markAllAsPresent = async (meetingId) => {
    try {
      const meeting = meetings.find(m => m.id === meetingId);
      if (!meeting) {
        alert('Meeting not found!');
        return;
      }

      if (!isAttendanceMarkingAllowed(meeting.meeting_date)) {
        alert('Attendance marking is only allowed for meetings on or after August 31, 2025.');
        return;
      }

      setIsMarkingAttendance(true);
      
      // Mark all members as present
      const attendancePromises = members.map(member => {
        const attendanceData = {
          meeting_id: meetingId,
          member_id: member.id,
          status: 'present',
          marked_by: getCurrentUserFromStorage()?.id
        };
        return markAttendanceInDB(attendanceData);
      });

      await Promise.all(attendancePromises);
      alert('All students marked as Present by default!');
      
    } catch (error) {
      console.error('Error marking all as present:', error);
      alert('Error marking attendance. Please try again.');
    } finally {
      setIsMarkingAttendance(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="mt-1 text-gray-600">Manage The Founders Forum Club</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Administrator Access</span>
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
              { id: 'members', name: 'Members', icon: '👥' },
              { id: 'attendance', name: 'Attendance', icon: '📅' },
              { id: 'events', name: 'Events', icon: '🎪' },
              { id: 'notifications', name: 'Notifications', icon: '🔔' },
              { id: 'reports', name: 'Reports', icon: '📈' }
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
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Members</p>
                    <p className="text-2xl font-semibold text-gray-900">{members.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Members</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {members.filter(m => m.status === 'active').length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">This Month</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {members.filter(m => {
                        const joinDate = new Date(m.joined_at);
                        const now = new Date();
                        return joinDate.getMonth() === now.getMonth() && 
                               joinDate.getFullYear() === now.getFullYear();
                      }).length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <span className="text-2xl">🎪</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                    <p className="text-2xl font-semibold text-gray-900">3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Members */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Members</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {members.slice(0, 5).map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{member.full_name}</p>
                        <p className="text-sm text-gray-500">{member.email_address}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Joined {formatDate(member.joined_at)}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          member.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {member.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">All Members</h3>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    onClick={fetchMembers}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mobile
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Joined
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMembers.map((member) => (
                      <tr key={member.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{member.full_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{member.email_address}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{member.mobile_number}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(member.joined_at)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            member.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-gray-600 hover:text-gray-900">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Sunday Meeting Attendance</h3>
                <div className="text-sm text-gray-600">
                  <p>Meetings are automatically created for each Sunday</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {upcomingMeetings.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No upcoming Sunday meetings scheduled.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingMeetings.map((meeting) => {
                      const meetingDate = new Date(meeting.meeting_date).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      });
                      
                      const meetingTime = new Date(`2000-01-01T${meeting.meeting_time}`).toLocaleTimeString('en-IN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      });

                      return (
                        <div key={meeting.id} className="border rounded-lg p-4">
                                                     <div className="flex justify-between items-start mb-2">
                             <h4 className="font-medium text-gray-900">{meeting.title}</h4>
                             <div className="flex space-x-1">
                               {meeting.is_cancelled && (
                                 <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                                   Cancelled
                                 </span>
                               )}
                               {!meeting.is_cancelled && !isAttendanceMarkingAllowed(meeting.meeting_date) && (
                                 <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                   No Attendance
                                 </span>
                               )}
                             </div>
                           </div>
                          <p className="text-sm text-gray-600 mb-2">{meetingDate} • {meetingTime}</p>
                          <p className="text-sm text-gray-600 mb-4">{meeting.location}</p>
                          
                                                                                {!meeting.is_cancelled && (
                             <div className="space-y-2">
                               <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mb-2">
                                 <p className="text-blue-800 text-xs text-center">
                                   ✓ Automatically Created
                                 </p>
                               </div>
                               {isAttendanceMarkingAllowed(meeting.meeting_date) ? (
                                 <button 
                                   onClick={() => {
                                     setSelectedMeeting(meeting);
                                     setShowAttendanceModal(true);
                                   }}
                                   className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
                                 >
                                   Mark Attendance
                                 </button>
                               ) : (
                                 <button 
                                   disabled
                                   className="w-full bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed text-sm"
                                   title="Attendance marking starts from August 31, 2025"
                                 >
                                   Mark Attendance (Not Available)
                                 </button>
                               )}
                               <button 
                                 onClick={() => handleSendMeetingReminder(meeting)}
                                 className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                               >
                                 Send Reminder
                               </button>
                               <button 
                                 onClick={() => {
                                   const reason = prompt('Enter cancellation reason:');
                                   if (reason) {
                                     handleCancelMeeting(meeting.id, reason);
                                   }
                                 }}
                                 className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                               >
                                 Cancel Meeting
                               </button>
                             </div>
                           )}
                          
                          {meeting.is_cancelled && (
                            <div className="text-sm text-gray-500">
                              <p><strong>Reason:</strong> {meeting.cancellation_reason}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Event Management</h3>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Create New Event
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Financial Literacy Workshop', date: '2024-01-25', time: '2:00 PM', location: 'Room 301', status: 'upcoming' },
                  { name: 'Startup Pitch Competition', date: '2024-01-30', time: '4:00 PM', location: 'Conference Hall A', status: 'upcoming' },
                  { name: 'Networking Session', date: '2024-02-05', time: '6:00 PM', location: 'Auditorium', status: 'upcoming' },
                  { name: 'Guest Speaker: Tech Entrepreneurship', date: '2024-01-15', time: '3:00 PM', location: 'Room 201', status: 'completed' }
                ].map((event, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{event.name}</h4>
                        <p className="text-sm text-gray-600">
                          {formatDate(event.date)} • {event.time} • {event.location}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          event.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {event.status}
                        </span>
                        <button className="text-primary-600 hover:text-primary-900 text-sm">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <NotificationManagement />
        )}

        {activeTab === 'reports' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Reports & Analytics</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-4">Member Growth</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="text-sm font-medium">+12 members</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Month</span>
                      <span className="text-sm font-medium">+8 members</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Growth</span>
                      <span className="text-sm font-medium">+67 members</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-4">Event Attendance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Average Attendance</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Most Popular Event</span>
                      <span className="text-sm font-medium">Startup Pitch</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Events</span>
                      <span className="text-sm font-medium">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Attendance Modal */}
      {showAttendanceModal && selectedMeeting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Mark Attendance for {selectedMeeting.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {new Date(selectedMeeting.meeting_date).toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} • {new Date(`2000-01-01T${selectedMeeting.meeting_time}`).toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })}
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> All students are marked as "Present" by default. Click "Absent" only for students who are not present at the meeting.
                </p>
                <button
                  onClick={() => markAllAsPresent(selectedMeeting.id)}
                  disabled={isMarkingAttendance}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors font-medium"
                >
                  {isMarkingAttendance ? 'Marking...' : 'Mark All as Present'}
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {members.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg bg-green-50 border-green-200">
                  <div>
                    <p className="font-medium text-gray-900">{member.full_name}</p>
                    <p className="text-sm text-gray-500">{member.email_address}</p>
                    <p className="text-xs text-green-600 font-medium">✓ Present (Default)</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => markAttendance(member.id, selectedMeeting.id, 'absent')}
                      disabled={isMarkingAttendance}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors font-medium"
                    >
                      Mark Absent
                    </button>
                    <button
                      onClick={() => markAttendance(member.id, selectedMeeting.id, 'late')}
                      disabled={isMarkingAttendance}
                      className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 transition-colors font-medium"
                    >
                      Mark Late
                    </button>
                    <button
                      onClick={() => markAttendance(member.id, selectedMeeting.id, 'excused')}
                      disabled={isMarkingAttendance}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors font-medium"
                    >
                      Mark Excused
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAttendanceModal(false);
                  setSelectedMeeting(null);
                }}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default AdminDashboard;
