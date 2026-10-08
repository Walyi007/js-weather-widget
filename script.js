/**
 * Widget Météo Simple
 * Remplacez VOTRE_CLÉ_API par votre vraie clé OpenWeatherMap
 */
const API_KEY = 'VOTRE_CLÉ_API'; // <-- Obtenez-en une sur https://openweathermap.org/api
const VILLE = 'Cotonou';        // Ville par défaut
const UNITES = 'metric';        // Utilisez 'metric' pour Celsius, 'imperial' pour Fahrenheit
const LANGUE = 'fr';            // Langue de la description

const widget = document.getElementById('weather-widget');

function afficherMeteo(donnees) {
    widget.innerHTML = `
        <div class="meteo-info">
            <img src="https://openweathermap.org/img/wn/${donnees.weather[0].icon}@2x.png"
                 alt="${donnees.weather[0].description}" class="meteo-icone">
            <div class="temperature">${Math.round(donnees.main.temp)}°C</div>
            <div class="description">${donnees.weather[0].description}</div>
        </div>
        <div class="details">
            <div class="detail-item">
                <div class="detail-label">Humidité</div>
                <div class="detail-value">${donnees.main.humidity}%</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Vent</div>
                <div class="detail-value">${donnees.wind.speed} m/s</div>
            </div>
        </div>
    `;
}

function afficherErreur(message) {
    widget.innerHTML = `<div class="erreur">Erreur : ${message}</div>`;
}

function chargerMeteo() {
    widget.innerHTML = '<div class="chargement">Chargement de la météo…</div>';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(VILLE)}&appid=${API_KEY}&units=${UNITES}&lang=${LANGUE}`;

    fetch(url)
        .then(reponse => {
            if (!reponse.ok) {
                throw new Error(`HTTP ${reponse.status}: ${reponse.statusText}`);
            }
            return reponse.json();
        })
        .then(donnees => {
            afficherMeteo(donnees);
        })
        .catch(erreur => {
            afficherErreur(erreur.message);
        });
}

// Charger la météo au chargement de la page
chargerMeteo();

// Optionnel : rafraîchir toutes les 10 minutes
setInterval(chargerMeteo, 10 * 60 * 1000);