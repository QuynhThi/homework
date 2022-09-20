import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Test1 from "./Test1";
import Test2 from "./Test2";

function App() {
  const [data, setData] = useState([]);

  const replaceDispatch = () => {
    setData([{ name: "Thi 1" }]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="test1"
          element={<Test1 data={data} replaceDispatch={replaceDispatch} />}
        />
        <Route path="test2" element={<Test2 data={data} />} />
      </Route>
    </Routes>
  );
}

export default App;
