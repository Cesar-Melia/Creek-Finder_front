import React, { useState, lazy, Suspense } from 'react';
import L from 'leaflet';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MapImage, Navbar } from './components';

import './App.scss';

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Detail = lazy(() => import('./pages/Detail/Detail'))
const Creeks = lazy(() => import('./pages/Creeks/Creeks'))
const Map = lazy(() => import('./pages/Map/Map'))
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))
const Contact = lazy(() => import('./pages/Contact/Contact'))

const App = () => {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Suspense fallback={<div>Lazy Loading</div>}>
            <Switch>
              <Route exact path="/" component={(props) => <Home {...props} />} />
              <Route exact path="/about" component={(props) => <About {...props} />} />
              <Route exact path="/detail" component={(props) => <Detail {...props} />} />
              <Route exact path="/creeks" component={(props) => <Creeks {...props} />} />
              <Route exact path="/map" component={(props) => <Map {...props} />} />
              <Route exact path="/login" component={(props) => <Login {...props} />} />
              <Route exact path="/register" component={(props) => <Register {...props} />} />
              <Route exact path="/contact" component={(props) => <Contact {...props} />} />
            </Switch>
          </Suspense>
        </div>

      </Router>
      <div className="map-container">
        <MapImage />
      </div>

    </>
  );
};

export default App;
