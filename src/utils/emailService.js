// Email service for sending welcome emails to new club members
// Using FastAPI backend email functionality

export const sendWelcomeEmail = async (memberData) => {
  try {
    // This is a placeholder for email functionality
    // In a real implementation, you would:
    // 1. Use FastAPI backend email service, or
    // 2. Integrate with a third-party email service like SendGrid
    
    const emailContent = {
      to: memberData.emailAddress,
      subject: 'Welcome to The Founders Forum Club! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to The Founders Forum!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Building Bridges Between Ideas and Action</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Hello ${memberData.fullName}! 👋</h2>
            
            <p style="color: #555; line-height: 1.6;">
              Congratulations! You have successfully joined The Founders Forum Club at Sitare University. 
              As a Sitare University student, you're now part of a dynamic community dedicated to empowering 
              students with the skills, mindset, and network to thrive in today's startup ecosystem.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
              <ul style="color: #555; line-height: 1.6;">
                <li>📧 You'll receive updates about upcoming events and workshops</li>
                <li>🤝 Connect with fellow entrepreneurs and industry professionals</li>
                <li>💡 Access exclusive resources and mentorship opportunities</li>
                <li>🚀 Participate in startup pitch competitions and case studies</li>
              </ul>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #764ba2;">
              <h3 style="color: #333; margin-top: 0;">Stay Connected</h3>
              <p style="color: #555; margin-bottom: 10px;">
                <strong>Email:</strong> foundersforumclub@gmail.com<br>
                <strong>Phone:</strong> +91 9982385483<br>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/foundersforumclub/" style="color: #667eea;">Founder's Forum</a>
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              We're excited to have you on board and can't wait to see the amazing things you'll accomplish 
              as part of our community!
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
Welcome to The Founders Forum!

Hello ${memberData.fullName}!

Congratulations! You have successfully joined The Founders Forum Club at Sitare University. 
As a Sitare University student, you're now part of a dynamic community dedicated to empowering 
students with the skills, mindset, and network to thrive in today's startup ecosystem.

What's Next?
- You'll receive updates about upcoming events and workshops
- Connect with fellow entrepreneurs and industry professionals
- Access exclusive resources and mentorship opportunities
- Participate in startup pitch competitions and case studies

Stay Connected:
Email: foundersforumclub@gmail.com
Phone: +91 9982385483
LinkedIn: https://www.linkedin.com/company/foundersforumclub/

We're excited to have you on board and can't wait to see the amazing things you'll accomplish 
as part of our community!

Best regards,
The Founders Forum Team
Sitare University
      `
    };

    // For now, we'll just log the email content
    // In production, you would send this via your email service
    console.log('Welcome email would be sent:', emailContent);
    
    // Simulate email sending success
    return { success: true, message: 'Welcome email sent successfully' };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
};

// Function to send notification to club administrators
export const sendAdminNotification = async (memberData) => {
  try {
    const adminEmail = 'foundersforumclub@gmail.com';
    
    const emailContent = {
      to: adminEmail,
      subject: 'New Member Joined: The Founders Forum Club',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">New Club Member Registration</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${memberData.fullName}</p>
            <p><strong>Email:</strong> ${memberData.emailAddress}</p>
            <p><strong>Mobile:</strong> ${memberData.mobileNumber}</p>
            <p><strong>Joined:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    console.log('Admin notification would be sent:', emailContent);
    return { success: true, message: 'Admin notification sent successfully' };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false, error: error.message };
  }
};
