import React from "react";
import CommentSection from "./CommentSection";
// import { Button } from "reactstrap";
import styled from "styled-components";

const PostImage = styled.img`
width: 100%;
height: 100%;
margin-bottom: 20px;
`
const PostUserImage = styled.img`
height:60px;
width: 60px;
border-radius: 40px;
margin: 20px;
`
const PostTitle = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
`
const PostIcon = styled.i`
font-size: 2rem;
margin-right: 20px;
margin-bottom: 10px;
`

const PostContainer = props => {
  return (
    <div className="">
      <PostTitle>
        <PostUserImage
          src={props.post.thumbnailUrl}
          alt={props.post.username}
        />
        <h1 className="post-container__name">{props.post.username}</h1>
      </PostTitle>
      <PostImage
        src={props.post.imageUrl}
        alt="insta"
      />
      <p>
        <strong>{props.post.likes}likes</strong>
      </p>
      <PostIcon
        onClick={() => props.addHeart(props.number)}
        number={props.post}
        className="far fa-heart"
      />
      <PostIcon className="far fa-comment" />
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default PostContainer;
