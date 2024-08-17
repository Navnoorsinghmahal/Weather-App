# Weather App

This repository contains the source code for a Weather App built using React. The app allows users to search for weather information by city, displaying current weather details such as temperature, description, and wind speed.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```

## Configuration

- **API Key**: The app uses the OpenWeatherMap API. Replace the placeholder API key in `App.js` with your own API key.
  ```js
  const apiKey = 'YOUR_API_KEY';
## Usage

1. **Start the server:**
    ```sh
    npm run dev
    ```

2. **Open your browser and navigate to:**
    ```sh
    http://localhost:5174
    ```

3. **Use the search bar to find weather information:**
    - Enter the name of a city in the search bar.
    - Press Enter or click the search button to retrieve the weather data for the city.

4. **View the weather details:**
    - The application will display the current temperature, weather description, and wind speed for the searched city.

5. **Handle errors:**
    - If the city is not found, an error message will be displayed indicating that the city was not found.

## Features

- Search for weather information by city name
- Display current temperature, weather description, and wind speed
- Show weather icons from OpenWeatherMap
- Handle errors for invalid city names
- Responsive design with a modern UI

 ## Folder Structure

```bash
WeatherApp/
├── public/                 # Public assets (images, favicon, etc.)
│   └── pexels-pixabay-53594.jpg
├── src/
│   ├── App.css             # Styling for the application
│   ├── App.js              # Main application file
│   └── index.js            # Entry point for React
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```
## Dependencies

- `axios`: For making HTTP requests to fetch weather data.
- `react`: The core library for building the user interface.
- `react-dom`: For rendering React components to the DOM.
- `react-loader-spinner`: Provides a loading spinner component.
- `@fortawesome/react-fontawesome`: For FontAwesome icon integration.
- `@fortawesome/free-solid-svg-icons`: Provides solid icons from FontAwesome.
