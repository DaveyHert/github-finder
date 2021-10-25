import React from "react";
import { Fragment } from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

function Repos({ repos }) {
  return (
    <Fragment>
      <h2 className='text-center mt-2'>Repos</h2>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
