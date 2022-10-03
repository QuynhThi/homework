import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
  useSyncExternalStore,
} from "react";

import { membersInitialState, membersActions } from "./membersActions";
import { productsInitialState, productsActions } from "./productsActions";

export const initialState = {
  ...membersInitialState,
  ...productsInitialState,
};

const StoreContext = createContext(initialState);

const Actions = {
  ...membersActions,
  ...productsActions,
};

export const reducer = (state, action) => {
  const act = Actions[action.type];
  const update = act(state);
  return { ...state, ...update };
};

export const createStore = (initialState, reducer) => {
  let currentState = initialState;
  let listeners = new Set();

  const getState = () => {
    return currentState;
  };

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export const StoreProvider = ({ children, store }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

// export const useStore = () => {
//   const { state, dispatch } = useContext(StoreContext);
//   return { state, dispatch };
// };

export const useSelector = (selector = (state) => state) => {
  const { subscribe, getState } = useContext(StoreContext);
  // const [state, setState] = useState(selector(getState()));

  // useEffect(() => {
  //   subscribe((state) => setState(selector(state)));
  // }, []);
  const state = useSyncExternalStore(subscribe, () => selector(getState()));

  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);

  return dispatch;
};
