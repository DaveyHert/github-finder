import react, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  // define initial state with initial data
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  //
};
