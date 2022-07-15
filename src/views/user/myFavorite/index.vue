<template>
  <div style="">
    <!-- navBar -->
    <navBar :title="title"></navBar>
    <BuildingList
      v-for="(item, index) in collection"
      :key="index"
      :item="item"
    ></BuildingList>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
import { myFavorite } from "@/apis/user/login.js";
//引入渲染房屋信息的组件
import BuildingList from "@/components/buildingList.vue";
export default {
  data() {
    return {
      title: "收藏列表",
      collection: [],
    };
  },
  //组件
  components: {
    navBar,
    BuildingList,
  },
  async created() {
    try {
      const res = await myFavorite(this.$store.state.user);
      this.collection = res.data.body;
      console.log(this.collection);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="less" scoped>
#collect {
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid orange;
}
</style>