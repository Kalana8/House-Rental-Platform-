# NestFinder - Sri Lanka's #1 Rental Platform

NestFinder is a complete, professional, single-page House Rental Platform website built using React.js and Tailwind CSS. It features a luxury/refined aesthetic with deep navy and warm gold accents, making it perfect for premium real estate listings.

## Features

-   **Modern UI/UX**: Clean whites, deep navy (`#0F172A`), and warm gold accents (`#D4A853`) with soft shadows.
-   **Responsive Design**: Fully responsive, mobile-first approach ensuring it looks great on all devices.
-   **Typography**: High-quality Google Fonts (Playfair Display for headings, DM Sans for body text).
-   **Smooth Scrolling & Navigation**: Glass-morphism fixed top navbar with scrolling state management.
-   **Interactive Elements**: Hover effects on property cards (scale + shadow lift) and interactive masonry-style gallery.
-   **Dynamic Sections**: Includes Hero, About, Listings, Features, Gallery, and Contact sections.
-   **WhatsApp Integration**: A built-in rental inquiry form that redirects to WhatsApp with a pre-filled message.
-   **Google Maps Integration**: Embedded map for location viewing.

## Setup Instructions

Follow these steps to run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd "House Rental Platform"
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app** in your browser. The terminal will display the local URL (usually `http://localhost:5173/`).

## Project Structure

```text
├── index.html            // Main HTML file with Google Fonts loaded
├── src/
│   ├── App.jsx           // Main application assembling all components
│   ├── index.css         // Global styles and Tailwind directives
│   ├── main.jsx          // React entry point
│   └── components/       // Reusable React components
│       ├── Navbar.jsx    // Fixed glass-morphism navbar
│       ├── Hero.jsx      // Full-screen hero with stats
│       ├── About.jsx     // Information and stat boxes
│       ├── Listings.jsx  // Grid of featured properties
│       ├── PropertyCard.jsx // Individual property item component
│       ├── Features.jsx  // 3-column feature highlights
│       ├── Gallery.jsx   // Masonry-style property images
│       ├── Contact.jsx   // Contact info, Maps, and WhatsApp form
│       └── Footer.jsx    // Footer with brand and social links
```

## Technologies Used

-   [React.js](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Lucide React](https://lucide.dev/icons/) for Icons
-   Google Fonts (Playfair Display & DM Sans)

## Development and Building

To build the project for production, run:
```bash
npm run build
```

This will generate a `dist/` folder containing the optimized build assets.
