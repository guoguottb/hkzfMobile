<template>
  <div>
    <!-- navBar -->
    <navBar :title="title"></navBar>
    <BuildingList
      v-for="(item, index) in arrList"
      :key="index"
      :item="item"
    ></BuildingList>
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
  created() {
    if (this.$store.state.user) {
      this.getRentOut();
    }
  },
  methods: {
    async getRentOut() {
      try {
        const res = await rentOut(this.$store.state.user);
        this.arrList = res.data.body;
        console.log(this.arrList);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>