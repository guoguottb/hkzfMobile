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
// 租房小组
export const rentingGroup = (cityId) => {
  return request({
    url: "/home/groups",
    params: {
      area: cityId,
    },
  });
};
