import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";

import Header from "./component/common/Header";
import { createContext, useState } from "react";

export const GetDispatchDataContext = createContext();
export const GetStateDataContext = createContext();

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const albums = useLoaderData();

  return (
    <GetDispatchDataContext.Provider value={{ albums, authenticate }}>
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
