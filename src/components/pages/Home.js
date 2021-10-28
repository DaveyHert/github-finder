import React, { Fragment } from "react";
import Users from "../users/Users";
import Search from "../users/Search";

const Home = () => {
  return (
    <Fragment>
      {/* Search component */}
      <Search />
      {/* Users list component */}
      <Users />
    </Fragment>
  );
};
export default Home;
