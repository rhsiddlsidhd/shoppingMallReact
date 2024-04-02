import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
