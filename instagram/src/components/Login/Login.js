import React from "react";
import "./Login.scss";
import styled from "styled-components"

const Wrapper = styled.div`
margin-top: 5rem;
display: flex;
justify-content: space-between;

`;
const Title = styled.h1`
margin-top: 2rem;
font-size: 3rem;
color: black;
`;

const Input = styled.input`
border: 0;
outline: 0;
border-bottom: 2px solid black;
width: 300px;
`

const Login = () => {
  const loginFunc = event => {
    localStorage.setItem("username", event.target.value);
  };

  return (
    <Wrapper className="container login-form">
      <div>
        <Title>Login</Title>
        <form onSubmit={loginFunc}>
          <Input className="login-form__login-input" type="text" />
        </form>
        <Title>Password</Title>
        <form onSubmit={loginFunc}>
          <Input className="login-form__login-input" type="text" />
        </form>
      </div>
      <img src="http://www.logospng.com/images/15/instagram-logo-large-390x130-jonathan-jeter-15681.png" alt="instagram" />
      <h2>(clone)</h2>
    </Wrapper>
  );
};

export default Login;
