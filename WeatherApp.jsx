import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./src/SearchBox"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        temp : 22,
        tempMin: 22,
        tempMax: 22,
        humidity: 22,
        feels_like: 22,
        weather: "Haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </>
    )
}