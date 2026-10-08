# JavaScript Weather Widget

A simple vanilla JavaScript widget that displays the current weather for a given city using the OpenWeatherMap API.

## Features

- Fetch weather data from OpenWeatherMap API
- Display temperature, description, and icon
- Handle errors gracefully
- Responsive design

## Setup

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace `YOUR_API_KEY` in `script.js` with your actual key
3. Open `index.html` in a browser or serve with a static server

## Usage

```html
<div id="weather-widget"></div>
<script src="script.js"></script>
```

The widget will automatically render into the element with id `weather-widget`.

## Customization

You can change the default city by modifying the `city` variable in `script.js`.

## License

MIT