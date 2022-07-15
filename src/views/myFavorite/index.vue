<template>
  <div>
    <navBar :title="title"></navBar>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import { myFavorite } from "@/apis/user/login.js";
export default {
  data() {
    return {
      title: "收藏列表",
      token: JSON.parse(localStorage.getItem("token")),
    };
  },
  //组件
  components: {
    navBar,
  },
  async created() {
    const res = await myFavorite(this.token);
    console.log(res);
  },
};
</script>

<style>
</style>