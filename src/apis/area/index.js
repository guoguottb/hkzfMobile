import request from "@/utils/request";
// /area/city
export const getCityList = (data) => {
  return request({
    url: `/area/city?level=${data}`,
  });
};
