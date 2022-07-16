import Vue from "vue";
import VueRouter from "vue-router";
// let routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch((err) => err);
// };
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/hkzf/home" },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    name: "login",
  },
  {
    path: "/hkzf",
    component: () => import("@/views/hkzf/index.vue"),
    children: [
      {
        path: "/hkzf/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
      },
      {
        path: "/hkzf/search",
        component: () => import("@/views/search/index.vue"),
      },
      {
        path: "/hkzf/consult",
        component: () => import("@/views/consult/index.vue"),
      },
      {
        path: "/hkzf/user",
        component: () => import("@/views/user/index.vue"),
        name:"user"
      },
    ],
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
  {
    path: "*",
    component: () => import("@/views/404/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
