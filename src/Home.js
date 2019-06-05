import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Weather from './Weather';
import Form from './Form';
import Titles from './Titles'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Home extends Component {
  getWeather = async (e) => {
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=e10e90824980ea7a02f7521a24176e6e`);

    const response = await api_call.json();
if(city && country){
  this.setState({
    temperature: response.main.temp,
    city: response.name,
    country: response.sys.country,
    humidity: response.main.humidity,
    description: response.weather[0].description,
    error: ""
  })
}else{
    this.setState({
    error: "Please enter the values..."
})
}
    console.log(response);

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })

  }
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  render() {

  return (
    <>
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/Temps">Temperatures</Link>
    </div>
    <div className="wrapper">
      <div className="title-container">
        <Titles />
      </div>
      <div className="form-container">
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
   </div>

    </>  )


  }
}

export default Home;