import { useEffect, useState } from "react";
import useSlector, { ReducerGetList } from "./useSelector";

let list = [];

const GetList = () => {
  list = [{ name: "Thi 1" }];
  ReducerGetList(list);
};

const AddList = () => {
  list = [...list, { name: `Thi ${list?.length + 1}` }];
  ReducerGetList(list);
};

const RemoveList = () => {
  list = [];
  ReducerGetList(list);
};

function useDispatch() {
  return (key) => {
    if (key === "GET_LIST") {
      GetList();
    }

    if (key === "ADD_LIST") {
      AddList();
    }

    if (key === "REMOVE_LIST") {
      RemoveList();
    }
  };
}

export default useDispatch;
