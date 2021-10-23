import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

import React, { Component } from "react";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   // Loading spinner and fetch data
  //   this.setState({ loading: true });
  //   const res = await fetch(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_id}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  //   );
  //   const data = await res.json();

  //   // update state and end loading spinner
  //   this.setState({ users: data, loading: false });
  // }

  // Receive query in search component and fetch users
  searchUsers = async (query) => {
    this.setState({ loading: true });
    const res = await fetch(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_CLIENT_id}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const data = await res.json();
    this.setState({ users: data.items, loading: false });
  };

  // Clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
