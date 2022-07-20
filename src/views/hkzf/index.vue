<template>
  <div>
    <router-view></router-view>
    <!-- footer -->
    <van-tabbar route v-model="active">
      <van-tabbar-item icon="home-o" to="/hkzf/home">
        <template #icon>
          <span class="iconfont icon-31shouye"></span>
          <span class="text">首页</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/hkzf/search">
        <template #icon>
          <span class="iconfont icon-sousuo"></span>
          <span class="text">找房</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/hkzf/consult">
        <template #icon>
          <span class="iconfont icon-zixun"></span>
          <span class="text">资讯</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/hkzf/user">
        <template #icon>
          <span class="iconfont icon-wode"></span>
          <span class="text">我的</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
:deep(.van-tabbar-item__icon) {
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  justify-content: space-evenly;

  .iconfont {
    font-size: 22px;
  }

  .text {
    font-size: 12px;
  }
}
</style>