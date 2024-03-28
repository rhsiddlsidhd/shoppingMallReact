import React from "react";
import styled from "styled-components";

const Card = ({ children, ...rest }) => {
  return (
    <Polaroid {...rest}>
      <CardImg {...rest}></CardImg>
      <CardInformationContainer>
        <CardInformation>
          <div className="highlight">
            {children?.[0] === "true" ? (
              <div className="new">new</div>
            ) : (
              <div></div>
            )}
            {children?.[1] === "true" ? (
              <div className="choice">choice</div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="title">
            <div>{children?.[2]}</div>
          </div>
          <div className="price">
            ₩{children?.[3].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </CardInformation>
      </CardInformationContainer>
    </Polaroid>
  );
};

export default Card;

const Polaroid = styled.div.attrs((rest) => ({
  ...rest,

  width: rest.width ? rest.width : "10rem",
  height: rest.heigth ? rest.heigth : "18rem",
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ $margin }) => $margin};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  width: 100%;
  height: 75%;
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

const CardInformationContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardInformation = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;

  .highlight {
    height: 20%;
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSize.sm};

    .new {
      color: ${({ theme }) => theme.color.basic};
    }

    .choice {
      color: ${({ theme }) => theme.color.deep};
    }
  }

  .title {
    height: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.color.black};

    & > div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .price {
    height: 30%;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.color.black};
  }
`;
