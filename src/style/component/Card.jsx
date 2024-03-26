import React from "react";
import styled from "styled-components";

const Card = ({ children, ...rest }) => {
  console.log("children", children);
  console.log(rest);
  return (
    <Polaroid {...rest}>
      <CardImg {...rest}></CardImg>
      <CardTitle>{children}</CardTitle>
    </Polaroid>
  );
};

export default Card;

const Polaroid = styled.div.attrs((rest) => ({
  ...rest,

  width: rest.width ? rest.width : "10rem",
  height: rest.heigth ? rest.heigth : "16rem",
  // margin: rest.margin ? rest.margin : "",
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.lg};
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
`;

const CardImg = styled.img`
  width: 100%;
  height: 80%;
  border: 10px;
  border-radius: 10px;
  transform-origin: top;
  transition: 1s ease-in-out;
  &:hover {
    border-radius: 10px;
    transform: scale(1.25);
    transform-origin: top;
    transition: transform 1s ease-in-out;
  }
`;

const CardTitle = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
