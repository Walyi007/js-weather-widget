# Widget Météo JavaScript

Un petit widget vanilla JavaScript qui affiche la météo actuelle d’une ville donnée grâce à l’API OpenWeatherMap.

## Fonctionnalités

- Récupère les données météo via l’API OpenWeatherMap  
- Affiche la température, la description et l’icône  
- Gère les erreurs avec élégance  
- Design responsive  

## Installation

1. Obtenez une clé API sur [OpenWeatherMap](https://openweathermap.org/api)  
2. Remplacez `VOTRE_CLÉ_API` dans `script.js` par votre clé réelle  
3. Ouvrez `index.html` dans un navigateur ou servez‑le avec un serveur statique  

## Utilisation

```html
<div id="weather-widget"></div>
<script src="script.js"></script>
```

Le widget s’affichera automatiquement dans l’élément portant l’id `weather-widget`.

## Personnalisation

Vous pouvez changer la ville par défaut en modifiant la variable `city` dans `script.js`.

## Licence

MIT