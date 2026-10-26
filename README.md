# Personal Portfolio · React.js & Bootstrap 5

A clean, fast, and natural personal developer portfolio built with **React.js** and **Bootstrap 5**. Designed to look and feel like it was crafted by a thoughtful human developer—avoiding generic AI buzzwords and excessive animations in favor of crisp typography, real-world project stories, and clear engineering experience.

---

## ✨ Features

- **Human-Centered Aesthetic**: Warm neutral tones, crisp typography (`Plus Jakarta Sans`), subtle card elevations, and grounded copy.
- **Built with Bootstrap 5**: Fully responsive layout utilizing Bootstrap 5 grid, cards, badges, buttons, and utility classes.
- **Dark / Light Mode**: Integrated with Bootstrap's native `data-bs-theme` system, respecting user system preference and storing choices in `localStorage`.
- **Organized Single Data File**: Edit all personal details, bio, projects, work history, and skills in one file: [`src/data/portfolioData.js`](src/data/portfolioData.js).
- **Interactive Project Filtering**: Instant categorization by Full Stack, Frontend, and Tools.
- **Project Detail Modals**: Click "Read Story" to inspect technical highlights, architectural choices, and repository links.
- **Career Timeline**: Chronological work history and formal education with clear impact bullet points.
- **Skills Categorization**: Clean categorized badges with proficiency levels (no misleading percentage rings).
- **Interactive Contact Section**:
  - Live contact form with client validation and feedback state.
  - One-click **Copy Email** button with instant feedback tooltip.
  - Direct links to GitHub, LinkedIn, and social profiles.
- **Back-to-Top Navigation**: Smooth floating button that appears upon scrolling.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at the local URL displayed (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory ready for deployment to Vercel, Netlify, GitHub Pages, or any static host.

---

## 🛠️ Customization

All personal information is decoupled from the UI components. To customize the portfolio with your own details:

1. Open [`src/data/portfolioData.js`](src/data/portfolioData.js).
2. Update:
   - **`personal`**: Name, role, bio paragraphs, location, status badge, email, and social links.
   - **`skills`**: Frontend, backend, tools, and core engineering principles.
   - **`projects`**: Project titles, categories, summaries, live links, and GitHub repos.
   - **`experience`**: Companies, roles, date ranges, and key achievements.
   - **`education`**: Degrees, universities, and graduation years.

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets & favicons
├── src/
│   ├── components/         # Modular React components
│   │   ├── About.jsx       # Bio narrative & quick facts
│   │   ├── Contact.jsx     # Contact form & email copy pill
│   │   ├── Experience.jsx  # Career timeline & education
│   │   ├── Footer.jsx      # Clean footer with credits
│   │   ├── Hero.jsx        # Greeting, availability pill & quick stats
│   │   ├── Navbar.jsx      # Sticky navbar with mobile drawer & theme toggle
│   │   ├── ProjectModal.jsx# Accessible project story modal
│   │   ├── Projects.jsx    # Filterable project showcase cards
│   │   └── Skills.jsx      # Categorized skill badges & principles
│   ├── data/
│   │   └── portfolioData.js# Single source of truth for portfolio content
│   ├── styles/
│   │   └── custom.css      # Custom Bootstrap extensions & polish
│   ├── App.jsx             # Main layout & theme controller
│   ├── index.css           # Minimal root styling
│   └── main.jsx            # React root mount
├── index.html              # HTML shell & Google Fonts
├── package.json
└── vite.config.js
```
