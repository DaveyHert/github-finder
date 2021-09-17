import React, { useState, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import about from "./components/pages/about";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  /*
 async componentDidMount() {
  // Loading spinner and fetch data
  this.setState({ loading: true });
  const res = await fetch(
    `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_id}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  );
  const data = await res.json();

  // update state and end loading spinner
  this.setState({ users: data, loading: false });
}
*/

  // Receive query in search component and fetch multiple users
  const searchUsers = async (query) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const data = await res.data;
    setUsers(data.items);
    setLoading(false);
  };

  // Clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Get single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  // Get Users Repo
  const getUserRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setRepos(res.data);
  };

  //Set alert if input is empty
  const setAlert = (msg, type) => {
    setAlert({ msg, type });
    // remove alert
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // render components
  return (
    // wrap whole app in router
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
              //a render props is used when multiple components are to be shown
              render={(props) => (
                <Fragment>
                  {/* Search component */}
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  {/* Users list component */}
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            {/* About Page Route */}
            <Route exact path='/about' component={about} />
            {/* Get single user route */}
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading}
                  getUserRepos={getUserRepos}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
