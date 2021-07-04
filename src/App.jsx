import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './components';
// import Normalize from 'react-normalize';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Creeks = lazy(() => import('./pages/Creeks/Creeks'));
const TopCreeks = lazy(() => import('./pages/TopCreeks/TopCreeks'));
const Map = lazy(() => import('./pages/Map/Map'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const BASE_URL = 'http://localhost:3500';

const App = () => {
  const [creeks, setCreeks] = useState([]);
  const [renderFooter, setrenderFooter] = useState(false);


  useEffect(() => {
    const getCreeks = async () => {
      let res = await fetch(`${BASE_URL}/creeks`);
      let creeksList = await res.json();

      setCreeks(creeksList);
    };

    getCreeks();
  }, []);

  const showFooter = (value) => {
    setrenderFooter(value)
  }

  const getCreekById = (id) => {
    return creeks.find((creek) => creek._id === id);
  };

  return (
    <>
      {/* <Normalize /> */}
      <Router>
        <div>
          <Navbar />
          <Suspense fallback={<div>Lazy Loading</div>}>
            <Switch>
              <Route exact path='/' component={(props) => <Home {...props} creeks={creeks} showFooter={showFooter} />} />
              <Route exact path='/about' component={(props) => <About {...props} showFooter={showFooter} />} />
              <Route exact path='/creeks' component={(props) => <Creeks {...props} creeks={creeks} showFooter={showFooter} />} />
              <Route exact path='/top-creeks' component={(props) => <TopCreeks {...props} creeks={creeks} showFooter={showFooter} />} />
              <Route exact path='/map' component={(props) => <Map {...props} creeks={creeks} showFooter={showFooter} />} />
              <Route
                exact
                path='/detail/:id'
                component={(props) => <Detail {...props} creek={getCreekById(props.match.params.id)} showFooter={showFooter} />}

              />
              <Route exact path='/login' component={(props) => <Login {...props} showFooter={showFooter} />} />
              <Route exact path='/register' component={(props) => <Register {...props} showFooter={showFooter} />} />
              <Route exact path='/contact' component={(props) => <Contact {...props} showFooter={showFooter} />} />
            </Switch>
          </Suspense>
          <div>
            {renderFooter && <Footer />}
          </div>

        </div>
      </Router>
    </>
  );
};

export default App;
