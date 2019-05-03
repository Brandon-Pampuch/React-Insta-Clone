import React from "react";
import "../App.scss";
import dummyData from "../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "./SearchBar";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredPosts: [],
      search: ""
    };
  }

  componentWillMount() {
    localStorage.getItem("users") &&
      this.setState({
        data: JSON.parse(localStorage.getItem("users")),
        isLoading: false
      });
  }

  componentDidMount() {
    if (!localStorage.getItem("users")) {
      this.setState({ data: dummyData });

    } else {
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("users", JSON.stringify(nextState.data));
  }

  onChangeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  searchHandler = event => {
    const posts = this.state.data.filter(post => post.username.includes(event.target.value));
    this.setState({filteredPosts:posts});
  };

  addHeart = id => {
    this.setState(prevState => ({
      data: prevState.data.map(post => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.likes + 1
          };
        } else {
          return post;
        }
      })
    }));
  };

  render() {

    if(this.state.filteredPosts.length > 0){
    return (
      <div className="container">
        <SearchBar
          onChangeHandler={this.onChangeHandler}
          searchState={this.state.search}
          searchHandler={this.searchHandler}
        />

       
        {this.state.filteredPosts.map((post, index) => {
          return (
            <PostContainer
              post={post}
              key={post.id}
              index={index}
              addHeart={this.addHeart}
              number={post.id}
            />
          );
        })}
      </div>
    );
}else{
  return (
    <div className="container">
      <SearchBar
        onChangeHandler={this.onChangeHandler}
        searchState={this.state.search}
        searchHandler={this.searchHandler}
      />

     
      {this.state.data.map((post, index) => {
        return (
          <PostContainer
            post={post}
            key={post.id}
            index={index}
            addHeart={this.addHeart}
            number={post.id}
          />
        );
      })}
    </div>
  );


}







  }
}

export default PostPage;
