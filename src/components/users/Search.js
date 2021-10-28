import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showAlert }) => {
  // Initiate Github Context
  const githubContext = useContext(GithubContext);
  const { searchUsers, users, clearUsers } = githubContext;

  // Set state
  const [text, setText] = useState("");

  // Update state with input value
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // create alert if input is empty
    if (text === "") {
      showAlert(`Please enter a user's name`, "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const showClear = users.length > 0 ? true : false;

  // render search form
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Search;
