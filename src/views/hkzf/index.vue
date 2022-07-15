<template>
  <div>
    <router-view></router-view>
    <!-- footer -->
    <van-tabbar v-model="active"  inactive-color="#000">
      <van-tabbar-item name="home" icon="home-o" to="/hkzf/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="search" to="/hkzf/search"
        >搜索</van-tabbar-item
      >
      <van-tabbar-item name="friends" icon="friends-o" to="/hkzf/consult"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item name="setting" icon="setting-o" to="/hkzf/user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style>
</style>