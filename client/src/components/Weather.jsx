import { useEffect, useState } from "react";
import fetchWeather from "../api/fetchWeather";
import styles from "./Weather.module.css";
import wind from "../assets/wind.svg";
import pressure from "../assets/pressure.svg";
import humidity from "../assets/humidity.svg";

function Weather() {
    const [weather, setWeather] = useState({});
    useEffect(() => {
        async function loadWeather(lat, long) {
            setWeather(await fetchWeather(lat, long));
        }
        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    loadWeather(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                },
                (err) => {
                    loadWeather();
                }
            );
        } else {
            /* geolocation IS NOT available */
            loadWeather();
        }

        loadWeather();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.time}>
                {weather?.time || "loading..."} &nbsp;&nbsp;&nbsp;{" "}
                {weather?.name}
            </div>
            <div className={styles.info}>
                <div className={styles.tile}>
                    <div>
                        <img src={weather?.condition?.icon} alt="" />
                    </div>
                    <p>{weather?.condition?.text}</p>
                </div>
                <div className={styles.tile}>
                    <h1>{weather?.temp} °C</h1>
                    <p>
                        <img src={pressure} alt="" />
                        &nbsp;&nbsp;
                        {weather?.pressure} mbar pressure
                    </p>
                </div>
                <div className={styles.tile}>
                    <p>
                        <img src={wind} alt="" />
                        &nbsp;&nbsp;
                        {weather?.wind} km/h Wind
                    </p>
                    <p>
                        <img src={humidity} alt="" />
                        &nbsp;&nbsp;
                        {weather?.humidity}% humidity
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Weather;
