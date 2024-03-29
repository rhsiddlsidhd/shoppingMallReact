import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopHeader from "./header/TopHeader";
import BottomHeader from "./header/BottomHeader";

const Header = () => {
  const [isfocused, setIsFocused] = useState("");
  const [isvalid, setIsValid] = useState("");
  const navigate = useNavigate();

  const menulist = [
    "Women",
    "Men",
    "Baby",
    "H&M Home",
    "Sport",
    "Sale",
    "지속가능성",
    "H&M Home",
    "Sport",
    "Sale",
    "지속가능성",
    "Sale",
    "지속가능성",
    "H&M Home",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  return (
    <HeaderContainer>
      <HeaderItem>
        <TopHeader navigate={navigate} menulist={menulist} />
        <BottomHeader
          setIsFocused={setIsFocused}
          setIsValid={setIsValid}
          isvalid={isvalid}
          isfocused={isfocused}
          navigate={navigate}
          menulist={menulist}
        />
      </HeaderItem>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
`;

const HeaderItem = styled.div`
  width: 90%;
  height: 100%;
`;
