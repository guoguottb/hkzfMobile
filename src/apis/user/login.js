import request from "@/utils/request";

// 登录api
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

// 登录成功 获取用户信息
export const getUserInfo = () => {
  return request({
    url: "/user",
  });
};

//我的收藏
export const myFavorite = (token) => {
  return request({
    method: "GET",
    url: "/user/favorites",
  });
};

//我的出租
export const rentOut = (token) => {
  return request({
    method: "GET",
    url: "/user/houses",
    headers: {
      authorization: token,
    },
  });
};
