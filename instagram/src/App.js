import React from "react";
import "./App.scss";
import "./global-styles/global.scss";
import PostPage from "./components/PostsPage";
import withAuthentication from "./authentication/withAuthentication";
import Login from "./components/Login/Login"


const ComponentFromWithAuthenticate = withAuthentication(PostPage)
const secondComponentFromWithAuthenticate = withAuthentication(Login)

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <ComponentFromWithAuthenticate  />
      </div>
    );
  }
}

export default App;
