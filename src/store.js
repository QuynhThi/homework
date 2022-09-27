import _ from "lodash";

let store = {
  member: {},
  product: {},
};

export function updateReducer(key, data) {
  store[key] = data;
}

export function returnReducer(key) {
  return store[key];
}
