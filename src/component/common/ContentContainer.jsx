import React from "react";
import styled, { css } from "styled-components";

const ContentContainer = ({ children, ...rest }) => {
  const { display } = rest;

  return (
    <Container>
      <Content display={display}>{children}</Content>
    </Container>
  );
};

export default ContentContainer;

const Container = styled.section`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  height: 90%;

  ${({ display }) =>
    display === "centered" &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${({ display }) =>
    display === "centeredColumn" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;
