import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../style/component/Button";

const Header = () => {
  const menulist = [
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
    "C",
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
    "C",
    "A",
  ];

  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setIsValid(event.target.value !== "");
  };

  return (
    <HeaderContainer>
      <HeaderItem right={isFocused || isValid ? "2rem" : ""}>
        <div className="high">
          <div></div>
          <Logo>
            <img
              src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-black-logo-icon-image_1130370.jpg"
              alt="이미지"
            />
          </Logo>
          <PrivateMenu>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <p style={{ display: "inline", marginLeft: "1rem" }}>로그인</p>
            </div>
            <div className="menu_bar">
              <FontAwesomeIcon icon={faBars} className="bar" />
            </div>
          </PrivateMenu>
        </div>
        <div className="low">
          <div></div>
          <div className="navbar">
            {menulist.map((it) => (
              <Button>{it}</Button>
            ))}
          </div>
          <div className="search">
            <label
              htmlForfor="search_input"
              isFocused={isFocused}
              isValid={isValid}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search_icon"
              />
              <input
                type="text"
                id="search_input"
                placeholder="제품 검색"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
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
  /* border: 1px solid green; */
  ${$displayCenter}
`;

const HeaderItem = styled.div.attrs((props) => ({
  ...props,
  right: props.right || "",
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
          transform: ${({ right }) => (right ? `translateX(-${right} )` : "")};
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
            border-bottom-color: black;
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
  }
`;

const PrivateMenu = styled.div`
  width: 30%;
  display: flex;
  justify-content: end;

  > div {
    width: 25%;
    display: flex;
    align-items: center;
  }
  > .menu_bar {
    display: flex;
    align-items: center;
    justify-content: end;
    > .bar {
      height: 2rem;
    }
  }
`;
