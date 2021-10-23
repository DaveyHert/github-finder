import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  // Update state with input value
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Pass query up though props
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: "" });
  };

  // render search form
  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='submit'
          className='btn btn-block btn-dark'
        />
      </form>
    );
  }
}

export default Search;
