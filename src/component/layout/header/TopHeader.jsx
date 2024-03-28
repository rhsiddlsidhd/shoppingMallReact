import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import {
  GetDispatchDataContext,
  GetStateDataContext,
} from "../../../context/context";

const TopHeader = ({ navigate }) => {
  const { authenticate } = useContext(GetDispatchDataContext);
  const setAuthenticate = useContext(GetStateDataContext);

  const navigateLoginPage = () => {
    navigate("/login");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      setAuthenticate(false);
    } else {
      setAuthenticate(true);
    }
  };
  return (
    <Top className="high">
      <div></div>
      <Logo>
        <img
          src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-black-logo-icon-image_1130370.jpg"
          alt="이미지"
          onClick={navigateHome}
        />
      </Logo>
      <PrivateMenu>
        {authenticate === true ? (
          <User onClick={logout}>
            <FontAwesomeIcon icon={faUser} className="user_icon" />
            <div
              className="user_text"
              style={{ display: "inline", marginLeft: "1rem" }}
            >
              로그아웃
            </div>
          </User>
        ) : (
          <User onClick={navigateLoginPage}>
            <FontAwesomeIcon icon={faUser} className="user_icon" />
            <div
              className="user_text"
              style={{ display: "inline", marginLeft: "1rem" }}
            >
              로그인
            </div>
          </User>
        )}
        <MenuBar>
          <FontAwesomeIcon icon={faBars} className="bar" />
        </MenuBar>
      </PrivateMenu>
    </Top>
  );
};

export default TopHeader;
const $displayCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  height: 80%;
  ${$displayCenter}
  justify-content:space-between;
  > div:first-child {
    width: 30%;
  }
`;

const Logo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 50%;
    height: 80%;
    cursor: pointer;
  }
`;

const PrivateMenu = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: end;
`;

const User = styled.div`
  width: 25%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
  cursor: pointer;
  .user_icon {
    width: 100%;
    height: 50%;
  }
  .user_text {
    width: 100%;
    height: 50%;
    text-align: center;
  }
`;

const MenuBar = styled.div`
  width: 25%;
  height: 50%;
  display: flex;
  justify-content: end;

  .bar {
    height: 50%;
    cursor: pointer;
  }
`;
