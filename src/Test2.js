import React, { useEffect } from "react";
import useSlector from "./useSelector";

const Test2 = () => {
  let list = useSlector("SELECT_LIST") || [];

  return (
    <div style={{ margin: "100px" }}>
      {list.map((item, index) => {
        return (
          <div
            style={{
              width: "100px",
              textAlign: "center",
              border: "1px solid #333",
              marginRight: "10px",
            }}
            key={index}
          >
            <p style={{ marginY: "5px" }}>{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Test2;
