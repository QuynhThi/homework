export const productsInitialState = {
  products: {
    list: [],
  },
};

export const productsActions = {
  FETCH_PRODUCTS: (state) => ({
    products: {
      list: [{ id: 1, name: "Pepsi chanh 1" }],
    },
  }),
  ADD_PRODUCT: (state) => ({
    products: {
      list: [
        ...state.products.list,
        {
          id: state.products.list.length + 1,
          name: `Pepsi chanh ${state.products.list.length + 1}`,
        },
      ],
    },
  }),
};
