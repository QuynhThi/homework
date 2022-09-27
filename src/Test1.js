import React, { useEffect } from "react";
import {
  AddListMember,
  GetDetailMember,
  GetListMember,
  SelectDetailMember,
  SelectListMember,
} from "./memberStore";
import useDispatch from "./useDispatch";
import useSlector from "./useSelector";

const Test1 = () => {
  let dispatch = useDispatch();
  let listMember = useSlector(SelectListMember) || [];
  let detailMember = useSlector(SelectDetailMember) || {};

  useEffect(() => {
    dispatch(GetListMember());
  }, []);

  const addItem = () => {
    dispatch(AddListMember());
  };

  return (
    <>
      <p>Detail Member: {detailMember?.name}</p>
      <div style={{ margin: "100px", display: "flex" }}>
        {listMember?.map((item, index) => {
          return (
            <div
              style={{
                width: "100px",
                textAlign: "center",
                border: "1px solid #333",
                marginRight: "10px",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => dispatch(GetDetailMember(item))}
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
            Add Member
          </p>
        </div>
      </div>
    </>
  );
};

export default Test1;
