import request from "@/utils/request";

export const login = (username, password) => {
  return request({
    method: "POST",
    url: "/user/login",
    data: {
      username,
      password,
    },
  });
};

export const myFavorite = (token) => {
  return request({
    method: "GET",
    url: "/user/favorites",
    headers:{
      authorization:token
    }
  });
};
