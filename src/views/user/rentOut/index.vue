<template>
  <div>
    <navBar :title="title"></navBar>
  </div>
</template>

<script>
// navBar 组件
import navBar from "@/components/navBar.vue";
// 引入房屋信息组件
import BuildingList from "@/components/buildingList.vue";
// 按需引入 数据请求
import { rentOut } from "@/apis/user/login";
export default {
  data() {
    return {
      title: "房屋管理",
      arrList: [],
    };
  },
  // 组件
  components: {
    navBar,
    BuildingList,
  },
  // 创建后
  async created() {
    try {
      const res = await rentOut(this.$store.state.user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>