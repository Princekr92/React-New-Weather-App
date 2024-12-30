import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
      city:"",
      feelslike:0,
      temp:0,
      tempMin:0,
      tempMax:0,
      humidity:0,
      weather:"Haze",
       
       
    })

    let updateInfo=(newInfo)=>{
       setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}