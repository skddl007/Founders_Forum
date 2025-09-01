# Founders Forum - Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the Founders Forum frontend to Vercel.

## 🚀 Prerequisites

- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com)
- Node.js 16+ installed locally
- Backend API deployed and accessible

## 📋 Pre-Deployment Checklist

### 1. Backend API Deployment
Ensure your FastAPI backend is deployed and accessible. You can deploy it to:
- **Railway**: https://railway.app
- **Render**: https://render.com
- **Heroku**: https://heroku.com
- **DigitalOcean App Platform**: https://digitalocean.com

### 2. Environment Variables
Prepare your environment variables:
```env
REACT_APP_API_BASE_URL=https://your-backend-api-domain.com
```

### 3. Code Preparation
- ✅ All dependencies are in `package.json`
- ✅ Build script is configured (`npm run build`)
- ✅ Static assets are in `public/` directory
- ✅ React Router is properly configured
- ✅ Environment variables are properly referenced

## 🛠️ Deployment Steps

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to project directory**
   ```bash
   cd founders-forum
   ```

4. **Deploy to Vercel**
   ```bash
   vercel
   ```

5. **Follow the prompts:**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `founders-forum` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings: `N`

6. **Set Environment Variables**
   ```bash
   vercel env add REACT_APP_API_BASE_URL
   ```
   Enter your backend API URL when prompted.

7. **Redeploy with environment variables**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `founders-forum` repository

3. **Configure Project Settings**
   - **Framework Preset**: Create React App
   - **Root Directory**: `./` (leave empty)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add `REACT_APP_API_BASE_URL` with your backend URL

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

## 🔧 Configuration Files

### vercel.json
The project includes a `vercel.json` configuration file that handles:
- Build configuration
- Routing for React Router
- Static asset serving
- Environment variable mapping

### Environment Variables
Create a `.env` file locally for development:
```env
REACT_APP_API_BASE_URL=http://localhost:8000
```

For production, set these in Vercel Dashboard:
- `REACT_APP_API_BASE_URL`: Your production backend URL

## 🌐 Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - No additional configuration needed

## 🔄 Continuous Deployment

### Automatic Deployments
- Every push to `main` branch triggers a deployment
- Preview deployments for pull requests
- Automatic rollback on failed deployments

### Manual Deployments
```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## 📊 Monitoring & Analytics

### Vercel Analytics
- Built-in performance monitoring
- Real-time analytics
- Error tracking

### Custom Analytics
Add Google Analytics or other tracking:
```javascript
// In your React app
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build locally first
   npm run build
   
   # Check Vercel build logs
   vercel logs
   ```

2. **Environment Variables Not Working**
   - Ensure variables start with `REACT_APP_`
   - Redeploy after adding environment variables
   - Check variable names in Vercel Dashboard

3. **Routing Issues**
   - Ensure `vercel.json` has proper routing configuration
   - Check that React Router is configured correctly
   - Verify all routes redirect to `index.html`

4. **API Connection Issues**
   - Verify backend URL is correct
   - Check CORS configuration on backend
   - Ensure backend is accessible from Vercel's servers

### Debug Commands
```bash
# Check Vercel project status
vercel ls

# View deployment logs
vercel logs

# Check environment variables
vercel env ls

# Remove project
vercel remove
```

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files
   - Use Vercel's environment variable system
   - Rotate sensitive keys regularly

2. **API Security**
   - Use HTTPS for all API calls
   - Implement proper CORS policies
   - Use authentication tokens

3. **Content Security Policy**
   - Configure CSP headers
   - Restrict resource loading
   - Monitor for security issues

## 📈 Performance Optimization

### Build Optimization
- Code splitting with React.lazy()
- Image optimization
- Bundle analysis with `npm run build --analyze`

### Runtime Optimization
- Implement service workers
- Use React.memo() for expensive components
- Optimize images and assets

## 🔄 Updates and Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix security issues
npm audit fix
```

### Deployment Updates
```bash
# Deploy updates
vercel --prod

# Rollback if needed
vercel rollback
```

## 📞 Support

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

---

**Happy Deploying! 🚀**
