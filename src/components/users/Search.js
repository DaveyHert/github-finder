import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  // Initiate Github Context
  const githubContext = useContext(GithubContext);
  const { searchUsers, users, clearUsers } = githubContext;
  // Initialize Alert Context
  const alertContext = useContext(AlertContext);
  console.log(alertContext);

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
      alertContext.setAlert(`Please enter a user's name`, "light");
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
      {users.length > 0 && (
        <button type='submit' className='btn btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
