import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Test1 from "./Test1";
import Test2 from "./Test2";

function App({ store }) {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="test1" element={<Test1 store={store} />} />
        <Route path="test2" element={<Test2 />} />
      </Route>
    </Routes>
  );
}

export default App;
