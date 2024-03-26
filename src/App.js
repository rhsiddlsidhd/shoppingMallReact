import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";

import Header from "./component/common/Header";

function App() {
  const albums = useLoaderData();

  // useEffect(() => {
  //   const getClothsData = async () => {
  //     const data = await fetchClothesData();
  //     console.log(data);
  //   };

  //   getClothsData();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
