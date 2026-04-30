# 👋 kenOS

A macOS-inspired personal desktop experience built with HTML, CSS, and JavaScript — by **kenji**, a hack clubber from Indonesia 🇮🇩

---

## ✨ Features

- 🖥️ **macOS-style Dock** with hover animations and open-app indicators
- 🌤️ **Weather App** — shows real-time weather based on your location (fallback: Bekasi, Indonesia)
- 📝 **Notes App** — write and auto-save notes with localStorage
- 👤 **Social / About Me** — links to kenji's Instagram (`@coplikso`)
- 🎵 **Spotify Embed** — kenji's favorite song
- 🕐 **Live Clock & Date** in the top bar (Indonesian locale)
- 🪟 **Draggable Windows** — all app windows can be moved around freely

---

## 🚀 Getting Started

Just open `index.html` in your browser — no build tools or dependencies needed.

```bash
# Clone or download the project, then:
open index.html
```

> ⚠️ The weather app uses `navigator.geolocation`. Allow location access for accurate weather, or it'll default to Bekasi, Indonesia.

---

## 📁 File Structure

```
kenOS/
├── index.html      # Main HTML structure
├── style.css       # All styles (glassmorphism, dock, windows)
├── script.js       # App logic (weather, notes, dragging, clock)
├── pop.avif        # Desktop wallpaper
├── pap.png         # Profile picture (kenOS icon)
├── paopop.jpeg     # Profile picture (Social icon)
├── ios.png         # Weather app icon
└── notes.png       # Notes app icon
```

---

## 🌐 APIs Used

- [Open-Meteo](https://open-meteo.com/) — free weather data (no API key needed)
- [Nominatim (OpenStreetMap)](https://nominatim.openstreetmap.org/) — reverse geocoding for city name

---

## 🛠️ Built With

- Vanilla HTML, CSS & JavaScript — no frameworks
- Glassmorphism UI design
- `localStorage` for persistent notes
- CSS `backdrop-filter` for frosted glass effects

---

## 📸 Wallpaper Credit

Background photo from Unsplash:  
[https://unsplash.com/photos/a-view-of-the-ocean-from-the-top-of-a-mountain-2fWZ9jsoIe0](https://unsplash.com/photos/a-view-of-the-ocean-from-the-top-of-a-mountain-2fWZ9jsoIe0)

---

## 👤 Author

**kenji** — hack clubber from Indonesia  
Instagram: [@coplikso](https://www.instagram.com/coplikso/)
