# Nashco Global Website

This is the official static website for Nashco Global, deployed using Cloudflare Pages.

## Overview

Nashco Global is a multi-sector leader in the GCC, providing innovative solutions in:
- Chemicals & Refrigerants (via Zahy Al Khaleej LLC)
- Automotive Industry
- Industrial Manufacturing
- Trading

## Website Structure

### Pages (7 total)
- **index.html** - Home page with company overview and services
- **about.html** - Company history, mission, vision, and milestones
- **zahy-alkhaleej.html** - Chemicals and refrigerants division
- **automotive.html** - Automotive solutions and services
- **manufacturing.html** - Manufacturing capabilities
- **trading.html** - Trading and distribution services
- **contact.html** - Contact information and inquiry form
- **offline.html** - PWA offline fallback page

### Technical Stack

#### Design
- **Design Style:** Corporate minimalist with ample white space
- **Brand Colors:**
  - Gulf Blue: #003087 (Primary)
  - Teal: #00A1D6 (CTAs)
  - Sky Blue: #A5D8FF (Highlights)
  - Neutral Gray: #F5F5F5 (Backgrounds)

#### Typography
- **Headings:** Poppins (Google Fonts)
- **Body:** Poppins (Latin), Cairo (optional Arabic support)

#### Technologies
- HTML5 with semantic markup
- CSS3 with Flexbox and Grid
- Vanilla JavaScript (no frameworks)
- Progressive Web App (PWA) features
- AOS (Animate On Scroll) for animations

#### Assets
- **CSS:** Assets/css/styles.css (14KB)
- **Images:** Assets/images/ (hero images, logos, gallery)
- **PWA:** manifest.json, sw.js

## Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, and 992px
- Touch-friendly navigation

### Accessibility
- Semantic HTML5 elements
- ARIA labels and landmarks
- Skip-to-main-content link
- Proper form labels and validation
- Keyboard navigation support

### SEO
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Semantic heading hierarchy
- Alt text for all images
- Clean URL structure

### PWA Features
- Service Worker for offline functionality
- Web App Manifest
- Cacheable assets
- Cache versioning (v2)

## Deployment

- **Hosting:** Cloudflare Pages with GitHub integration
- **Custom Domain:** nashcoglobal.com
- **Auto-Deploy:** Pushes to GitHub trigger automatic deployment

## Development

### File Organization
```
nashco-global/
├── index.html
├── about.html
├── automotive.html
├── manufacturing.html
├── trading.html
├── zahy-alkhaleej.html
├── contact.html
├── offline.html
├── manifest.json
├── sw.js
└── Assets/
    ├── css/
    │   └── styles.css
    └── images/
        ├── logo-nashco.png
        ├── (various hero and content images)
        └── licensed-by.jpeg
```

### Editing Guidelines
1. Maintain consistent header and footer across all pages
2. Use semantic HTML5 elements
3. Follow the established color scheme
4. Keep design minimalist with ample white space
5. Ensure all images have proper alt text
6. Test responsive design on multiple devices
7. Update service worker cache version when making significant changes

### Cache Management
When updating assets, increment the cache version in `sw.js`:
```javascript
const CACHE_NAME = 'nashco-global-v2'; // Increment version number
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance
- Optimized images (compressed, appropriate formats)
- Minimal external dependencies
- Efficient CSS (no unused styles)
- Lazy loading for images
- Service Worker caching for repeat visits

## License
© 2025 Nashco Global. All Rights Reserved.

