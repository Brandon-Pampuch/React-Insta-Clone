import React from "react";

//need access to state to check or map over usernames

const withAuthentication = PostsPage => LoginPage => {

  
      if (true) {
        //if user is in username //return posts

        return (
          <div>
            <PostsPage />
          </div>
        );
      } else {
        return (
            <div>
              <LoginPage />
            </div>
        )
      }
    } 

export default withAuthentication;
