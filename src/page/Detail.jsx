import React, { useState } from "react";
import ContentContainer from "../component/common/ContentContainer";
import styled from "styled-components";
import Button from "../component/common/Button";
import { useLoaderData } from "react-router-dom";
import Dropdown from "../component/detail/Dropdown";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownBtn = () => {
    setIsOpen(!isOpen);
  };

  const data = useLoaderData();
  const { choice, img, price, size, title } = data;

  return (
    <ContentContainer display="centered">
      <ProductPageContainer>
        <img src={`${img}`} alt="이미지" />
        <div>
          <ProductOption>
            <div>
              {choice === true ? (
                <div className="product_choice">choice</div>
              ) : (
                <></>
              )}
              {data.new === true ? (
                <div className="product_new">new</div>
              ) : (
                <></>
              )}
            </div>
            <div className="product_title">{title}</div>
            <div className="product_price_size-wrapper">
              <div className="product_price">
                ₩{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <Dropdown
                value={{ dropdownBtn, isOpen, setIsOpen }}
                title="사이즈 선택"
                upIcon={faAnglesUp}
                downIcon={faAnglesDown}
              >
                {size}
              </Dropdown>
            </div>
            <Button $productext="true">추가</Button>
          </ProductOption>
        </div>
      </ProductPageContainer>
    </ContentContainer>
  );
};

export default Detail;

const ProductPageContainer = styled.div`
  width: 55%;
  height: 80%;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > img {
    width: 50%;
  }
  > div {
    width: 50%;
  }

  @media ${({ theme }) => theme.windowSize.xl} {
    width: 70%;
    height: 80%;
  }

  @media ${({ theme }) => theme.windowSize.lg} {
    width: 50%;
    height: 80%;
    flex-direction: column;
    & > img {
      width: 100%;
      height: 70%;
    }
    & > div {
      width: 100%;
      height: 100%;
    }
  }

  @media ${({ theme }) => theme.windowSize.md} {
    width: 50%;
    height: 80%;
  }

  @media ${({ theme }) => theme.windowSize.sm} {
    width: 65%;
    height: 80%;
  }

  @media ${({ theme }) => theme.windowSize.sx} {
    width: 80%;
    height: 80%;
  }
`;

const ProductOption = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div:first-child {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0.5;
    .product_choice {
      color: ${({ theme }) => theme.color.deep};
    }
    .product_new {
      color: ${({ theme }) => theme.color.basic};
    }
  }

  > div {
    flex: 1;
    width: 90%;
  }

  > .product_title {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  div > .product_price {
    font-size: ${({ theme }) => theme.fontSize.lg};
    display: flex;
    align-items: center;
  }

  > Button {
    flex: 1;
    width: 100%;
  }

  @media ${({ theme }) => theme.windowSize.lg} {
    height: 100%;
    > .product_title {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .product_price_size-wrapper {
      display: flex;
      justify-content: space-between;
    }
    > .product_price {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
