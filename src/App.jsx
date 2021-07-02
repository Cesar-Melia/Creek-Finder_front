import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Creeks = lazy(() => import('./pages/Creeks/Creeks'));
const Map = lazy(() => import('./pages/Map/Map'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const BASE_URL = 'http://localhost:3500';

const App = () => {
  const [creeks, setCreeks] = useState([]);
  const [weather, setWeather] = useState([]);
  console.log(creeks);


  useEffect(() => {
    const getCreeks = async () => {
      let res = await fetch(`${BASE_URL}/creeks`);
      let creeksList = await res.json();

      setCreeks(creeksList);
    };

    getCreeks();
  }, []);
  useEffect(() => {
    const getWeather = async () => {
      let res = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=XJW3MMM5LMPQU2KXVDRCC6S6R&dataElements=default&locations=Menorca%20Spain'
      )
      let apiWeather = await res.json();
      setWeather(apiWeather);
    };

    getWeather();

  }, []);
  console.log(weather)
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Suspense fallback={<div>Lazy Loading</div>}>
            <Switch>
              <Route exact path='/' component={(props) => <Home {...props} creeks={creeks} />} />
              <Route exact path='/about' component={(props) => <About {...props} />} />
              <Route exact path='/detail/:id' component={(props) => <Detail {...props} />} />
              <Route exact path='/creeks' component={(props) => <Creeks {...props} creeks={creeks} />} />
              <Route exact path='/map' component={(props) => <Map {...props} creeks={creeks} />} />
              <Route exact path='/login' component={(props) => <Login {...props} />} />
              <Route exact path='/register' component={(props) => <Register {...props} />} />
              <Route exact path='/contact' component={(props) => <Contact {...props} />} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </>
  );
};

export default App;
