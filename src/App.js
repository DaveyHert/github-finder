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
  const [users, setUsers] = useState([])
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

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
  searchUsers = async (query) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const data = await res.data;
    this.setState({ users: data.items, loading: false });
  };

  // Clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Get single user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  // Get Users Repo
  getUserRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ repos: res.data });
  };
  //Set alert if input is empty
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    // remove alert
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  // render components
  render() {
    const { users, user, loading, alert, repos } = this.state;
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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
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
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
