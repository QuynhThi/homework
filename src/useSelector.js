import { useEffect, useState } from "react";

let list = undefined;
let statusList = "pending";

export const ReducerGetList = (data) => {
  list = data;
  statusList = "done";
};

function useSlector(key) {
  const [listState, setListState] = useState(list);
  const [statusListState, setStatusListState] = useState(statusList);

  const SelectList = () => {
    setListState(list);
    setStatusListState("done");
    return listState;
  };

  useEffect(() => {
    let myInterval = setInterval(function () {
      if (list?.length > 0 && key === "SELECT_LIST" && statusList === "done") {
        SelectList();
      }
    }, 500);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return listState;
}

export default useSlector;
