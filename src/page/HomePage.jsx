import React from "react";
import styled from "styled-components";
import ContentContainer from "../component/ContentContainer";
import Card from "../style/component/Card";

const Homepage = () => {
  const card = [
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
    "C",
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
    "C",
    "A",
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
    "C",
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
    "C",
    "A",
    "1",
  ];

  return (
    <ContentContainer>
      <NavPreview>NavPreview</NavPreview>
      <CardBox>
        {card.map((it) => (
          <Card margin="1.5rem" key={it}></Card>
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
