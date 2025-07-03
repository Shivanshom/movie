# 🎬 React Movie Library

A fully responsive, modern movie discovery web app built using **React + Vite**.  
Powered by **TheMovieDB API**, this app allows users to:

- 🔍 Search movies
- 🎯 Browse popular titles
- ❤️ Add/remove favorites
- 💾 Persist favorites across refresh using localStorage

Live Demo 👉 [https://movie-shivanshom.vercel.app/](https://movie-shivanshom.vercel.app/)

---

## ✨ Features

- ✅ **Search Functionality** – Find movies using keywords
- 🔥 **Popular Movies Display** – On initial load
- ❤️ **Add to Favorites** – Toggle heart icon to add/remove
- 💾 **Persistent State** – Favorites are saved even after refresh
- 📱 **Responsive Design** – Works seamlessly on mobile/tablet/desktop

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **API**: [TheMovieDB API](https://www.themoviedb.org/)
- **State Management**: React Context API
- **Persistence**: localStorage
- **Routing**: React Router
- **Deployment**: Vercel

---

## 🧠 How It Works

### Favorites Context

- Uses React Context to share `favorites` across components
- Stores the list in `localStorage`
- Syncs changes only after initial read, to prevent overwriting

### Heart Toggle

- Each movie card shows a heart icon
- Clicking toggles favorite state
- Visual feedback is instant

---

## 🔧 Getting Started (Local Dev)

```bash
git clone https://github.com/Shivanshom/movie.git
cd movie
npm install
```

🔑 Setup Environment
Create a .env file in the root:
```bash
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

Then:
```bash
npm run dev
```

🙋‍♂️ Author
Made with ❤️ by Shivansh Srivastava

