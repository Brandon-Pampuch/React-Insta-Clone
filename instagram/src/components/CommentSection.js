import React from "react";
import Comment from "./Comment";
import "./CommentSection.scss"
import PropTypes from 'prop-types';

class CommentsSection extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    comments:props.comments, //array of comments
    curComment:{
      text: "",
      username: "billy bob",
      id: ""
    } 
  }
}

  addNewComment =(event) =>{
event.preventDefault();
  this.setState({
    ...this.state,
  comments:[...this.state.comments,this.state.curComment],
   curComment:{
      text:"",
      id:"",
      username: "billy bob"
    }
    })
  }

  onChangeHandler = event =>{
  this.setState({
    ...this.state,
    [event.target.name]:{
      ...this.state.curComment,
      text: event.target.value,
      id:Date.now(),
      username: "BillyBob"
    }
  })
  }



 render(){
   
  return (
    <div className="comment-section">
      <div className="comment-section__comment-list">
        {this.state.comments.map(comment => {
          return <Comment comment={comment.text} key={comment.id} username={comment.username} />;
        })}
      </div>
      <form onSubmit={this.addNewComment}>
        <input 
        
        onChange={this.onChangeHandler}
        className="comment-section__comment-input" 
        type="text" 
        placeholder="Add comment..."
        value={this.state.curComment.text}
        name="curComment"
          />
      </form>

      <i className="fas fa-ellipsis-h comment-section__comment-icon"></i>
    </div>
  );
}
}

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
    
}

export default CommentsSection;
