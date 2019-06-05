import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Temps from './Temps';


class App extends Component {



  render() {


  return (
    <div className="App Site">
    <div className="Content">
        <Router>
        <div>
          <Route path = "/" exact component = {Home} />
          <Route path = "/Temps" component = {Temps}/>

        </div>
        </Router>

        </div>
        <Footer name="Meghan" year="2019"/>
    </div>
  );
  }
}

export default App;
