# GamersTreasure – Netflix for Games (Frontend)

GamersTreasure is a **frontend-only** web app inspired by Netflix, but for video games.  
It lets gamers browse, search, and discover games using real data from the RAWG Video Games Database API, with smooth animations and interactive popups built in React.

---

## 🚀 Features

- 🎮 **Game browsing UI** inspired by Netflix rows and cards (games instead of movies)
- 🔍 **Game details popup** that opens when you click a game card (fetched by game ID from RAWG API)
- 🧭 **Client-side routing** with `react-router` for page navigation (e.g. home, details, etc.)
- 🎨 **Material UI components** for modern, responsive layout and styling
- 🌀 **GSAP animations** for smooth transitions, hover effects, and popup animations
- 🌐 **RAWG API integration** to load real game data (titles, images, genres, etc.)
- 🧱 **Pure frontend project** – no backend, ideal as a first React project and portfolio piece

---

## 🛠 Tech Stack

- **React + JavaScript** – main UI framework and logic
- **React Router** – navigation between pages/views
- **Material UI (MUI)** – UI components and styling system
- **GSAP (GreenSock)** – animations and micro‑interactions
- **RAWG Video Games API** – external API for game data  
  Docs: https://rawg.io/apidocs

---

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

# 2. Install dependencies
npm install

# 3. Create environment file for RAWG API key
# (example: .env or .env.local depending on your setup)
# REACT_APP_RAWG_API_KEY=your_rawg_api_key_here

# 4. Start development server
npm start
```
## 🧩 Project Highlights

- First real **React project**, focused on learning:
  - Fetching data from a public API (RAWG)
  - Managing component state and props
  - Using `react-router` for multiple pages
  - Handling click events (card → popup)
  - Integrating GSAP and MUI in one app

## 📌 Future Improvements

- Add filters (genre, platform, rating, release year)
- Add search and sorting options
- Add pagination or infinite scroll
- Improve responsive layout for mobile
- Add loading and error states

## 🙋‍♂️ Author

GamersTreasure is my first frontend project built with React and the RAWG API.  
Feedback, suggestions, and PRs are welcome!
