import React, {Component} from 'react';
import weather from './weather.json';
import {Link} from 'react-router-dom';


class Temps extends Component {
  state = {
    weather: weather
  }

  render() {
      const renderWeather = this.state.weather.map(weather => (
    <>
      <h2>{weather.day}</h2>
      <h3>Low: {weather.temp.low}</h3>
      <h3>High: {weather.temp.high}</h3>
    </>
  ));
  return (
    <>
    <div className="nav">
    <Link to="/">Home</Link>
    </div>

    <div className="wrapper">
    <h1>Forecast</h1>
    {renderWeather}
    </div>

    </>
  );
}
}

export default Temps;