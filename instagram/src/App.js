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
      data: [],
      search: ""
    };
  }

  componentDidMount(){
    this.setState({data : dummyData})
  }

  onChangeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  searchHandler = (event) =>{
    event.preventDefault()
    this.setState(prevState =>({
      
      data: prevState.data.filter(post =>{
        if(post.username === this.state.search){
          return true
        }else{
          return false
        }
      })
    }))

  }
  

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
    return (
      <div className="container">
        <SearchBar onChangeHandler={this.onChangeHandler} searchState={this.state.search} searchHandler={this.searchHandler} />
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
