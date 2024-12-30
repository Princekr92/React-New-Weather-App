import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="f505f04aac7c1e8df921f9d421744e4b";

    let getWeatherInfo=async()=>{
        try{

            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();

             
            
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.main.weather,
                feelslike: jsonResponse.main.feels_like,
                 
                 
            }
            console.log(result);
            return result;
        }
        catch(err){
            setError("No such place in our Api");
        }
    };

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit= async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(err){
          setError(true);  
        }

    };

    return(
     <div className='SearchBox'>
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField 
        id="city" 
        label="Enter Your City Name"
        variant="outlined" 
        required
        value={city}
        onChange={handleChange}
        />
        <br/><br />

        <Button variant="contained" type="submit">Search</Button>
        {error && <p>This place is not available on API</p>}
        </form>
    </div>)
    
}