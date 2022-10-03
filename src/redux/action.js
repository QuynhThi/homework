export const fetchMembers = (store) => {
  store.dispatch("FETCH_MEMBERS", store.getState());
  console.log("1", store);

  // return {
  //   type: "FETCH_MEMBERS",
  //   payload: store.products,
  // };
};

export const addToCart = (product) => {
  console.log("co vo day ko", product);
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const toggleOpenShop = () => {
  return {
    type: "TOGGLE_OPEN_SHOP",
  };
};
