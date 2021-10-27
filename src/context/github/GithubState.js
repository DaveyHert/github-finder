import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async (query) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const data = await res.data;

    dispatch({
      type: SEARCH_USERS,
      payload: data.items,
    });
  };

  //Get User

  //Get Repos

  //Clear Users

  // Set Loading

  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.user,
        user: state.user,
        repos: state.repo,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
