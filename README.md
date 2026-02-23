# Athul Jestin's Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and cutting-edge web technologies.

## 🌐 Live Demo

**Website:** [https://athuljestin.netlify.app/](https://athuljestin.netlify.app/)

## ✨ Features

- **Modern Design:** Clean, professional interface with smooth animations and transitions
- **Responsive Layout:** Fully optimized for desktop, tablet, and mobile devices
- **Interactive Elements:** Particle background, animated text, and hover effects
- **Dark/Light Theme Support:** Built with theme switching capabilities
- **Contact Form:** Functional contact form with EmailJS integration
- **Performance Optimized:** Built with Vite for fast development and production builds
- **Component-Based Architecture:** Modular, reusable React components

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - UI library with modern hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit

### Development Tools
- **ESLint** - Code linting and formatting
- **Vitest** - Fast unit testing framework
- **React Router** - Client-side routing
- **React Hook Form** - Performant forms with easy validation
- **EmailJS** - Send emails directly from frontend

## 📁 Project Structure

```
Portfolio/
├── frontend/                 # React application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   └── ...         # Portfolio-specific components
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # Application entry point
│   ├── package.json        # Dependencies and scripts
│   └── vite.config.ts      # Vite configuration
└── README.md               # This file
```

## 🎨 Portfolio Sections

The portfolio includes the following sections:

1. **Hero** - Introduction with animated role text
2. **About** - Personal information and background
3. **Education** - Academic qualifications
4. **Experience** - Work experience and timeline
5. **Skills** - Technical skills and proficiencies
6. **Services** - Services offered
7. **Projects** - Featured projects showcase
8. **Contact** - Contact form and information
9. **Footer** - Social links and additional information

## 🌟 Key Components

- **ParticleBackground** - Animated particle effect for visual appeal
- **Navbar** - Responsive navigation with smooth scrolling
- **NotificationModal** - User feedback system
- **ContactSection** - Functional contact form with validation

## 🔧 Configuration

### EmailJS Setup
To enable the contact form, configure EmailJS:
1. Create an EmailJS account
2. Set up email service and template
3. Update credentials in the contact component

### Build Configuration
- **Vite** is configured for optimal performance
- **Path aliases** are set up (`@/` maps to `src/`)
- **Development server** runs on port 3000

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🚀 Deployment

The portfolio is deployed on Netlify with automatic CI/CD. To deploy elsewhere:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `frontend/dist` folder to your hosting provider

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please reach out through the contact form or GitHub issues.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Athul Jestin**
- Software Engineer
- GenAI/ML Enthusiast
- Building Intelligent Systems

---

*Built with passion and modern web technologies*
