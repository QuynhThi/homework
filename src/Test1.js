import React, { useEffect } from "react";
import useDispatch, { GetList } from "./useDispatch";
import useSlector from "./useSelector";

const Test1 = () => {
  let dispatch = useDispatch();
  let list = useSlector("SELECT_LIST") || [];

  useEffect(() => {
    dispatch("GET_LIST");

    return () => {
      dispatch("REMOVE_LIST");
    };
  }, []);

  const addItem = () => {
    dispatch("ADD_LIST");
  };

  return (
    <div style={{ margin: "100px", display: "flex" }}>
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

      <div
        style={{
          width: "100px",
          textAlign: "center",
          border: "1px solid #333",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        <p style={{ marginY: "5px" }} onClick={addItem}>
          Add
        </p>
      </div>
    </div>
  );
};

export default Test1;
