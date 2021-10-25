import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const {
    user: { login, avatar_url },
  } = props;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className='btn btn-dark btn-sm my-1'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
