<template>
  <div>
    <!-- navBar -->
    <navBar :title="title" id="navBar" style="margin-bottom: 46px"></navBar>
    <div v-if="!arrList.length">
      <p id="showTitle">您还没有房源，<span>去发布房源</span>吧~</p>
    </div>
    <div>
      <BuildingList
        v-for="(item, index) in arrList"
        :key="index"
        :item="item"
      ></BuildingList>
    </div>
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
  name: "ManageHouse",
  data() {
    return {
      title: "房屋管理",
      arrList: [],
      timer: "infinite",
    };
  },
  // 组件
  components: {
    navBar,
    BuildingList,
  },
  // 创建后
  created() {
    // 调用方法 渲染页面
    this.getRentOut();
  },
  // 方法
  methods: {
    async getRentOut() {
      if (!this.arrList.length) {
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
      }
      // return;
      try {
        const res = await rentOut(this.$store.state.user);
        this.arrList = res.data.body;
        this.timer = 0;
        console.log(this.arrList);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
#showTitle {
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 100px;
  span {
    color: rgb(48, 185, 124);
  }
}
</style>