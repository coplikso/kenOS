# kenOS
# kenOS 🖥️

> Personal desktop-style web portfolio by **Kenji** — Hack Clubber from Indonesia 🇮🇩

---

## ✨ Features

- **kenOS Window** — intro card with profile pic, bio, and embedded Spotify track
- **Weather App** — live weather via geolocation (fallback: Bekasi, Indonesia)
- **Sosmed Window** — profile card with Instagram link
- **macOS-style Dock** — animated dock with hover bounce & open/close indicator dots
- **Draggable Windows** — all windows can be freely moved around
- **Real-time Clock** — topbar shows live date & time (locale: id-ID)
- **Glassmorphism UI** — frosted glass aesthetic with backdrop blur

---

## 📁 File Structure

```
kenOS/
├── index.html      # App structure — windows, dock, topbar
├── style.css       # All styles — glassmorphism, dock, weather, about me
├── script.js       # Logic — clock, drag, window toggles, weather fetch
├── pap.png         # Profile picture (used in kenOS & About Me windows)
├── paopop.jpeg     # Dock icon for "my sosmed"
├── ios.png         # Dock icon for Weather app
└── pop.avif        # Background wallpaper
```

---

## 🚀 How to Run

No build step needed. Just open `index.html` in any modern browser.

```bash
# Serve locally (optional)
npx serve .
# or
python -m http.server
```

> ⚠️ The weather app uses the browser Geolocation API. Allow location access when prompted, or it defaults to Bekasi, Indonesia.

---

## 🌦️ APIs Used

| API | Purpose |
|-----|---------|
| [Open-Meteo](https://open-meteo.com/) | Weather data — free, no key needed |
| [Nominatim / OSM](https://nominatim.org/) | Reverse geocoding for city name |
| [Spotify Embed](https://open.spotify.com/) | Favorite song player |

---

## 🎨 Design Notes

- **Font:** `-apple-system, BlinkMacSystemFont` (native system UI font)
- **Style:** Glassmorphism — semi-transparent panels + `backdrop-filter: blur`
- **Background:** `pop.avif` ([Unsplash source](https://unsplash.com/photos/a-view-of-the-ocean-from-the-top-of-a-mountain-2fWZ9jsoIe0))
- **Accent colors:** Warm peach tones (`#FFB399`, `#FFD6A6`, `#FFF0BE`) in topbar

---

## 👤 Author

**Kenji** — CSS enjoyer, JavaScript reluctant user

- 📸 Instagram: [@coplikso](https://www.instagram.com/coplikso/)
