import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import {
  GetDispatchDataContext,
  GetStateDataContext,
} from "../../context/context";

const Header = () => {
  const { authenticate } = useContext(GetDispatchDataContext);
  const setAuthenticate = useContext(GetStateDataContext);

  const menulist = [
    "옷",
    "신발",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
  ];

  const [isfocused, setIsFocused] = useState("");
  const [isvalid, setIsValid] = useState("");

  const navigate = useNavigate();

  const handleFocus = () => {
    setIsFocused("focus");
  };

  const handleBlur = () => {
    setIsFocused("");
  };

  const handleChange = (event) => {
    let keyword = event.target.value;
    navigate(`/?q=${keyword}`);
    setIsValid(event.target.value !== "");
  };

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
    <HeaderContainer>
      <HeaderItem $right={isfocused || isvalid ? "2rem" : ""}>
        <div className="high">
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
        </div>
        <div className="low">
          <div></div>
          <div className="navbar">
            {menulist.map((it, index) => (
              <Button key={index} $margin="0.3rem">
                {it}
              </Button>
            ))}
          </div>
          <div className="search">
            <label
              htmlFor="search_input"
              isfocused={isfocused}
              isvalid={isvalid.toString()}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search_icon"
              />
              <input
                type="text"
                id="search_input"
                className={isfocused ? "focus" : ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="제품 검색"
                onKeyPress={(e) => handleChange(e)}
                required
              />
            </label>
          </div>
        </div>
      </HeaderItem>
    </HeaderContainer>
  );
};
export default Header;

const $displayCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.header`
  height: 15vh;
  ${$displayCenter}
`;

const HeaderItem = styled.div.attrs((props) => ({
  ...props,
  $right: props.$right || "",
}))`
  width: 90%;
  height: 100%;

  & > .high {
    height: 80%;
    ${$displayCenter}
    justify-content:space-between;
    > div:first-child {
      width: 30%;
    }
  }
  & > .low {
    height: 20%;
    display: flex;
    justify-content: space-between;
    > div:first-child {
      width: 30%;
    }

    & > .navbar {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      overflow: hidden;
      &:hover {
        display: flex;
        width: 40%;
        height: fit-content;
        background-color: white;
        z-index: 1;
      }
    }

    & > .search {
      width: 30%;
      display: flex;
      justify-content: end;
      align-items: center;
      > label {
        //search_icon
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        & > .search_icon {
          //아이콘
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          transform: ${({ $right }) =>
            $right ? `translateX(-${$right} )` : ""};
          transition: transform 1s;
        }
        & > #search_input {
          border: none;
          font-size: 1rem;
          width: 100%;
          height: 100%;
          border-bottom: 1px solid transparent;
          padding-left: 2rem;
          &::placeholder {
            text-align: end;
          }
          &:focus {
            outline: none;
            border-bottom: 1px solid #aaa;
            transition: border-bottom 1s;
            &::placeholder {
              color: transparent;
              transition: color 1s;
            }
          }
          &:valid {
            border-bottom: 1px solid black;
          }
        }
      }
    }
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
