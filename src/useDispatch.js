import { useCallback } from "react";
import { useStore } from "./redux/store";

let type = undefined;

export const fetchMembers = () => {
  type = "FETCH_MEMBERS";
};

export const addMember = () => {
  type = "ADD_MEMBER";
};

function useDispatch() {
  const { state, dispatch } = useStore();
  let func = useCallback(() => dispatch({ type: type }), [dispatch]);
  return () => {
    return func();
  };
}

export default useDispatch;
