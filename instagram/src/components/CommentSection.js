import React from "react";
import Comment from "./Comment";


const CommentsSection = props => {
  return (
    
    
    <div className="" >
      {props.comments.map(comment => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </div>
  );
};

export default CommentsSection;
