/**
 * Simple Weather Widget
 * Replace YOUR_API_KEY with your actual OpenWeatherMap API key
 */
const API_KEY = 'YOUR_API_KEY'; // <-- Get one from https://openweathermap.org/api
const CITY = 'Cotonou'; // Default city
const UNITS = 'metric'; // Use 'metric' for Celsius, 'imperial' for Fahrenheit
const LANG = 'fr'; // Language for description

const widget = document.getElementById('weather-widget');

function renderWeather(data) {
    widget.innerHTML = `
        <div class="weather-info">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" class="weather-icon">
            <div class="temperature">${Math.round(data.main.temp)}°C</div>
            <div class="description">${data.weather[0].description}</div>
        </div>
        <div class="details">
            <div class="detail-item">
                <div class="detail-label">Humidity</div>
                <div class="detail-value">${data.main.humidity}%</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Wind</div>
                <div class="detail-value">${data.wind.speed} m/s</div>
            </div>
        </div>
    `;
}

function renderError(message) {
    widget.innerHTML = `<div class="error">Error: ${message}</div>`;
}

function loadWeather() {
    widget.innerHTML = '<div class="loading">Loading weather...</div>';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(CITY)}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            renderWeather(data);
        })
        .catch(error => {
            renderError(error.message);
        });
}

// Load weather on page load
loadWeather();

// Optionally, refresh every 10 minutes
setInterval(loadWeather, 10 * 60 * 1000);