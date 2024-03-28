import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, ...rest }) => {
  console.log("rest", rest.$logintext);
  const { $productext, $logintext, $dropdown } = rest;

  return (
    <BtnStyle
      {...rest}
      $logintext={$logintext}
      $productext={$productext}
      $dropdown={$dropdown}
    >
      {children}
    </BtnStyle>
  );
};

export default Button;

const BtnStyle = styled.button.attrs((props) => ({
  ...props,
  width: props.width ? props.width : "3rem",
  height: props.height ? props.height : "2rem",
  $margin: props.$margin ? props.$margin : "",
}))`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ $margin }) => $margin};
  background-color: ${({ theme }) => theme.color.light};
  color: ${({ theme }) => theme.color.point};

  font-weight: bold;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.deep};
    color: ${({ theme }) => theme.color.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.point};
  }

  ${({ $logintext }) =>
    $logintext === "true" &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
    `}

  ${({ $productext }) =>
    $productext === "true" &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
    `}

    ${({ $dropdown }) =>
    $dropdown === "true" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      > div {
        padding-right: 0.3rem;
        height: 100%;
        display: flex;
        align-items: center;
      }
      > .dropIcon {
        width: 10%;
      }
    `}
`;
