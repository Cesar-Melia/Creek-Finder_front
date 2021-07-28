import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './components';
import { CheckSession } from './api/auth.api';

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
const UserPanel = lazy(() => import('./pages/UserPanel/UserPanel'));

const BASE_URL = 'http://localhost:3500';

export const UserContext = React.createContext(null);

const App = () => {
  const [creeks, setCreeks] = useState([]);
  const [user, setUser] = useState(null);

  const [renderFooter, setrenderFooter] = useState(false);

  useEffect(() => {
    const getCreeks = async () => {
      let res = await fetch(`${BASE_URL}/creeks`);
      let creeksList = await res.json();

      setCreeks(creeksList);
    };

    getUser();
    getCreeks();
  }, []);

  const showFooter = value => {
    setrenderFooter(value);
  };

  const getCreekById = id => {
    return creeks.find(creek => creek._id === id);
  };

  const getUser = async () => {
    try {
      const session = await CheckSession();
      setUser(session);
    } catch (error) {
      console.log('error get user data (check session)', error);
    }
  };
  const saveUser = (user) => setUser(user);



  return (
    <>
      {/* <Normalize /> */}
      <Router>
        <UserContext.Provider value={{ user, saveUser }}>
          <div>
            <Navbar />
            <Suspense fallback={<div>Lazy Loading</div>}>
              <Switch>
                <Route
                  exact={true}
                  path='/'
                  component={props => <Home {...props} creeks={creeks} showFooter={showFooter} />}
                />
                <Route exact={true} path='/about' component={props => <About {...props} showFooter={showFooter} />} />
                <Route
                  exact={true}
                  path='/creeks'
                  component={props => <Creeks {...props} creeks={creeks} showFooter={showFooter} />}
                />
                <Route
                  exact={true}
                  path='/top-creeks'
                  component={props => <TopCreeks {...props} creeks={creeks} showFooter={showFooter} />}
                />
                <Route
                  exact={true}
                  path='/map'
                  component={props => <Map {...props} creeks={creeks} showFooter={showFooter} />}
                />
                <Route
                  exact={true}
                  path='/detail/:id'
                  component={props => (
                    <Detail {...props} creek={getCreekById(props.match.params.id)} showFooter={showFooter} />
                  )}
                />
                <Route exact={true} path='/login' component={props => <Login {...props} showFooter={showFooter} />} />
                <Route
                  exact={true}
                  path='/register'
                  component={props => <Register {...props} showFooter={showFooter} />}
                />
                <Route
                  exact={true}
                  path='/contact'
                  component={props => <Contact {...props} showFooter={showFooter} />}
                />
                <Route exact={true} path='/user-panel'>
                  <UserPanel />
                </Route>
              </Switch>
            </Suspense>
            <div>{renderFooter && <Footer />}</div>
          </div>
        </UserContext.Provider>
      </Router>
    </>
  );
};

export default App;
