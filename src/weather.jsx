import { useState } from "react"
import axios from "axios";

function Weather()
{
    const[city,setCity]=useState("")

    const[weather,setweather]=useState("")
    const[temp,settemp]=useState("")
    const[desc,setdesc]=useState("")

    function handleCity(evt)
    {
      setCity(evt.target.value)
    }
    function getWeather()
    {
    var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=774d1de5efa9e2207244e9930a29cb1d`)

        weatherData.then(function(sucess)
    
    {
       console.log(sucess.data)
       setweather(sucess.data.weather[0].main)
       setdesc(sucess.data.weather[0].description)
       settemp(sucess.data.main.temp)
    })
    }
    return(
        <div className="bg-black p-20">
            <div className="bg-green-400 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a weaather report about your city!</p>
                <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md focus:outline-none  " placeholder="Enter your city name"></input><br/>
               
                <button onClick={getWeather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>

                <div className="mt-2">
                    <h1><b>Weather: </b>{weather}</h1>
                    <p><b>Temperature: </b>{temp}</p>
                    <p><b></b>Description: <b/>{desc}</p>

                </div>

            </div>

        </div>
        
    )

}
export default Weather 