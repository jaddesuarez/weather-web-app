# ☀️ Sunny - Weather Web App

A modern and responsive weather application built with React that provides real-time weather information and forecasts for cities worldwide. Features include current weather conditions, hourly forecasts, 7-day predictions, and favorite cities management.

This challenge has been developed by Jadde Suarez for [Mirai](https://www.mirai.com/).

## 🌟 Features

- Real-time weather data
- Current temperature and conditions
- Hourly forecast
- 7-day weather forecast
- Sunrise and sunset times
- City search with autocomplete
- Favorite cities management
- Multi-language support (English, Spanish, Portuguese)
- Responsive design
- Dynamic weather-based themes

## 🛠️ Tech Stack

| Technology   | Version | Description           |
| ------------ | ------- | --------------------- |
| React        | 18.2.0  | Frontend framework    |
| Vite         | 5.0.0   | Build tool            |
| Tailwind CSS | 3.3.5   | CSS framework         |
| i18next      | 23.7.6  | Internationalization  |
| Moment.js    | 2.29.4  | Date manipulation     |
| PropTypes    | 15.8.1  | Runtime type checking |

## 🌐 API Services

- [Open-Meteo](https://open-meteo.com/) API - Weather data
- [OpenStreetMap](https://www.openstreetmap.org/) Nominatim API - Geocoding service

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm

## 🚀 Installation

```bash
npm install
```

## 🌍 Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | ≥ 90    |
| Firefox | ≥ 80    |
| Safari  | ≥ 14    |
| Edge    | ≥ 90    |

## 🗂️ Project Structure

```bash
├── .vscode
├── node_modules
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   ├── context
│   │   ├── UserContext.jsx
│   │   └── UserProvider.jsx
│   ├── index.css
│   ├── lib
│   │   ├── configs
│   │   │   ├── axios.config.js
│   │   │   └── i18n.config.js
│   │   ├── constants
│   │   │   └── index.js
│   │   ├── locales
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   └── pt.json
│   │   ├── services
│   │   │   ├── nominatim.service.js
│   │   │   └── open-meteo.service.js
│   │   └── utils
│   │   ├── carousel.jsx
│   │   ├── clx.js
│   │   └── index.js
│   ├── main.jsx
│   └── ui
│   └── components
│   ├── FavoritesCitiesModal
│   ├── HourCard
│   ├── HourlyCard
│   ├── LanguageDropdown
│   ├── NavBar
│   ├── SearchPlaceInput
│   ├── SunCard
│   ├── WeatherCard
│   ├── WeekDayCard
│   └── WeekForecast
├── tailwind.config.js
└── vite.config.js
```

## 📧 Contact

Jadde Suarez - [Linkedin](https://www.linkedin.com/in/jaddesuarez/)

Deployed Application: [weather-web-app](https://jaddesuarez-weather-app.vercel.app/)
