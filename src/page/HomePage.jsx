import React from "react";
import styled from "styled-components";
import ContentContainer from "../style/component/ContentContainer";
import Card from "../style/component/Card";

const Homepage = () => {
  const card = [
    "A",
    "B",
    "C",
    "D",
    "va",
    "A",
    "B",
    "C",
    "D",
    "va",
    "A",
    "B",
    "C",
    "D",
    "va",
  ];

  return (
    <ContentContainer>
      <NavPreview>NavPreview</NavPreview>
      <CardBox>
        {card.map((it, index) => (
          <Card margin="1.5rem" key={index}></Card>
        ))}
      </CardBox>
    </ContentContainer>
  );
};
//

export default Homepage;

const NavPreview = styled.div`
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBox = styled.div`
  width: 90%;
  height: 100%;

  display: grid;

  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  grid-auto-flow: row;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
