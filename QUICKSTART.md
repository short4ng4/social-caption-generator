# 🚀 Quick Start Guide

## Getting Started in 3 Minutes

### 1. Get Your OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### 2. Configure the App
1. Open `.env.local` in your code editor
2. Replace `your_openai_api_key_here` with your actual API key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```

### 3. Run the App
```bash
npm run dev
```

### 4. Test It Out
1. Open [http://localhost:3000](http://localhost:3000)
2. Enter a topic like "weekend coffee break"
3. Choose platform (Instagram) and tone (casual)
4. Click "Generate Captions"
5. Copy your favorite caption!

## 💡 Pro Tips

- **Try different tones**: Each tone generates completely different styles
- **Platform matters**: Instagram captions are longer, Twitter captions are concise
- **Be specific**: "New product launch for eco-friendly water bottles" works better than just "product"
- **Mix it up**: Try with and without emojis/hashtags for variety

## 🔧 Troubleshooting

**"Generation limit reached"**: Refresh the page (resets daily limit)

**API Error**: Check your OpenAI API key in `.env.local`

**Server won't start**: Run `npm install` first

## 🎯 Example Topics to Try

- "Team celebration after successful product launch"
- "Monday morning motivation for entrepreneurs"  
- "Behind the scenes coffee shop prep"
- "Client testimonial for our design services"
- "Weekend hiking adventure in the mountains"

---

**Happy caption generating! 🎉**
