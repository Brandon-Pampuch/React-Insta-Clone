import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <p className="">
      <strong>{props.username}</strong>: {props.comment}
    </p>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default Comment;
