import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "./redux/store";

const Test1 = () => {
  // const { state, dispatch } = useStore();
  let listMember = useSelector((state) => state?.members?.list);
  let dispatch = useDispatch();
  // const fetchListMember = useCallback(
  //   () => dispatch({ type: "FETCH_MEMBERS" }),
  //   [dispatch]
  // );
  // const addMember = useCallback(
  //   () => dispatch({ type: "ADD_MEMBER" }),
  //   [dispatch]
  // );

  // const listMember = state.members.list;

  useEffect(() => {
    // fetchListMember();
    // dispatch1(fetchListMember());
    // dispatch1(fetchMembers());
  }, []);

  const addMemberFunc = () => {
    dispatch({ type: "ADD_MEMBER" });
  };

  return (
    <>
      <div style={{ margin: "100px", display: "flex" }}>
        {listMember &&
          listMember.map((item, index) => {
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
          <p style={{ marginY: "5px" }} onClick={addMemberFunc}>
            Add Member
          </p>
        </div>
      </div>
    </>
  );
};

export default Test1;
