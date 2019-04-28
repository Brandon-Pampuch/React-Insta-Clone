import React from "react";
import CommentSection from "./CommentSection";
// import { Button } from "reactstrap";
import '../global-styles/global.scss'
import './PostContainer.scss'




const PostContainer = props => {
  return (
    <div className="">
    <div className="post-container__title">
      <img className="post-container__user-image" src={props.post.thumbnailUrl} alt={props.post.username}></img>
      <h1 className="post-container__name">{props.post.username}</h1>
    </div>
    <img className="post-container__image" src={props.post.imageUrl} alt="insta" />
    <p><strong>{props.post.likes} likes</strong></p>
    <i className="far fa-heart post-container__icon"></i>
    <i className="far fa-comment post-container__icon"></i>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default PostContainer;
