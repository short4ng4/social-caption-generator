# Deployment Guide

This guide will help you deploy the Social Caption Generator to various hosting platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/short4ng4/social-caption-generator)

**Step-by-step:**

1. **Fork this repository** to your GitHub account
2. **Sign up/in to [Vercel](https://vercel.com)**
3. **Click "New Project"** and import your forked repository
4. **Add environment variable:**
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
5. **Deploy!** Your app will be live in minutes

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/short4ng4/social-caption-generator)

**Step-by-step:**

1. **Fork this repository**
2. **Sign up/in to [Netlify](https://netlify.com)**
3. **Connect your GitHub repository**
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Environment variables:**
   - `OPENAI_API_KEY`: Your OpenAI API key
6. **Deploy!**

### Railway

1. **Fork this repository**
2. **Sign up/in to [Railway](https://railway.app)**
3. **Create new project from GitHub repo**
4. **Add environment variable:**
   - `OPENAI_API_KEY`: Your OpenAI API key
5. **Deploy automatically**

## 🔧 Manual Deployment

### Prerequisites

- Node.js 18+ 
- OpenAI API key

### Build for Production

```bash
# Clone repository
git clone https://github.com/short4ng4/social-caption-generator.git
cd social-caption-generator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# Build for production
npm run build

# Start production server
npm start
```

### Docker Deployment

```dockerfile
# Dockerfile (create this file)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build and run Docker container
docker build -t social-caption-generator .
docker run -p 3000:3000 -e OPENAI_API_KEY=your_key_here social-caption-generator
```

## 🌍 Environment Variables

### Required
- `OPENAI_API_KEY`: Your OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Optional
- `NODE_ENV`: Set to `production` for production deployments

## 🔒 Security Considerations

1. **Never commit API keys** to the repository
2. **Use environment variables** for all secrets
3. **Enable HTTPS** on your deployment platform
4. **Consider rate limiting** for production use
5. **Monitor API usage** to prevent unexpected costs

## 📊 Monitoring & Analytics

### Vercel Analytics
Add Vercel Analytics for user insights:

```bash
npm install @vercel/analytics
```

### Error Monitoring
Consider adding error monitoring with:
- [Sentry](https://sentry.io/)
- [LogRocket](https://logrocket.com/)
- [Bugsnag](https://www.bugsnag.com/)

## 🚀 Performance Optimization

### For Production
1. **Enable Next.js optimizations** (already configured)
2. **Use CDN** for static assets
3. **Implement caching** for API responses
4. **Monitor Core Web Vitals**

### Caching Strategy
```javascript
// Add to next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=300'
          }
        ]
      }
    ]
  }
}
```

## 🔧 Troubleshooting

### Common Issues

**Build fails:**
- Check Node.js version (18+ required)
- Verify all dependencies are installed
- Ensure environment variables are set

**API errors:**
- Verify OpenAI API key is correct
- Check API key has sufficient credits
- Ensure key has proper permissions

**Performance issues:**
- Implement request caching
- Add rate limiting
- Monitor API usage

## 📞 Support

Need help with deployment? 
- [Open an issue](https://github.com/short4ng4/social-caption-generator/issues)
- Check the [FAQ](README.md#troubleshooting)
- Review [platform documentation](README.md)

---

**Happy deploying! 🎉**
