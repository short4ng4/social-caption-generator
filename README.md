# Social Caption Generator

A modern, AI-powered web application that generates engaging, platform-specific captions for Instagram, TikTok, LinkedIn, and Twitter. Built with Next.js, OpenAI GPT-4, and Tailwind CSS.

## ✨ Features

- **AI-Powered Generation**: Uses OpenAI GPT-4 for high-quality, contextual captions
- **Platform-Specific**: Optimized formatting for Instagram, TikTok, LinkedIn, and Twitter
- **Multiple Tones**: Choose from funny, professional, inspirational, witty, aesthetic, casual, or bold
- **Hashtag Suggestions**: Automatically includes relevant hashtags for each platform
- **Rate Limiting**: Guest-friendly with 10 free generations per day
- **One-Click Copy**: Easy copy-to-clipboard functionality
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **No Registration Required**: Start generating captions immediately

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone or extract the project**
   ```bash
   cd social-caption-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How to Use

1. **Describe your post**: Enter what your social media post is about
2. **Choose platform**: Select Instagram, TikTok, LinkedIn, or Twitter
3. **Pick a tone**: Choose the style that fits your brand (funny, professional, etc.)
4. **Customize options**: Toggle emojis and hashtags on/off
5. **Generate**: Click "Generate Captions" to get 4 unique options
6. **Copy & Post**: One-click copy to paste directly into your social platform

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4 API
- **Icons**: Lucide React
- **Rate Limiting**: Local storage-based session management

## 📁 Project Structure

```
src/
├── app/
│   ├── api/generate/      # API route for caption generation
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Main application page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── CaptionCard.tsx   # Individual caption display
│   ├── CaptionForm.tsx   # Input form component
│   └── Hero.tsx          # Landing page hero section
├── lib/
│   ├── openai.ts         # OpenAI integration
│   ├── rateLimit.ts      # Rate limiting logic
│   └── utils.ts          # Utility functions
└── types/
    └── index.ts          # TypeScript type definitions
```

## 🎨 Design Philosophy

- **Clean & Minimalist**: Focus on the core functionality without distractions
- **Mobile-First**: Responsive design that works great on all devices
- **Fast & Intuitive**: Quick generation with immediate results
- **Platform-Aware**: Each caption is optimized for its specific social media platform

## 🚦 Rate Limiting

- **Guest Users**: 10 free caption generations per day
- **Session-Based**: Uses local storage to track usage
- **Daily Reset**: Counter resets every 24 hours

## 🔧 Configuration

### Platform Settings

Each platform has specific optimization settings:

- **Instagram**: Up to 2,200 characters, visual-focused style, 10 hashtags
- **TikTok**: Up to 300 characters, trendy and engaging, 5 hashtags  
- **LinkedIn**: Up to 1,300 characters, professional tone, 5 hashtags
- **Twitter**: Up to 280 characters, concise and punchy, 3 hashtags

### Tone Options

- **Funny**: Humorous and entertaining
- **Professional**: Business-appropriate and polished
- **Inspirational**: Motivating and uplifting
- **Witty**: Clever and intellectually playful
- **Aesthetic**: Artistically crafted and visually-minded
- **Casual**: Relaxed and conversational
- **Bold**: Confident and attention-grabbing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `OPENAI_API_KEY` to Vercel's environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 💡 Future Enhancements

- User accounts and saved captions
- Batch generation and export
- Platform integrations (Hootsuite, Buffer)
- Performance analytics
- Custom brand voice training
- Team collaboration features

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Built with ❤️ for creators, marketers, and social media enthusiasts**