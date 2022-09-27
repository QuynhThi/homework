import { returnReducer, updateReducer } from "./store";
import _ from "lodash";

let initVal = {
  list: undefined,
  detail: undefined,
};

export const GetListMember = () => {
  let clone = _.cloneDeep(initVal);
  clone.list = [{ name: "Thi 1" }];
  updateReducer("member", clone);
};

export const AddListMember = () => {
  let clone = _.cloneDeep(initVal);
  clone.list = [...initVal.list, { name: `Thi ${initVal.list?.length + 1}` }];
  updateReducer("member", clone);
};

export const GetDetailMember = (data) => {
  let clone = _.cloneDeep(initVal);
  clone.detail = data;
  updateReducer("member", clone);
};

export const SelectListMember = () => {
  let data = returnReducer("member");
  initVal = data;
  return data?.list;
};

export const SelectDetailMember = () => {
  let data = returnReducer("member");
  initVal = data;
  return data?.detail;
};
