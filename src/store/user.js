import { atom } from "recoil";
import { cloneDeep } from "lodash";
import { menuListAll } from "utils";

// key 全局下保持唯一性

export const collapsedStore = atom({
  key: "collapsed",
  default: false,
});

export const tokenStore = atom({
  key: "token",
  default: "",
});

export const menusStore = atom({
  key: "menus",
  default: cloneDeep(menuListAll),
});
