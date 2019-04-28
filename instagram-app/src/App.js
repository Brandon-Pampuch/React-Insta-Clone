import React from 'react';
import './App.scss';
import './global-styles/global.scss'
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
    <div className="container">
      <SearchBar/>
       {this.state.data.map(post =>{
        return <PostContainer post={post} key={post.id} />
       })}
    </div>
  );
  }
}





export default App;
