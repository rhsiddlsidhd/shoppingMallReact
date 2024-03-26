import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <BtnStyle {...rest}>{children}</BtnStyle>;
};

export default Button;

const BtnStyle = styled.button.attrs((props) => ({
  ...props,
  width: props.width ? props.width : "3rem",
  height: props.height ? props.height : "2rem",
}))`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.color.light};
  color: ${({ theme }) => theme.color.point};

  border-radius: 10px;
  outline: none;
  border: none;

  margin: 0.3rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.deep};
    color: ${({ theme }) => theme.color.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.point};
  }
`;
