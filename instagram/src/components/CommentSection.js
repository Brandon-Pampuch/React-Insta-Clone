import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentBorder = styled.div`
  border-bottom: 2px solid rgb(184, 184, 184);
`;

const CommentInput = styled.input`
  padding: 17px 0px;
  width: 1050px;
  border: 0;
  outline: 0;
  font-size: 2.5rem;
`;

const CommentIcon = styled.i`
  font-size: 2rem;
`;

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      curComment: {
        text: "",
        username: "billy bob",
        id: ""
      }
    };
  }

  componentWillMount() {
    localStorage.getItem("comments") &&
      this.setState({
        comments: JSON.parse(localStorage.getItem("comments")),
        isLoading: false
      });
  }

  componentDidMount() {
    console.log("comments:", this.props.comments);
    if (!localStorage.getItem("comments")) {
      this.setState({ comments: this.props.comments });
    } else {
      console.log("using data from local storage");
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("comments", JSON.stringify(nextState.comments));
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      comments: [...this.state.comments, this.state.curComment],
      curComment: {
        text: "",
        id: "",
        username: "billy bob"
      }
    });
  };

  onChangeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: {
        ...this.state.curComment,
        text: event.target.value,
        id: Date.now(),
        username: "BillyBob"
      }
    });
  };

  render() {
    return (
      <div>
        <CommentBorder>
          {this.state.comments.map(comment => {
            return (
              <Comment
                comment={comment.text}
                key={comment.id}
                username={comment.username}
              />
            );
          })}
        </CommentBorder>
        <form onSubmit={this.addNewComment}>
          <CommentInput
            onChange={this.onChangeHandler}
            type="text"
            placeholder="Add comment..."
            value={this.state.curComment.text}
            name="curComment"
          />
        </form>

        <CommentIcon className="fas fa-ellipsis-h" />
      </div>
    );
  }
}

CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentsSection;
