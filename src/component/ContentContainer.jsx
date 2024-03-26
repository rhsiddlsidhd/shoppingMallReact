import React from "react";
import styled from "styled-components";

const ContentContainer = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
