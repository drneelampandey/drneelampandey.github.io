# Doctor Portfolio Website

A modern, fast single-page scroll website for a homeopathic doctor, built with React, TypeScript, and Vite. Optimized for GitHub Pages deployment.

## Features

- **Single-page scroll design** with smooth navigation
- **Responsive layout** that works on all devices
- **Easy content management** through a central configuration file
- **Modern UI** with professional medical website aesthetic
- **Fast loading** with optimized build output

## Sections

1. **Home** - Doctor photo, name, degrees, stats, and book consultation button
2. **Why Homeopathy** - Information about homeopathic treatment
3. **Expertise** - 6 areas of specialization with conditions
4. **Testimonials** - Rotating carousel of patient reviews
5. **About Doctor** - Biography, education, experience, and awards
6. **FAQ** - Collapsible frequently asked questions
7. **Contact** - Phone, email, address, working hours, and Google Maps
8. **Footer** - Contact info and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Update doctor information:
   - Edit `src/config/doctorData.ts` with your doctor's information
   - Replace `public/doctor-photo.jpg` with the actual doctor photo

4. Update Google Maps embed URL:
   - In `src/config/doctorData.ts`, update the `googleMapsEmbedUrl` field
   - To get the embed URL:
     1. Go to Google Maps
     2. Search for your clinic location
     3. Click "Share" → "Embed a map"
     4. Copy the iframe src URL

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the static site:
```bash
npm run build
```

The output will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Using gh-pages package (Recommended)

1. Install gh-pages (already included in package.json):
```bash
npm install
```

2. Update `vite.config.ts`:
   - If your repository is `username.github.io`, set `base: '/'`
   - If your repository is `username.github.io/portfolio`, set `base: '/portfolio/'`

3. Deploy:
```bash
npm run deploy
```

This will build the site and push it to the `gh-pages` branch.

4. Enable GitHub Pages:
   - Go to your repository Settings → Pages
   - Select source: "Deploy from a branch"
   - Select branch: "gh-pages" and folder: "/ (root)"
   - Click Save

### Option 2: Manual Deployment

1. Build the site:
```bash
npm run build
```

2. Copy the contents of `dist/` to your `gh-pages` branch or a `docs/` folder

3. Push to GitHub and enable Pages in repository settings

## Updating Content

All content is managed through `src/config/doctorData.ts`. Simply update the values in this file:

- **Doctor Information**: name, degrees, photo path, biography
- **Education/Experience/Awards**: Update the respective arrays
- **Statistics**: Update Google rating, reviews, years of experience, patients treated
- **Expertise Areas**: Modify the 6 expertise areas and their conditions
- **Testimonials**: Add new testimonials from Google reviews to the array
- **FAQ**: Add or modify questions and answers
- **Contact**: Update phone, email, address, working hours, and maps URL
- **Social Media**: Update social media links

After updating, rebuild and redeploy:
```bash
npm run build
npm run deploy
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2c5f8d;
  --secondary-color: #4a90a4;
  --accent-color: #6bb6b8;
  /* ... */
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Individual components can have their own CSS modules if needed

## Project Structure

```
portfolio/
├── public/              # Static assets
│   └── doctor-photo.jpg
├── src/
│   ├── config/
│   │   └── doctorData.ts    # Master config file
│   ├── components/          # React components
│   │   ├── HomeSection.tsx
│   │   ├── WhyHomeopathy.tsx
│   │   ├── Expertise.tsx
│   │   ├── Testimonials.tsx
│   │   ├── AboutDoctor.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Support

For issues or questions, please open an issue in the repository.
