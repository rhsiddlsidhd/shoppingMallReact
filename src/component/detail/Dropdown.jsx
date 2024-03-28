import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ children, ...rest }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [selectSize, setSelectSize] = useState("");
  const { dropdownBtn, isOpen, setIsOpen } = rest.value;

  const handleItemClick = (it) => {
    setSelectSize(it);
    setIsSelect(true);
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <Button width="30%" $dropdown="true" onClick={dropdownBtn}>
        <div>{selectSize ? selectSize : "사이즈 선택"}</div>
        {isOpen === false ? (
          <FontAwesomeIcon icon={faAnglesDown} className="dropIcon" />
        ) : isSelect ? null : (
          <FontAwesomeIcon icon={faAnglesUp} />
        )}
      </Button>
      {isOpen === false ? (
        <></>
      ) : (
        <DropContent>
          {children.map((it, index) => (
            <div key={index} onClick={() => handleItemClick(it)}>
              {it}
            </div>
          ))}
        </DropContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
const DropdownContainer = styled.div`
  position: relative;
`;

const DropContent = styled.div`
  position: absolute;
  width: 30%;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      background-color: gray;
    }
  }
`;
