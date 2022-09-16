import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  let kelvinVal = 273;
  let [weatherData, setweatherData] = useState();
  let [currentTem, setCurrentTem] = useState();
  let [currentSky, setcurrentSky] = useState();
  let [currentWindSpeed, setcurrentWindSpeed] = useState();
  let objweather;
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=e52c839e865eae4cac45de195be4ab28"
      )
      .then((res) => {
        setweatherData(res.data);
        let currentData = res.data;
        setCurrentTem(Math.floor(currentData?.main?.temp - kelvinVal));
        setcurrentSky(currentData?.wind?.speed);
        setcurrentWindSpeed(currentData?.wind?.speed);
      });
  }, []);

  console.warn("currentSky_TEST", currentSky);

  return (
    <>
      <div className="w-100 d-flex justify-content-center my-5 py-5">
        <div className="card bg-dark w-25 text-center text-light py-5">
          <h1>Today Weather</h1>
          <h1 className="display-1 fw-bold">{currentTem}</h1>
          <h2>{weatherData?.name}</h2>
          <h4>Wind Speed: {currentWindSpeed}</h4>
          <h4>sky: {currentSky}</h4>
        </div>
      </div>
    </>
  );
}

export default App;
