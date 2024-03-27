import React from "react";
import styled, { css } from "styled-components";

const Button = ({ $productext, logintext, children, ...rest }) => {
  return (
    <BtnStyle {...rest} $logintext={logintext} $productext={$productext}>
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

  &:hover {
    background-color: ${({ theme }) => theme.color.deep};
    color: ${({ theme }) => theme.color.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.point};
  }
`;
