import request from "@/utils/request";

// 首页轮播图API
export const getSwiper = () => {
  return request({
    url: "/home/swiper",
  });
};

/**
 *  租房小组
 * @param {String} cityId  本地城市的id
 * @returns
 */
export const rentingGroup = (cityId) => {
  return request({
    url: "/home/groups",
    params: {
      area: cityId,
    },
  });
};

/**
 * 发布房屋所需的条件
 * @returns Promise
 */
export const releaseRoom = () => {
  return request({
    url: "/houses/params",
  });
};
