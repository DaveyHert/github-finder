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

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);

  const [alert, setAlert] = useState(null);

  //Set alert if input is empty
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // remove alert
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // render components
  return (
    // wrap whole app in router
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />

          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              {/* Home Page Route */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    {/* Search component */}
                    <Search showAlert={showAlert} />
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
    </GithubState>
  );
};

export default App;
