import axios from "axios";

async function fetchWeather(city = "Mumbai") {
    const res = await axios.get("https://api.weatherapi.com/v1/current.json", {
        params: {
            key: import.meta.env.VITE_WEATHER_API_KEY,
            q: city,
        },
    });

    const data = res.data;
    const time = data.location.localtime;
    const temp = data.current.temp_c;
    const pressure = data.current.pressure_mb;
    const wind = data.current.wind_kph;
    const humidity = data.current.humidity;
    const condition = data.current.condition;

    return { time, temp, pressure, wind, humidity, condition };
}

export default fetchWeather;
