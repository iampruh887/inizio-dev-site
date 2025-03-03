# Repository Analysis for builder.io Figma Plugin

## Project Structure
/Test
  /src
    /assets
      - react.svg
    /components
      /shared
        - Navigation.jsx
        - Footer.jsx
      /Sponsors
        - Footer.jsx
        - SponsorCard.jsx
        - SponsorSection.jsx
        - Sponsors.jsx
        - Sponsors.css
      /Teams
        - TeamMember.jsx
        - TeamSection.jsx
      - ErrorBoundary.jsx
    /constants
      - Navigation.jsx
      - sponsorData.js
    /pages
      - Teams.jsx
    /styles
      - Teams.css
      - shared.css
      /sponsors
        - variables.css
    - App.jsx
    - App.css
    - index.css
    - main.jsx

## Design System

### Colors
- Primary: #ff6b00
- Background Light: #fff5cf
- Background Dark: #131313
- Text Light: #ffffff
- Text Dark: #333333
- Accent: #ffd700

### Typography
- Primary Font: "Outfit", sans-serif
- Secondary Font: "Inter", sans-serif
- Font Sizes:
  - Hero Title: 180px
  - Section Titles: 48px
  - Card Titles: 24px
  - Body Text: 16px
  - Small Text: 14px

### Spacing
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- Section Padding: 80px
- Card Padding: 20px

### Borders & Shadows
- Border Radius: 22px
- Box Shadow: 0 4px 20px rgba(0, 0, 0, 0.05)

### Animations
- Transitions: 0.3s ease
- Hover Effects:
  - Scale: 1.05
  - translateY: -5px

## Components

### Layout Components
1. Navigation
   - Logo
   - Menu Links
   - Responsive Menu

2. Footer
   - Logo
   - Contact Info
   - Quick Links
   - Social Links
   - Copyright

### Page Sections
1. Hero Section
   - Background Image
   - Title
   - Description
   - Navigation

2. Team Section
   - Title
   - Description
   - Member Grid
   - Responsive Layout

3. Sponsor Section
   - Title
   - Description
   - Sponsor Grid
   - Responsive Layout

### Cards
1. Team Member Card
   - Image
   - Name
   - Role
   - Social Links
   - Hover Effects

2. Sponsor Card
   - Image
   - Title
   - Hover Effects

## Responsive Breakpoints
- Desktop: > 1200px
- Tablet: 768px - 1200px
- Mobile: < 768px
- Small Mobile: < 480px

## Grid System
- Team Grid:
  - 1 Member: Single centered column
  - 2 Members: 2 columns
  - 3 Members: 3 columns
  - 4+ Members: Auto-fit with min 280px
- Sponsor Grid:
  - Auto-fit with minmax(300px, 1fr)

## Features
1. Responsive Design
2. Dynamic Grid Layouts
3. Interactive Elements
4. Image Optimization
5. Route Management
6. Error Boundary
7. Component Reusability
8. CSS Variables
9. CSS Modules
10. Prop Type Validation

## State Management
- React Router for navigation
- Local component state
- Props for component communication

## Best Practices
1. Component Composition
2. CSS Organization
3. Responsive Design
4. Performance Optimization
5. Accessibility
6. Code Reusability
7. Consistent Naming
8. Error Handling

## Assets Required
1. Logo Images
2. Team Member Photos
3. Sponsor Logos
4. Social Media Icons
5. Background Images
6. SVG Icons
