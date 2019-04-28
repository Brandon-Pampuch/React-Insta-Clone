import React from "react";
import Comment from "./Comment";
import "./CommentSection.scss"
import PropTypes from 'prop-types';

const CommentsSection = props => {
  return (
    <div className="comment-section">
      <div className="comment-section__comment-list">
        {props.comments.map(comment => {
          return <Comment comment={comment.text} key={comment.id} username={comment.username} />;
        })}
      </div>
      <input className="comment-section__comment-input" type="text" placeholder="Add comment..." />
      <i className="fas fa-ellipsis-h comment-section__comment-icon"></i>
    </div>
  );
};

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
    
}

export default CommentsSection;
