import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
//二次点击报错
import "amfe-flexible";
//清除初始化样式
import "@/assets/styles/base.css";
Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
