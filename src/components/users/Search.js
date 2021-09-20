import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setAlert, searchUsers, clearUsers, showClear }) => {
  // Set state
  const [text, setText] = useState("");

  // Update state with input value
  const onChange = (e) => {
    setText(e.target.value);
  };

  // Pass query up though props
  const onSubmit = (e) => {
    e.preventDefault();
    // create alert if input is empty
    if (text === "") {
      setAlert(`Please enter a user's name`, "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

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
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
