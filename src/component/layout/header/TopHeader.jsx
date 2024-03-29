import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import {
  GetDispatchDataContext,
  GetStateDataContext,
} from "../../../context/context";
import Button from "../../common/Button";

const TopHeader = ({ navigate, menulist }) => {
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
          <User>
            <div>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="user_icon"
                onClick={logout}
              />
            </div>
            <div className="user_text">
              <div onClick={logout}>로그아웃</div>
            </div>
          </User>
        ) : (
          <User>
            <div>
              <FontAwesomeIcon
                icon={faUser}
                className="user_icon"
                onClick={navigateLoginPage}
              />
            </div>
            <div className="user_text">
              <div onClick={navigateLoginPage}>로그인</div>
            </div>
          </User>
        )}

        <SideBar>
          <SideBarItemContainer>
            {menulist.map((it, index) => (
              <Button $sidebar="true" width="7rem" $margin="0.5rem" key={index}>
                {it}
              </Button>
            ))}
          </SideBarItemContainer>
        </SideBar>
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
  height: 75%;
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
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
  > div:first-child {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
  }
  .user_icon {
    width: fit-content;
    height: 100%;
    cursor: pointer;
  }

  .user_text {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
    > div {
      width: fit-content;
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.windowSize.md} {
    .user_text {
      display: none;
    }
  }
`;

const SideBar = styled.div`
  width: 10rem;
  height: 60%;
  position: fixed;
  top: 25%;
  right: -9rem;
  display: none;
  border: 1px solid black;
  z-index: 1;
  border-radius: 10px 0 0 10px;
  background-color: white;

  &:hover {
    right: 0;
  }

  @media screen and (max-height: 1050px) {
    display: flex;
  }
`;

const SideBarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
