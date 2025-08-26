# Next.js Template with Biome and TailwindCSS

A modern, production-ready Next.js template featuring Biome for linting and formatting, TailwindCSS for styling, and TypeScript for type safety.

## 🚀 Features

- ⚡ **Next.js 15.5.0** - The React framework for production
- 🎨 **TailwindCSS 4.1.12** - Utility-first CSS framework
- 🔧 **Biome** - Fast formatter and linter (ESLint + Prettier alternative)
- 📝 **TypeScript** - Type safety and better developer experience
- ⚡ **Turbopack** - Fast bundler for development
- 📦 **Bun** - Ultra-fast JavaScript runtime and package manager

## 📋 Prerequisites

- [Bun](https://bun.sh/) >= 1.2.21
- [Node.js](https://nodejs.org/en) >= 22.x

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/4a4c53/nextjs-template-with-biome-and-tailwindcss
cd nextjs-template-with-biome-and-tailwindcss
```

2. Install dependencies:
```bash
bun install
```

## 🏃‍♂️ Getting Started

### Development

Start the development server with Turbopack:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the application for production:
```bash
bun run build
```

Start the production server:
```bash
bun run start
```

## 🧹 Code Quality

This template includes Biome for maintaining code quality:

### Linting

Check for linting issues:
```bash
bun run lint
```

### Formatting

Format and fix code issues:
```bash
bun run format
```

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── core/
│   │   └── styles/        # Global styles
│   │       └── globals.css
│   └── shared/
│       └── types/         # TypeScript type definitions
├── biome.json             # Biome configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🎨 Styling

This template uses TailwindCSS 4.x for styling. The configuration is set up to work seamlessly with Next.js and includes:

- Modern CSS features
- PostCSS integration with `@tailwindcss/postcss`
- Optimized for production builds

## 🔧 Configuration

### Biome

The project uses Biome instead of ESLint + Prettier for better performance. Configuration is in `biome.json`.

### TypeScript

Strict TypeScript configuration is enabled for better type safety and developer experience.

## 📦 Package Manager

This project uses [Bun](https://bun.sh/) as the package manager for faster installs and better performance.

## 📦 Dependencies

### Runtime Dependencies
- **React** - UI library with latest concurrent features
- **React DOM** - React renderer for the web
- **Next.js** - Full-stack React framework

### Development Dependencies
- **@biomejs/biome** - Linter and formatter
- **@tailwindcss/postcss** - PostCSS plugin for TailwindCSS
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Type checking and compilation
- **@types packages** - Type definitions for Node.js, React, and React DOM


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run code quality checks: `bun run lint && bun run format`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 🐛 Issues & Support

Found a bug or need help? Please check our [Issues page](https://github.com/4a4c53/nextjs-template-with-biome-and-tailwindcss/issues) or create a new issue.

## 👨‍💻 Author

**José Luis Silva**
- Email: joseluis@4a4c53.com
- Website: [4a4c53.com](http://4a4c53.com)

---

Built with ❤️ using Next.js, TailwindCSS, and Biome