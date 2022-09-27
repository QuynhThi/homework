import { useEffect, useState } from "react";
import _ from "lodash";

function useSlector(obj) {
  const [data, setData] = useState(obj());

  useEffect(() => {
    let myInterval = setInterval(function () {
      let newData = obj();
      if (JSON.stringify(data) !== JSON.stringify(newData)) {
        setData(newData);
      }
    }, 500);

    return () => {
      clearInterval(myInterval);
    };
  }, [data]);

  return data;
}

export default useSlector;
