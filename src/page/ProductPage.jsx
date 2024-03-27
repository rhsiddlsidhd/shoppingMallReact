import React, { useState } from "react";
import ContentContainer from "../style/component/ContentContainer";
import styled from "styled-components";
import Button from "../style/component/Button";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
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
            <div className="product_price">
              ₩{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <SizeDropdown>
              <div className="dropdown_title" onClick={dropdownBtn}>
                {isOpen === false ? (
                  <>
                    <div>사이즈 선택</div>
                    <div>
                      <FontAwesomeIcon icon={faAnglesDown} />
                    </div>
                  </>
                ) : (
                  <>
                    <div>사이즈 선택</div>
                    <div>
                      <FontAwesomeIcon icon={faAnglesUp} />
                    </div>
                  </>
                )}
              </div>
              {isOpen === false ? (
                <></>
              ) : (
                <>
                  <div className="dropdown_list">
                    {size.map((it, index) => (
                      <div key={index}>{it}</div>
                    ))}
                  </div>
                </>
              )}
            </SizeDropdown>
            <Button $productext="true">추가</Button>
          </ProductOption>
        </div>
      </ProductPageContainer>
    </ContentContainer>
  );
};

export default ProductPage;

const ProductPageContainer = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  > img {
    width: 50%;
  }
  > div {
    width: 50%;
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
  }

  > .product_price {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  > Button {
    flex: 1;
    width: 100%;
  }
`;

const SizeDropdown = styled.div`
  .dropdown_title {
    display: flex;
  }
`;
