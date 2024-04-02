import React, { useState } from "react";
import ContentContainer from "../component/common/ContentContainer";
import { styled } from "styled-components";
import Button from "../component/common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenciateAction";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(authenticateAction.login(id, password));
  };

  return (
    <ContentContainer display="centered">
      <LoginContainer>
        <div>Login</div>
        <form onSubmit={(e) => loginUser(e)}>
          <div className="input_option">
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) => setId(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="user_option">
            <div>아이디</div>
            <div>회원가입</div>
          </div>
          <Button width="100%" height="45%" $logintext="true" type="submit">
            Login
          </Button>
        </form>
      </LoginContainer>
    </ContentContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 30%;
  height: 40%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  > div:first-child {
    //login
    height: 15%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }
  > form {
    height: 85%;

    > .input_option {
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 2rem;

      > input {
        width: 80%;
        height: 40%;
        font-size: ${({ theme }) => theme.fontSize.xl};
        border: none;
        outline: none;
        border-bottom: 2px solid gray;
        &::placeholder {
          font-size: ${({ theme }) => theme.fontSize.md};
        }
      }
    }

    .user_option {
      display: flex;
      align-items: center;
      height: 15%;
      margin-left: 1rem;

      > div {
        margin-right: 1rem;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.color.point};
        }
      }
    }
  }

  @media ${({ theme }) => theme.windowSize.xl} {
    width: 40%;
    height: 40%;
  }
  @media ${({ theme }) => theme.windowSize.lg} {
    width: 45%;
    height: 40%;
  }
  @media ${({ theme }) => theme.windowSize.md} {
    width: 50%;
    height: 40%;
  }
  @media ${({ theme }) => theme.windowSize.sm} {
    width: 60%;
    height: 40%;
  }
  @media ${({ theme }) => theme.windowSize.sx} {
    width: 65%;
    height: 40%;
  }
`;
