import React from "react";
import "./global-styles/global.scss";
import PostPage from "./components/PostsPage";
import withAuthentication from "./authentication/withAuthentication";
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthentication(PostPage)(Login);
console.log(ComponentFromWithAuthenticate);

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;

