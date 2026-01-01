# GitHub Copilot Instructions for Nashco Global Website

## Project Overview
This is the official static website for Nashco Global, a GCC-focused company operating in automotive, manufacturing, and trading sectors. The website is deployed using Cloudflare Pages with GitHub integration at nashcoglobal.com.

## Technology Stack
- **Framework**: Static HTML, CSS, JavaScript
- **CSS Framework**: Bootstrap 5.3.0
- **PWA**: Progressive Web App with service worker (sw.js) and manifest.json
- **Animations**: AOS (Animate On Scroll) library
- **Carousel**: Swiper.js
- **CDN Resources**: Bootstrap, AOS, Swiper from CDN
- **Deployment**: Cloudflare Pages with auto-deploy on push to GitHub

## Project Structure
```
nashco-global/
├── index.html              # Home page
├── about.html              # About page
├── automotive.html         # Automotive sector page
├── manufacturing.html      # Manufacturing sector page
├── trading.html            # Trading sector page
├── zahy-alkhaleej.html    # Zahy Al-Khaleej page
├── contact.html            # Contact page
├── offline.html            # PWA offline fallback page
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for PWA
├── Assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   └── images/            # All images, videos, icons
├── Pages/                 # Additional page variants
└── README.md
```

## Coding Standards and Best Practices

### HTML
- All HTML files should be in the `nashco-global/` root directory for clean URLs
- Use HTML5 semantic elements
- Include proper meta tags for viewport, charset (UTF-8)
- Files use CRLF line terminators (Windows-style)
- Include PWA manifest link: `<link rel="manifest" href="manifest.json">`
- Include theme color meta tag: `<meta name="theme-color" content="#0B0E17">`

### CSS
- Main stylesheet location: `Assets/css/styles.css`
- Use Bootstrap 5.3.0 classes as the foundation
- Primary brand colors:
  - Dark background: `#0B0E17`
  - Secondary background: `#0F1626`
  - Text color: `#FFFFFF` (white)
  - Secondary text: `#f1f3f7`
- Use CSS custom properties for consistency when defining new colors
- Gradients: `linear-gradient(180deg, #0B0E17, #0F1626)` for backgrounds
- Include inline styles only when absolutely necessary for page-specific overrides

### JavaScript
- Service worker: `sw.js` at root level
- Cache name convention: `nashco-global-v{version}`
- Always update cache name version when modifying cached resources
- Update `urlsToCache` array in sw.js when adding new pages or assets

### Images and Media
- All images go in: `Assets/images/`
- PWA icons: `icon-192.png` and `icon-512.png` (referenced in manifest.json)
- Logo videos: MP4 format for animated logos
- Supported formats: JPG, JPEG, PNG, WEBP, MP4
- Optimize images before adding to repository

### Progressive Web App (PWA)
- Service worker must cache critical pages: index, about, sector pages, contact, offline
- Manifest.json settings:
  - Short name: "Nashco Global"
  - Theme color: `#0B0E17`
  - Background color: `#0B0E17`
  - Display mode: standalone
  - Orientation: portrait
- Always test PWA functionality after changes to sw.js or manifest.json

## Development Workflow

### Making Changes
1. Edit HTML files directly in `nashco-global/` directory
2. Update CSS in `Assets/css/styles.css`
3. Add new images to `Assets/images/`
4. If adding new pages, update service worker's `urlsToCache` array
5. Test locally before committing
6. Push changes to GitHub - auto-deploys to Cloudflare Pages

### Testing
- Test all pages load correctly
- Verify responsive design on mobile and desktop
- Test PWA offline functionality
- Check all navigation links work
- Validate animations and transitions
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)

### Deployment
- Automatic deployment via Cloudflare Pages on push to main branch
- Custom domain: nashcoglobal.com
- No build step required (static site)
- Changes are live within minutes of push

## Common Tasks

### Adding a New Page
1. Create HTML file in `nashco-global/` root
2. Use existing pages as templates for consistent structure
3. Include all required meta tags and CDN links
4. Add to navigation in all other pages
5. Update `sw.js` urlsToCache array
6. Increment cache version in sw.js (e.g., 'nashco-global-v1' → 'nashco-global-v2')

### Updating Styles
- Edit `Assets/css/styles.css` for global styles
- Use Bootstrap utility classes where possible
- Follow existing color scheme and design patterns
- Maintain consistency with brand identity

### Adding Images
1. Place in `Assets/images/`
2. Use descriptive filenames (kebab-case)
3. Optimize for web before adding
4. Reference as: `Assets/images/filename.ext`

## Important Notes
- Always maintain consistency with existing design and structure
- Preserve the clean URL structure (HTML files at root)
- Keep the website lightweight and fast-loading
- Ensure all changes work offline (PWA requirement)
- Test changes locally before committing
- Never commit sensitive information or credentials

## Questions or Issues?
Refer to the README.md in the nashco-global directory for additional context.
