import React from "react";
import CommentSection from './CommentSection'

const PostContainer = props => {

    
        
    return (
    <>
   
        <h1>{props.post.username}</h1>
        <CommentSection comments={props.post.comments}  />
    </>
    )

};

export default PostContainer;
