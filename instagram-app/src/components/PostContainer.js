import React from "react";
import CommentSection from './CommentSection'
import { Button } from 'reactstrap';

const PostContainer = props => {

    
        
    return (
    <>
        {console.log(props.post.imageUrl)}
        <h1>{props.post.username}</h1>
        <img src={props.post.imageUrl} alt={props.post.username}></img>
        <CommentSection comments={props.post.comments}  />
    </>
    )

};

export default PostContainer;
