import React from "react";
import "./App.scss";
import "./global-styles/global.scss";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  addHeart = key => {
    this.setState({
      ...this.state,

    });
  };

  render() {
    return (
      <div className="container">
        <SearchBar />
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

export default App;
