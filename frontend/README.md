# NeuroSense - AI-Powered Sentiment Intelligence (Frontend)

Modern React application built with Vite for real-time sentiment analysis and note evaluation.

## 🚀 Features

- **Interactive Note Input**: Analyze feedback, reviews, and notes on the fly.
- **Premium Glassmorphism UI**: Beautiful, modern aesthetic with rich gradients and micro-animations.
- **Visual Sentiment Badges**: Color-coded feedback (`positive` in green, `negative` in red, `neutral` in amber).
- **Responsive & Lightweight**: Built with React 19 and Vite for lightning-fast HMR and bundle performance.
- **Configurable Backend Connection**: Works seamlessly with FastAPI ML service.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Language**: JavaScript (ES Modules)
- **Styling**: Modern CSS (Glassmorphism design)

---

## 📦 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm` (bundled with Node.js)

### 2. Install Dependencies

```bash
cd frontend
npm install
```

### 3. Environment Configuration (Optional)

By default, the frontend sends requests directly to the ML service at:
`http://localhost:8000/predict`

If you want to customize the API URL, create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:8000/predict
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Build

To build the optimized static bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
frontend/
├── public/              # Static assets (favicons, svg icons)
├── src/
│   ├── assets/          # Images and branding assets
│   ├── api.js           # API request client for sentiment analysis
│   ├── App.jsx          # Main interactive Sentiment Analyzer component
│   ├── App.css          # App-level styling
│   ├── index.css        # Global CSS variables, reset, typography
│   └── main.jsx         # React application entry point
├── index.html           # HTML template
├── package.json         # NPM scripts and dependencies
└── vite.config.js       # Vite configuration
```
