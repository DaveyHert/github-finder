import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/about";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  // render components
  return (
    // wrap whole app in router
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />

            <div className='container'>
              <Alert />

              <Switch>
                {/* Home Page Route */}
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <Fragment>
                      {/* Search component */}
                      <Search />
                      {/* Users list component */}
                      <Users />
                    </Fragment>
                  )}
                />
                {/* About Page Route */}
                <Route exact path='/about' component={About} />
                {/* Get single user route */}
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
