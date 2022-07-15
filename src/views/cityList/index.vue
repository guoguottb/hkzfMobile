<template>
  <div>
    <!-- navBar -->
    <navBar :title="title"></navBar>
    <!-- cityList -->
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import { getCityList } from "@/apis/area";
export default {
  data() {
    return {
      title: "城市列表",
      cityList: [],
    };
  },
  components: {
    navBar,
  },
  async created() {
    try {
      const res = await getCityList(1);
      this.cityList = res.data.body;
      console.log(this.cityList);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>