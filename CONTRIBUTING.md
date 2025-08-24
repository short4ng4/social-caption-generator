# Contributing to Social Caption Generator

Thank you for your interest in contributing to the Social Caption Generator! 🎉

## How to Contribute

### 🐛 Bug Reports
- Use the [Issues tab](https://github.com/short4ng4/social-caption-generator/issues) to report bugs
- Include steps to reproduce the issue
- Provide your environment details (OS, browser, Node.js version)

### 💡 Feature Requests
- Open an issue with the "enhancement" label
- Describe the feature and its use case
- Explain how it would benefit users

### 🔧 Code Contributions

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**: Ensure the app works correctly
5. **Commit with clear messages**: `git commit -m "Add amazing feature"`
6. **Push to your fork**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### 🎨 Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/social-caption-generator.git
cd social-caption-generator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your OpenAI API key to .env.local

# Start development server
npm run dev
```

### 📝 Pull Request Guidelines

- Keep PRs focused on a single feature/fix
- Update documentation if needed
- Test your changes thoroughly
- Use descriptive commit messages
- Link to relevant issues

### 🏗️ Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components
├── lib/             # Utilities & API logic
└── types/           # TypeScript definitions
```

### 🎯 Areas for Contribution

- **UI/UX improvements**: Better animations, mobile experience
- **New platforms**: Support for more social media platforms
- **AI enhancements**: Better prompts, new tone options
- **Features**: User accounts, saved captions, analytics
- **Performance**: Optimizations and caching
- **Documentation**: Tutorials, examples, guides

## Code Style

- Use TypeScript for type safety
- Follow existing patterns and conventions
- Use Tailwind CSS for styling
- Keep components modular and reusable

## Questions?

Feel free to open an issue for any questions about contributing!

---

**Thank you for helping make this project better! 🚀**
