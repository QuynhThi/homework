import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ margin: "100px" }}>
      <Link to="/test1" style={{ marginRight: "50px" }}>
        Test1
      </Link>
      <Link to="/test2">Test2</Link>
      <Outlet />
    </div>
  );
};

export default Home;
