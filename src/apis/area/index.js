import request from "@/utils/request";
// /area/city
export const getCityList = (data) => {
  return request({
    url: `/area/city?level=${data}`,
  });
};

/**
 * 根据城市名称查询该城市信息
 * @param {String} citiName 城市名称
 * @returns
 */
// 获取城市id
export const getCityId = (citiName) => {
  return request({
    url: "/area/info",
    params: {
      name: citiName,
    },
  });
};

// 引用函数 将城市id存储到本地
import storage from "@/utils/storage";
// 设本地存储城市id的key
const cityId = "cityId";
// 创建set方法
export const setLocalCityId = (value) => {
  storage.set(cityId, value);
};
// 创建get方法
export const getLocalCityId = () => {
  return storage.get(cityId);
};
