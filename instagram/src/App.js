import React from "react";
import "./App.scss";
import "./global-styles/global.scss";
import PostPage from "./components/PostsPage"
import withAuthentication from './authentication/withAthentication'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

   
    };
  }

  render() {
    return (
      <div className="container">
        <PostPage/>
      </div>
    );
  }
}

export default App;
