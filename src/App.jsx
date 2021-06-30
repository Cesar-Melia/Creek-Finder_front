import React, { useState, lazy, Suspense } from 'react';
import L from 'leaflet';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MapImage, Navbar } from './components';

import './App.scss';

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))

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
            </Switch>
          </Suspense>
        </div>

      </Router>

      <MapImage />
    </>
  );
};

export default App;
