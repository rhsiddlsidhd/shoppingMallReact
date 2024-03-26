import styled from "styled-components";
import "./App.css";

import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
