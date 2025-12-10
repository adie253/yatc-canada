# YachtPrime - Premium Yacht Charter Website

A luxury yacht charter website built with React, Vite, and Tailwind CSS. Designed for static export and high performance.

## Features

- **Dynamic City Switching**: Hero section updates background and content based on selected city (Miami, NYC, Vancouver, Toronto).
- **Curreny Conversion**: Toggle between USD and CAD (updates fleet prices instantly).
- **Fleet Showcase**: Responsive grid with boat specifications and details.
- **Booking Wizard**: Multi-step modal form for inquiries.
- **Responsive Design**: Mobile-first approach with premium "Glassmorphism" UI.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (custom configuration for typography and colors)
- **Deployment**: Static Site Generation (SSG) ready

## Setup & Development

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```
    The output will be in the `dist` folder.

## Customization

- **Fleet Data**: Edit `src/data/fleet.json`.
- **Routes/Cities**: Edit `src/data/routes.json`.
- **Currency Rate**: Update `FX_RATE_USD_TO_CAD` constant in `src/components/FleetGrid.jsx`.
- **Colors & Fonts**: Modify `tailwind.config.js`.

## API Integration

The booking form currently logs data to the console. To integrate real submissions:
1.  Open `src/components/BookingForm.jsx`.
2.  Locate the `handleSubmit` function.
3.  Replace the console log with a `fetch()` call to your backend or webhook (e.g., Zapier, Make).

```javascript
await fetch('YOUR_WEBHOOK_URL', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```
