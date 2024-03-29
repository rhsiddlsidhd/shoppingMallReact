import React from "react";
import Button from "../../common/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const BottomHeader = ({
  setIsFocused,
  setIsValid,
  isfocused,
  isvalid,
  navigate,
  menulist,
}) => {
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

  return (
    <Bottom $right={isfocused || isvalid ? "2rem" : ""}>
      <div></div>
      <div className="navbar">
        {menulist.map((it, index) => (
          <Button width="fit-content" $margin="0.5rem" key={index}>
            {it}
          </Button>
        ))}
      </div>
      <div className="search">
        <label htmlFor="search_input" isfocused={isfocused} isvalid={isvalid}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
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
    </Bottom>
  );
};

export default BottomHeader;

const Bottom = styled.div.attrs((props) => ({
  ...props,
  $right: props.$right || "",
}))`
  height: 25%;
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
    flex-wrap: wrap;
    overflow: hidden;
    &:hover {
      display: flex;
      height: fit-content;
      width: 40%;
      z-index: 1;
      background-color: ${({ theme }) => theme.color.white};
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
        transform: ${({ $right }) => ($right ? `translateX(-${$right} )` : "")};
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

  @media screen and (max-height: 1050px) {
    .navbar {
      display: none;
    }
  }
  @media ${({ theme }) => theme.windowSize.sm} {
    #search_input::placeholder {
      color: transparent;
    }
  }
`;
