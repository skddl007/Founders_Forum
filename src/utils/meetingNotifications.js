import { getAllClubMembers, getUpcomingMeetings } from './meetingService';

// Send meeting reminder email
export const sendMeetingReminder = async (meeting, recipients) => {
  try {
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

    const emailContent = {
      subject: `Reminder: ${meeting.title} - Tomorrow`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">The Founders Forum</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Meeting Reminder</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Meeting Tomorrow!</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #667eea; margin-top: 0;">${meeting.title}</h3>
              <p style="color: #555; margin: 10px 0;"><strong>Date:</strong> ${meetingDate}</p>
              <p style="color: #555; margin: 10px 0;"><strong>Time:</strong> ${meetingTime}</p>
              <p style="color: #555; margin: 10px 0;"><strong>Location:</strong> ${meeting.location}</p>
              ${meeting.description ? `<p style="color: #555; margin: 10px 0;"><strong>Description:</strong> ${meeting.description}</p>` : ''}
            </div>
            
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #856404; margin: 0; font-size: 14px;">
                <strong>Important:</strong> Please arrive 10 minutes before the scheduled time. Attendance will be marked at the beginning of the meeting.
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              We look forward to seeing you at the meeting!
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              Best regards,<br>
              <strong>The Founders Forum Team</strong><br>
              Sitare University
            </p>
          </div>
        </div>
      `,
      text: `
The Founders Forum - Meeting Reminder

Meeting Tomorrow: ${meeting.title}

Date: ${meetingDate}
Time: ${meetingTime}
Location: ${meeting.location}
${meeting.description ? `Description: ${meeting.description}` : ''}

Important: Please arrive 10 minutes before the scheduled time. Attendance will be marked at the beginning of the meeting.

We look forward to seeing you at the meeting!

Best regards,
The Founders Forum Team
Sitare University
      `
    };

    // For now, we'll just log the email content
    // In production, you would send this via your email service
    console.log('Meeting reminder email would be sent to:', recipients.length, 'recipients');
    console.log('Email content:', emailContent);
    
    return { success: true, message: `Meeting reminder sent to ${recipients.length} recipients` };
  } catch (error) {
    console.error('Error sending meeting reminder:', error);
    return { success: false, error: error.message };
  }
};

// Send meeting cancellation email
export const sendMeetingCancellation = async (meeting, recipients) => {
  try {
    const meetingDate = new Date(meeting.meeting_date).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailContent = {
      subject: `CANCELLED: ${meeting.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">The Founders Forum</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Meeting Cancelled</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Meeting Cancelled</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc3545;">
              <h3 style="color: #dc3545; margin-top: 0;">${meeting.title}</h3>
              <p style="color: #555; margin: 10px 0;"><strong>Date:</strong> ${meetingDate}</p>
              <p style="color: #555; margin: 10px 0;"><strong>Location:</strong> ${meeting.location}</p>
              ${meeting.cancellation_reason ? `<p style="color: #555; margin: 10px 0;"><strong>Reason:</strong> ${meeting.cancellation_reason}</p>` : ''}
            </div>
            
            <div style="background: #f8d7da; border: 1px solid #f5c6cb; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #721c24; margin: 0; font-size: 14px;">
                <strong>Notice:</strong> This meeting has been cancelled. No attendance will be marked for this meeting.
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              We apologize for any inconvenience. The next meeting will be announced soon.
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              Best regards,<br>
              <strong>The Founders Forum Team</strong><br>
              Sitare University
            </p>
          </div>
        </div>
      `,
      text: `
The Founders Forum - Meeting Cancelled

CANCELLED: ${meeting.title}

Date: ${meetingDate}
Location: ${meeting.location}
${meeting.cancellation_reason ? `Reason: ${meeting.cancellation_reason}` : ''}

Notice: This meeting has been cancelled. No attendance will be marked for this meeting.

We apologize for any inconvenience. The next meeting will be announced soon.

Best regards,
The Founders Forum Team
Sitare University
      `
    };

    // For now, we'll just log the email content
    console.log('Meeting cancellation email would be sent to:', recipients.length, 'recipients');
    console.log('Email content:', emailContent);
    
    return { success: true, message: `Meeting cancellation sent to ${recipients.length} recipients` };
  } catch (error) {
    console.error('Error sending meeting cancellation:', error);
    return { success: false, error: error.message };
  }
};

// Get all recipients for meeting notifications
export const getMeetingRecipients = async () => {
  try {
    const membersResult = await getAllClubMembers();
    if (!membersResult.success) {
      throw new Error('Failed to fetch club members');
    }

    // Get all active members and admins
    const recipients = membersResult.data
      .filter(member => member.status === 'active')
      .map(member => ({
        email: member.email_address,
        name: member.full_name,
        isAdmin: [
          'ashwini@sitare.org',
          'su-22010@sitare.org',
          'su-23036@sitare.org',
          'su-24066@sitare.org',
          'su-24038@sitare.org',
          'su-24084@sitare.org',
          'su-24114@sitare.org'
        ].includes(member.email_address)
      }));

    return { success: true, data: recipients };
  } catch (error) {
    console.error('Error getting meeting recipients:', error);
    return { success: false, error: error.message };
  }
};

// Check if meeting reminder should be sent (1 day before meeting)
export const shouldSendMeetingReminder = (meeting) => {
  const meetingDate = new Date(meeting.meeting_date);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Compare dates only (ignore time)
  const meetingDateOnly = meetingDate.toISOString().split('T')[0];
  const tomorrowOnly = tomorrow.toISOString().split('T')[0];
  
  return meetingDateOnly === tomorrowOnly && !meeting.is_cancelled;
};

// Get next Sunday meeting
export const getNextSundayMeeting = async () => {
  try {
    const meetingsResult = await getUpcomingMeetings();
    if (!meetingsResult.success) {
      throw new Error('Failed to fetch upcoming meetings');
    }

    const today = new Date();
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + (7 - today.getDay() + 0) % 7);
    
    const nextSundayOnly = nextSunday.toISOString().split('T')[0];
    
    const nextMeeting = meetingsResult.data.find(meeting => 
      meeting.meeting_date === nextSundayOnly && !meeting.is_cancelled
    );

    return { success: true, data: nextMeeting };
  } catch (error) {
    console.error('Error getting next Sunday meeting:', error);
    return { success: false, error: error.message };
  }
};

