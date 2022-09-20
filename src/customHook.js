import { useEffect, useState } from "react";

function useSlector(key) {
  let list = [];

  const GetListAsync = () => {
    list = [{ name: "Thi 1" }];
  };

  if (key === "GET_LIST") {
    return GetListAsync();
  }

  return () => {};
}

export default useSlector;
