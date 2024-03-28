import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      <div>Sorry, an unexpected error has occurred.</div>
      <div>
        <h1>{error.statusText}</h1>
        <h1>{error.message}</h1>
        <h1>{error.status}</h1>
      </div>
    </ErrorContainer>
  );
};

export default ErrorPage;

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
