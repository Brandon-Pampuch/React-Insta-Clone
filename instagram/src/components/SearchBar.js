import React from "react";
import "../global-styles/global.scss";
import "./SearchBar.scss";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div>
        <i className="fab fa-instagram search-bar__icon search-bar__icon--padding-right search-bar__icon--icon-large " />
        <img
          className="search-bar__search-logo"
          src="http://www.logospng.com/images/15/instagram-logo-large-390x130-jonathan-jeter-15681.png"
          alt="search bar"
        />
      </div>
      <form onSubmit={props.searchHandler}>
        <input
          onChange={props.onChangeHandler}
          className="search-bar__input"
          type="text"
          placeholder="search"
          name="search"
          value={props.searchState}
        />
      </form>
      <div>
        <i className="far fa-compass search-bar__icon" />
        <i className="far fa-heart search-bar__icon" />
        <i className="far fa-user search-bar__icon" />
      </div>
    </div>
  );
};

export default SearchBar;
