import React from "react";
import "../global-styles/global.scss";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-top: 50px;
  align-items: baseline;
`;

const LogoImage = styled.img`
  width: 150px;
  padding-left: 20px;
`;
const SearchInput = styled.input`
  width: 200px;
  padding-left: 80px;
  outline: none;
`;
const SearchIcon = styled.i`
  font-size: 2rem;
  margin-left: 20px;
  font-size: ${props => (props.large ? "3rem" : "2rem")};
`;

const SearchBar = props => {
  return (
    <SearchWrapper>
      <div>
        <SearchIcon large className="fab fa-instagram" />
        <LogoImage
          src="http://www.logospng.com/images/15/instagram-logo-large-390x130-jonathan-jeter-15681.png"
          alt="search bar"
        />
      </div>
      <form onSubmit={props.searchHandler}>
        <SearchInput
          onChange={props.onChangeHandler}
          type="text"
          placeholder="search"
          name="search"
          value={props.searchState}
        />
      </form>
      <div>
        <SearchIcon className="far fa-compass" />
        <SearchIcon className="far fa-heart" />
        <SearchIcon className="far fa-user" />
      </div>
    </SearchWrapper>
  );
};

export default SearchBar;
