import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const DropdownComponent = ({ children, ...rest }) => {
  console.log(rest.icon);

  const [isOpen, setIsOpen] = useState(false);

  const openBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <DropTitle style={{ display: "flex" }}>
        <a href="#">{rest.label}</a>
        <div style={{ border: "1px solid black" }} onClick={openBtn}>
          <FontAwesomeIcon icon={rest.icon} />
        </div>
      </DropTitle>
      {isOpen && (
        <Item style={{ display: "flex", flexDirection: "column" }}>
          <a>1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
        </Item>
      )}
    </Container>
  );
};

export default DropdownComponent;

const Container = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  position: relative;
`;

const DropTitle = styled.div`
  border: 1px solid black;
  padding: 1rem;

  > div {
    width: 30px;
    height: 30px;
  }
`;

const Item = styled.div`
  position: absolute;

  > a:hover {
    background-color: gray;
  }
`;
