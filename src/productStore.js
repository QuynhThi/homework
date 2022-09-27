let product = {
  list: [],
};

export const GetListProduct = () => {
  product.list = [{ name: "Pepsi chanh 1" }];
};

export const AddListProduct = () => {
  product.list = [
    ...product.list,
    { name: `Pepsi chanh ${product.list?.length + 1}` },
  ];
};

export const RemoveListProduct = () => {
  product.list = [];
};

export const SelectListProduct = () => {
  return product.list;
};
