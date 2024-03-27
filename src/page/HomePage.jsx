import React, { useContext } from "react";
import styled from "styled-components";
import ContentContainer from "../style/component/ContentContainer";
import Card from "../style/component/Card";
import { GetDispatchDataContext } from "../App";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { albums } = useContext(GetDispatchDataContext);

  const navigate = useNavigate();

  const productPageNavi = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <ContentContainer display="centeredColumn">
      <NavPreview>NavPreview</NavPreview>
      <CardBox>
        {albums.map((data, index) => (
          <Card
            $margin="1.5rem"
            key={index}
            src={`${data.img}`}
            onClick={() => productPageNavi(data.id)}
          >
            {`${data.new}`}
            {`${data.choice}`}
            {`${data.title}`}
            {`${data.price}`}
          </Card>
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

  @media ${({ theme }) => theme.windowSize.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${({ theme }) => theme.windowSize.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.windowSize.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.windowSize.sx} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
