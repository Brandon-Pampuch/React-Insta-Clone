import React from "react";

//need access to state to check or map over usernames

const withAuthentication = PostsPage => LoginPage => {
//make this a class component

  if (localStorage.getItem("username")) {
        //if user is in local storage return 

        return PostsPage
        
      } else {
        return  LoginPage
  
      
    } 
}

export default withAuthentication;
