import { useEffect, useState } from "react";
import _ from "lodash";

function useSelector(obj) {
  // (state) => state.products
  console.log("obj", obj);
  let data = obj();

  return data;
}

export default useSelector;
