import Vue from "vue";
import VueRouter from "vue-router";
// let routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch((err) => err);
// };
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/hkzf/home" },
  // 登陆页面
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    name: "login",
  },
  // 好客租房 以及二级路由
  {
    path: "/hkzf",
    component: () => import("@/views/hkzf/index.vue"),
    children: [
      {
        // 好客租房 底部首页路由
        path: "/hkzf/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
      },
      {
        // 好客租房 底部搜索路由
        path: "/hkzf/search",
        component: () => import("@/views/search/index.vue"),
        name: "search",
      },
      {
        // 好客租房 底部资讯路由
        path: "/hkzf/consult",
        component: () => import("@/views/consult/index.vue"),
        name: "consult",
      },
      {
        // 好客租房 底部用户路由
        path: "/hkzf/user",
        component: () => import("@/views/user/index.vue"),
        name: "user",
      },
    ],
  },
  // 地图找房
  {
    path: "/maphouse",
    component: () => import("@/views/mapSearchRoom"),
    name: "maphouse",
  },
  // 发布房源
  {
    path: "/releaseRoom",
    component: () => import("@/views/releaseRoom"),
  },
  //我的-我的收藏
  {
    path: "/myavorite",
    component: () => import("@/views/user/myFavorite/index.vue"),
    name: "myavorite",
  },
  // 我的出租
  {
    path: "/myrentout",
    component: () => import("@/views/user/rentOut/index.vue"),
    name: "myrentout",
  },
  //城市列表
  {
    path: "/citylist",
    component: () => import("@/views/cityList/index.vue"),
    name: "cityList",
  },
  // 房屋详情
  {
    path: "/details/:id",
    component: () => import("@/views/user/HousingDetails/index.vue"),
    name: "details",
  },
  // 404 路由
  {
    path: "*",
    component: () => import("@/views/404/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
