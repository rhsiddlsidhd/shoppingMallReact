import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/layout/Header";
import { useSelector } from "react-redux";

function App() {
  const $authenticate = useSelector((state) => state.auth.authenticate);
  console.log({ $authenticate });

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
