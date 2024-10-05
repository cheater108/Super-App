import axios from "axios";

async function fetchWeather(lat, long) {
    let query = "Chennai";
    if (lat && long) {
        query = `${lat},${long}`;
    }
    const res = await axios.get("https://api.weatherapi.com/v1/current.json", {
        params: {
            key: import.meta.env.VITE_WEATHER_API_KEY,
            q: query,
        },
    });
    // console.log(res.data);
    const data = res.data;
    const time = data.location.localtime;
    const temp = data.current.temp_c;
    const pressure = data.current.pressure_mb;
    const wind = data.current.wind_kph;
    const humidity = data.current.humidity;
    const condition = data.current.condition;
    const name = data.location.name;

    return { time, temp, pressure, wind, humidity, condition, name };
}

export default fetchWeather;
