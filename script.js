// Update time in topbar
function updateTime() {
    var now = new Date();
    var dateStr = now.toLocaleDateString('id-ID', { day:'2-digit', month:'2-digit', year:'numeric' });
    var timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    var el = document.getElementById('date');
    if (el) el.textContent = dateStr + ' ' + timeStr;

    var wt = document.getElementById('weather-time');
    if (wt) wt.textContent = timeStr;
}
setInterval(updateTime, 1000);
updateTime();

// Draggable windows
dragElement(document.querySelector(".container-wrapper"));

function dragElement(element) {
    if (!element) return;
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'textarea' || tag === 'input' || tag === 'button' || tag === 'a' || tag === 'iframe') return;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = drag;
    }

    function drag(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Toggle kenOS window
let kenosOpen = true;
function toggleContainer() {
    const wrapper = document.querySelector(".container-wrapper");
    const dot = document.getElementById("kenos-dot");
    kenosOpen = !kenosOpen;
    wrapper.style.display = kenosOpen ? "block" : "none";
    dot.style.opacity = kenosOpen ? "1" : "0.5";
}

let aboutmeOpen = false;

function toggleAboutMe() {
    const wrapper = document.getElementById("aboutme-wrapper");
    const dot = document.getElementById("aboutme-dot");
    aboutmeOpen = !aboutmeOpen;
    wrapper.style.display = aboutmeOpen ? "block" : "none";
    dot.style.opacity = aboutmeOpen ? "1" : "0.5";
    if (aboutmeOpen) dragElement(wrapper);
}

// Weather app
const weatherCodes = {
    0: { desc: "Clear sky", emoji: "☀️" },
    1: { desc: "Mainly clear", emoji: "🌤️" },
    2: { desc: "Partly cloudy", emoji: "⛅" },
    3: { desc: "Overcast", emoji: "☁️" },
    45: { desc: "Foggy", emoji: "🌫️" },
    48: { desc: "Icy fog", emoji: "🌫️" },
    51: { desc: "Light drizzle", emoji: "🌦️" },
    53: { desc: "Drizzle", emoji: "🌦️" },
    55: { desc: "Heavy drizzle", emoji: "🌧️" },
    61: { desc: "Slight rain", emoji: "🌧️" },
    63: { desc: "Rain", emoji: "🌧️" },
    65: { desc: "Heavy rain", emoji: "🌧️" },
    71: { desc: "Light snow", emoji: "🌨️" },
    73: { desc: "Snow", emoji: "❄️" },
    75: { desc: "Heavy snow", emoji: "❄️" },
    80: { desc: "Rain showers", emoji: "🌦️" },
    81: { desc: "Rain showers", emoji: "🌧️" },
    82: { desc: "Violent showers", emoji: "⛈️" },
    95: { desc: "Thunderstorm", emoji: "⛈️" },
    99: { desc: "Thunderstorm w/ hail", emoji: "⛈️" },
};

let weatherLoaded = false;

async function fetchWeather(lat, lon) {
    try {
        // Get city name
        const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const geoData = await geoRes.json();
        const city = geoData.address.city || geoData.address.town || geoData.address.village || geoData.address.county || "Unknown";

        // Get weather
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius`);
        const weatherData = await weatherRes.json();
        const cw = weatherData.current_weather;
        const code = cw.weathercode;
        const info = weatherCodes[code] || { desc: "Unknown", emoji: "🌡️" };

        document.getElementById('weather-city').textContent = city;
        document.getElementById('weather-temp').textContent = Math.round(cw.temperature) + '°';
        document.getElementById('weather-emoji').textContent = info.emoji;
        document.getElementById('weather-desc').textContent = info.desc;
        weatherLoaded = true;
    } catch (e) {
        document.getElementById('weather-city').textContent = "Error";
        document.getElementById('weather-desc').textContent = "Couldn't load weather";
    }
}

function loadWeather() {
    if (weatherLoaded) return;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => fetchWeather(pos.coords.latitude, pos.coords.longitude),
            () => {
                // Fallback: Bekasi, Indonesia
                fetchWeather(-6.2349, 107.0004);
            }
        );
    } else {
        fetchWeather(-6.2349, 107.0004);
    }
}

let weatherOpen = false;

function toggleWeather() {
    const wrapper = document.getElementById("weather-wrapper");
    const dot = document.getElementById("weather-dot");

    weatherOpen = !weatherOpen;
    wrapper.style.display = weatherOpen ? "block" : "none";
    dot.style.background = weatherOpen ? "white" : "rgba(255,255,255,0.8)";
    dot.style.opacity = weatherOpen ? "1" : "0.5";

    if (weatherOpen) {
        loadWeather();
        dragElement(wrapper);
    }
}
// Notes app
let notesOpen = false;

function toggleNotes() {
    const wrapper = document.getElementById("notes-wrapper");
    const dot = document.getElementById("notes-dot");
    notesOpen = !notesOpen;
    wrapper.style.display = notesOpen ? "block" : "none";
    dot.style.opacity = notesOpen ? "1" : "0.5";
    if (notesOpen) {
        dragElement(wrapper);
        loadNotes();
    }
}

function loadNotes() {
    const textarea = document.getElementById("notes-textarea");
    textarea.value = localStorage.getItem("kenos-notes") || "";
}

function clearNotes() {
    if (confirm("Hapus semua notes?")) {
        document.getElementById("notes-textarea").value = "";
        localStorage.removeItem("kenos-notes");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("notes-textarea");
    if (textarea) {
        textarea.addEventListener("input", () => {
            localStorage.setItem("kenos-notes", textarea.value);
        });
    }
});