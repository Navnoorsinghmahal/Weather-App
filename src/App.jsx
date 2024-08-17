import React, { useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './App.css';


const formatDate = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ];
    const currentDate = new Date();
    return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
};


const fetchWeatherData = async (city) => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'b41d1deed272cd04da0cfda4297f99a4';

    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: city,
                units: 'metric',
                appid: apiKey,
            },
        });
        return { data: response.data, hasError: false };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return { data: {}, hasError: true };
    }
};


const WeatherDisplay = ({ weatherData }) => (
    <div>
        <div className="city-name">
            <h2>
                {weatherData.name}, <span>{weatherData.sys.country}</span>
            </h2>
        </div>
        <div className="date">
            <span>{formatDate()}</span>
        </div>
        <div className="icon-temp">
            <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
            />
            {Math.round(weatherData.main.temp)}
            <sup className="deg">°C</sup>
        </div>
        <div className="des-wind">
            <p>{weatherData.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
    </div>
);


const ErrorComponent = () => (
    <span className="error-message">
        <FontAwesomeIcon icon={faFrown} />
        <span style={{ fontSize: '20px' }}>City not found</span>
    </span>
);


const Loader = () => (
    <Oval type="Oval" color="black" height={100} width={100} />
);

function WeatherApp() {
    const [cityInput, setCityInput] = useState('');
    const [weatherData, setWeatherData] = useState({
        isLoading: false,
        data: {},
        hasError: false,
    });

    const handleSearch = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setCityInput('');
            setWeatherData({ ...weatherData, isLoading: true });
            const result = await fetchWeatherData(cityInput);
            setWeatherData({
                data: result.data,
                isLoading: false,
                hasError: result.hasError,
            });
        }
    };

    return (
        <div className="App">
            <h1 className="app-name">Navnoor Weather App</h1>
            <div className="search-bar">
                <input
                    type="text"
                    className="city-search"
                    placeholder="Enter City Name.."
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    onKeyPress={handleSearch}
                />
            </div>
            {weatherData.isLoading && <Loader />}
            {weatherData.hasError && <ErrorComponent />}
            {weatherData.data.main && <WeatherDisplay weatherData={weatherData.data} />}
        </div>
    );
}

export default WeatherApp;
