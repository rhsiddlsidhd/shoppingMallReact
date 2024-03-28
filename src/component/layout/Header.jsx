import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopHeader from "./header/TopHeader";
import BottomHeader from "./header/BottomHeader";

const Header = () => {
  const [isfocused, setIsFocused] = useState("");
  const [isvalid, setIsValid] = useState("");
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderItem>
        <TopHeader navigate={navigate} />
        <BottomHeader
          setIsFocused={setIsFocused}
          setIsValid={setIsValid}
          isvalid={isvalid}
          isfocused={isfocused}
          navigate={navigate}
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
`;

const HeaderItem = styled.div`
  width: 90%;
  height: 100%;
`;
