import React from "react";
import Comment from "./Comment";


const CommentsSection = props => {
  return (
    
    
    <div className="">
      {props.comments.map(comment => {
        return <Comment comment={comment} key={comment.id} />;
      })}
      <h1>hello</h1>
      <input type="text"></input>
    </div>
  );
};

export default CommentsSection;
