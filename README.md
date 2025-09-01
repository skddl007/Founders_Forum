# Founders Forum

A modern, responsive web application for managing and connecting startup founders and entrepreneurs. Built with React and Supabase, featuring a comprehensive dashboard, user management, and community features.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/founders-forum)

### One-Click Deployment
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Set environment variables:
   - `REACT_APP_API_BASE_URL`: Your backend API URL
4. Click "Deploy"

### Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 💬 Join Our WhatsApp Community

Stay connected with fellow entrepreneurs and get real-time updates!

[![Join WhatsApp Group](https://img.shields.io/badge/WhatsApp-Join%20Group-green?style=for-the-badge&logo=whatsapp)](https://chat.whatsapp.com/JxZfk1pSxXA5vXMbuCB9Vw)

**Why Join?**
- 📱 **Real-time Updates**: Get instant notifications about events and meetings
- 🤝 **Network**: Connect with other startup founders and entrepreneurs
- 💡 **Share Ideas**: Discuss innovative concepts and get feedback
- 📚 **Learn**: Access exclusive resources and mentorship opportunities
- 🚀 **Collaborate**: Find potential co-founders and team members

**Group Guidelines:**
- Be respectful and professional
- Share relevant startup and entrepreneurship content
- No spam or promotional messages
- Help fellow members with questions and advice

## 🚀 Features

### Core Functionality
- **User Authentication & Authorization** - Secure login/signup with email verification
- **Dashboard System** - Separate dashboards for students and administrators
- **Community Management** - Team profiles, activities, and member directory
- **Notification System** - Real-time notifications and announcements
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### Pages & Components
- **Home** - Landing page with key information and call-to-action
- **About** - Organization overview and mission statement
- **Vision** - Strategic vision and goals
- **Activities** - Events, workshops, and community activities
- **Team** - Member profiles and leadership information
- **Contact** - Contact forms and information
- **Join** - Registration and membership application
- **Dashboard** - User-specific dashboard with personalized content
- **Admin** - Administrative panel for user and content management

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM 7.8.2
- **Styling**: Tailwind CSS 3.4.0
- **Backend**: Supabase (Authentication & Database)
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Deployment**: Vercel

### Key Dependencies
- `@supabase/supabase-js` - Supabase client for backend integration
- `react-router-dom` - Client-side routing
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/forms` - Form styling utilities
- `@tailwindcss/typography` - Typography utilities

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Supabase account and project

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd founders-forum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with your Supabase credentials:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
founders-forum/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.js       # Navigation header
│   │   ├── Footer.js       # Site footer
│   │   ├── LoginForm.js    # Authentication forms
│   │   ├── Dashboard.js    # Dashboard components
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.js        # Landing page
│   │   ├── About.js       # About page
│   │   ├── Dashboard.js   # User dashboard
│   │   └── ...
│   ├── utils/             # Utility functions
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vercel.json           # Vercel deployment configuration
└── README.md             # Project documentation
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Build and deploy to Vercel production
- `npm run deploy:preview` - Build and deploy to Vercel preview
- `npm run analyze` - Analyze bundle size
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🎨 Styling

The application uses Tailwind CSS for styling with custom configurations:
- **Forms**: Enhanced form styling with `@tailwindcss/forms`
- **Typography**: Rich text styling with `@tailwindcss/typography`
- **Responsive Design**: Mobile-first responsive layout
- **Custom Components**: Reusable UI components with consistent styling

## 🔐 Authentication

The application implements a comprehensive authentication system:
- **Email/Password Authentication** via Supabase
- **Email Verification** for new accounts
- **Password Reset** functionality
- **Session Management** with localStorage
- **Protected Routes** for authenticated users

## 📱 User Roles

### Student Dashboard
- View personal profile and membership status
- Access community activities and events
- Manage notification preferences
- View team information and member directory

### Admin Dashboard
- User management and approval system
- Content management for pages
- Analytics and reporting
- System configuration

## 🚀 Deployment

### Vercel Deployment (Recommended)

The project is optimized for Vercel deployment with the following features:

- **Automatic Builds**: Configured for Create React App
- **Environment Variables**: Secure variable management
- **Custom Domain**: Easy domain configuration
- **SSL Certificate**: Automatic HTTPS
- **CDN**: Global content delivery
- **Analytics**: Built-in performance monitoring

### Quick Deploy Steps

1. **Fork/Clone Repository**
2. **Connect to Vercel**
3. **Set Environment Variables**
4. **Deploy**

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Alternative Hosting Platforms
- **Netlify** - Easy deployment with Git integration
- **Firebase Hosting** - Google's hosting solution
- **AWS S3 + CloudFront** - Scalable static hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions
- Join our [WhatsApp Group](https://chat.whatsapp.com/JxZfk1pSxXA5vXMbuCB9Vw) for real-time support

## 🔄 Version History

- **v0.1.0** - Initial release with core functionality
  - User authentication system
  - Dashboard implementations
  - Responsive design
  - Community features
  - Vercel deployment configuration
  - WhatsApp community integration

---

**Built with ❤️ for the startup community** 
