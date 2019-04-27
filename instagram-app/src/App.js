import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer'
import SearchBar from './components/SearchBar'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data : dummyData
    }
  }
  
  render(){
  return (
    <div>
      <SearchBar/>
       {this.state.data.map(post =>{
        return <PostContainer post={post} key={post.id} />
       })}
    </div>
  );
  }
}





export default App;
