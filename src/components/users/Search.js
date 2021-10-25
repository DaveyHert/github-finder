import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  // Update state with input value
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Pass query up though props
  onSubmit = (e) => {
    e.preventDefault();
    // create alert if input is empty
    if (this.state.text === "") {
      this.props.setAlert(`Please enter a user's name`, "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  // render search form
  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
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
        {showClear && (
          <button type='submit' className='btn btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
