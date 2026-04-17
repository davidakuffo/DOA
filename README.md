# David Offei Akuffo — Portfolio

A modern, animated portfolio website showcasing experience, skills, and projects. Built with vanilla HTML, CSS, and JavaScript with smooth animations and responsive design.

## ✨ Features

- **Smooth Animations** – Scroll reveal effects, floating elements, and page transitions
- **Mobile Responsive** – Optimized for all screen sizes with a slide-out mobile menu
- **Modern Design** – Clean, minimalist aesthetic with custom animations and typography
- **Interactive Navigation** – Smooth scrolling, fixed navbar with scroll detection
- **Skill Grid** – Organized display of technical skills and tools
- **Experience Timeline** – Interactive tabs showing career progression
- **Contact Form** – Functional contact section with validation
- **Custom Cursor** – Animated cursor ring effect on hover
- **Dark Mode Ready** – CSS variables for easy theme customization

## 🛠 Tech Stack

- **HTML5** – Semantic markup and structure
- **CSS3** – Custom properties, Grid, Flexbox, animations
- **JavaScript (Vanilla)** – No dependencies, pure JS interactions
- **Tailwind CSS** – Via `@tailwindcss/browser` for utility classes

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will run on `http://localhost:8080` (or your configured port).

## 📁 Project Structure

```
├── index.html          # Main portfolio page
├── script.js           # JavaScript interactions
├── tailwind.config.js  # Tailwind configuration
├── favicon.svg         # Browser icon
├── images/             # Asset images (logos, icons, photos)
├── assests/            # Resume and additional files
└── README.md           # This file
```

## 🎨 Customization

### Update Personal Information
Edit these sections in `index.html`:
- Name and title in the hero section
- About description
- Experience entries
- Skills and tech stack
- Project examples
- Contact information

### Change Colors
Modify CSS variables in the `<style>` section:
```css
:root {
  --ink: #0d0d0d;      /* Text color */
  --paper: #f5f0e8;    /* Background */
  --teal: #1a8c7a;     /* Primary color */
  --gold: #c9a84c;     /* Secondary color */
}
```

### Update Favicon
Replace `favicon.svg` in the root or change the link in `<head>`:
```html
<link rel="icon" href="your-icon.svg" type="image/svg+xml">
```

## 📱 Mobile Menu

The mobile navigation automatically appears on screens under 768px width. It includes:
- Hamburger toggle button
- Slide-out drawer menu
- Auto-close on navigation
- Smooth animations

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
- Connect your GitHub repo
- Deploy from `main` branch
- Auto-deploys on push

### GitHub Pages
1. Push to GitHub
2. Go to repo settings → Pages
3. Select branch to deploy

## 📊 Performance

- No external frameworks or heavy libraries
- Optimized images and SVG assets
- CSS animations use GPU acceleration
- Minimal JavaScript for fast load times

## 🔧 Development

### Add New Sections
Create a new `<section>` with the `reveal` class for scroll animations:
```html
<section class="your-section reveal">
  <div class="reveal">
    <h2>Your Heading</h2>
    <p>Your content</p>
  </div>
</section>
```

### Modify Animations
Edit CSS animations in the `<style>` block or adjust JavaScript scroll behavior in the inline `<script>`.

## 📄 License

This portfolio is open source and can be customized for personal use.

---

**Built with care** — Last updated April 2026
