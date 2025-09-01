// Faculty Advisor
export const facultyAdvisor = {
  name: 'Dr. Ashwini Kumar Singh',
  role: 'Faculty Advisor',
  email: 'ashwini@sitare.org',
  description: "As Faculty Advisor, Dr. Ashwini Singh, Ph.D., empowers our club with a founder's mindset rooted in research, innovation, and leadership. With global experience from King's College London to his current role at Sitare University, he guides students in transforming ideas into ventures, fostering entrepreneurial thinking, and building bridges between academia and the startup ecosystem.",
  image: '/Ashwini.jpg',
  expertise: ['Entrepreneurship Education', 'Strategic Planning', 'Academic Partnerships']
};

// Student Team Members (excluding faculty advisor)
export const studentTeamMembers = [
  {
    name: 'Nagmani Kumar',
    role: 'Founder',
    email: 'su-22010@sitare.org',
    description: "As the visionary founder of The Founders Forum, Nagmani Kumar brings a strong entrepreneurial spirit and a passion for building communities that inspire innovation. A student leader and strategist, he established the forum to cultivate a startup mindset, empower peers to pursue bold ideas, and create a platform where future founders can thrive.",
    image: '/nagmani.jpg',
    expertise: ['Club Founding', 'Startup Leadership', 'Entrepreneurship', 'Innovation', 'Student Leadership']        
  },
  {
    name: 'Sandeep Kumar',
    role: 'Secretary',
    email: 'su-23036@sitare.org',
    description: "As Secretary of The Founders Forum, Sandeep Kumar drives the club's vision of fostering entrepreneurship and innovation among students. He focuses on building strong member engagement, streamlining operations, and enabling a culture where bold ideas evolve into impactful ventures. With a passion for startups and strategy, he ensures the forum remains a launchpad for aspiring founders.",
    image: '/sandeep.jpg',
    expertise: ['Club Operations', 'Member Engagement', 'Startup Strategy', 'Innovation', 'Community Building']    
  },
  {
    name: 'Kuldeep Saraswat',
    role: 'Coordinator',
    email: 'su-24066@sitare.org',
    description: "Kuldeep Saraswat, Coordinator at The Founders Forum, is passionate about leveraging technology and collaboration to drive meaningful change. With a strong foundation in computer science and hands-on experience in innovation projects like the Smart India Hackathon, he brings energy and vision to organizing programs that inspire creativity, foster community, and nurture the next generation of student founders.",
    image: '/kuldeep.jpg',
    expertise: ['Event Management', 'Community Building', 'Innovation Programs', 'Student Leadership']    
  },
  {
    name: 'Debangsu Misra',
    role: 'Sub-Coordinator',
    email: 'su-24038@sitare.org',
    description: 'As Sub-Coordinator, Debangsu specializes in financial education and investment strategies, bringing valuable expertise to The Founders Forum. He leads our financial literacy workshops, investment awareness programs, and mentoring initiatives, helping members develop essential financial skills for entrepreneurship. His focus on financial planning and investment strategies ensures our community is well-equipped to make informed business decisions.',
    image: '/debangsu.jpg',
    expertise: ['Financial Literacy', 'Investment Strategies', 'Mentoring Programs', 'Financial Planning']
  },
  {
    name: 'Neeraj Parmar',
    role: 'Event Manager',
    email: 'su-24084@sitare.org',
    description: 'As Event Manager, Neeraj specializes in planning, organizing, and executing impactful events that bring our community together. He coordinates workshops, seminars, networking sessions, and industry meetups, ensuring each event creates meaningful connections and learning opportunities for our members.',
    image: '/neeraj.jpg',
    expertise: ['Event Planning', 'Event Coordination', 'Networking Events', 'Workshop Management']
  },
  {
    name: 'Ravi Rajput',
    role: 'Media Manager',
    email: 'su-24114@sitare.org',
    description: 'As Media Manager, Ravi oversees all digital communications and content creation for The Founders Forum. He manages our social media presence, creates engaging content, handles website updates, and ensures our brand message reaches the right audience through various digital platforms.',
    image: '/ravi.jpg',
    expertise: ['Digital Marketing', 'Content Creation', 'Social Media Management', 'Brand Communication']
  }
];

// Legacy export for backward compatibility
export const teamMembers = [facultyAdvisor, ...studentTeamMembers];

// Main leadership team (first 3 student members)
export const mainTeamMembers = studentTeamMembers.slice(0, 3);

// Sub-coordinators (last 3 student members)
export const subCoordinators = studentTeamMembers.slice(3);

// Club Social Media and Contact Information
export const clubSocialMedia = {
  linkedin: {
    url: 'https://www.linkedin.com/company/foundersforumclub/',
    displayName: 'Founder\'s Forum',
    followers: '102 followers',
    description: 'Building Bridges Between Ideas and Action'
  },
  website: {
    url: 'https://foundersforumclub.onrender.com',
    displayName: 'Founders Forum Website'
  }
};

// Club Information from LinkedIn
export const clubInfo = {
  tagline: 'Building Bridges Between Ideas and Action',
  description: 'Startups and Businesses Club at Sitare University - A dynamic community dedicated to empowering students with the skills, mindset, and network to thrive in today\'s startup ecosystem.',
  activities: [
    'Introductory Sessions',
    'Startup Pitch Competitions', 
    'Case Study Sessions',
    'Panel Discussions and Debates',
    'Collaboration Projects',
    'Guest Speaker Series & Networking Events',
    'Finance in Business Workshops'
  ],
  industry: 'Technology, Information and Internet',
  companySize: '2-10 employees',
  type: 'Educational',
  founded: '2023'
};
