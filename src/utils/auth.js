// authorization

import storage from "./storage";
const tokenKey = "HAOKE_ZUFANG_TOKEN";

export const getToken = () => {
  return storage.get(tokenKey);
};
export const setToken = (val) => {
  return storage.set(tokenKey, val);
};
export const removeToken = () => {
  return storage.remove(tokenKey);
};
