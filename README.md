# Bera Yavuz Portfolio Website

A modern, bold portfolio website for showcasing mechanical engineering work.

## Structure

The website consists of 5 main sections:

1. **Home** - Introduction with photo area, specialties, and quick CTAs
2. **About Me** - Personal information with subsections for Education, Experience, and Interests
3. **Portfolio** - Project showcase with subsections for CAD Projects, Analysis Work, Prototyping, and Team Projects
4. **Contact** - Contact information and resume download links

## Features

- Fixed navigation bar with smooth transitions
- Animated section transitions using GSAP
- Responsive design for mobile and tablet
- Subsection cards with hover effects
- Bold, distinctive design with custom color scheme
- Easy-to-update link sections throughout

## Customization

### Adding Your Photo

Replace the placeholder in the Home section by:
1. Add your photo file to the project directory
2. In `index.html`, replace the `.photo-placeholder` div with:
   ```html
   <img src="your-photo.jpg" alt="Bera Yavuz" style="width: 100%; height: 100%; object-fit: cover;">
   ```

### Updating Links

All subsection links are in `index.html`. Find the relevant `<ul class="link-list">` sections and update the `href="#"` attributes with your actual links.

Example:
```html
<li><a href="path/to/your/project" class="subsection-link">Project Name</a></li>
```

### Changing Colors

Edit the CSS variables in `styles.css` at the top:
```css
:root {
  --primary: #ff4d00;        /* Main orange accent */
  --secondary: #0047ff;      /* Blue accent */
  --accent-yellow: #ffde00;  /* Yellow accent */
  /* etc... */
}
```

### Adding New Subsections

To add more subsections within any section, copy the subsection card template:

```html
<div class="subsection-card">
  <h3>Section Name</h3>
  <ul class="link-list">
    <li><a href="#" class="subsection-link">Link 1</a></li>
    <li><a href="#" class="subsection-link">Link 2</a></li>
  </ul>
</div>
```

## Typography

The site uses:
- **Archivo Black** - For bold headings and titles
- **Work Sans** - For body text and UI elements

Both are loaded from Google Fonts automatically.

## Animation Library

The site uses GSAP (GreenSock Animation Platform) for smooth animations, loaded via CDN.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## File Structure

```
├── index.html    # Main HTML structure
├── styles.css    # All styles and animations
├── script.js     # Navigation and interaction logic
└── README.md     # This file
```

## Next Steps

1. Replace placeholder text with your actual information
2. Add your photo
3. Update all links to point to your actual projects/profiles
4. Add resume PDF and other downloadable documents
5. Update email and contact information
6. Deploy to GitHub Pages or your preferred hosting

## License

Personal portfolio website - all rights reserved.
