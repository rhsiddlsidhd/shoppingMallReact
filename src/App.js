import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./component/layout/Header";
import { useState } from "react";
import { GetDispatchDataContext, GetStateDataContext } from "./context/context";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const productsData = useLoaderData();

  return (
    <GetDispatchDataContext.Provider value={{ productsData, authenticate }}>
      <GetStateDataContext.Provider value={setAuthenticate}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </GetStateDataContext.Provider>
    </GetDispatchDataContext.Provider>
  );
}

export default App;
