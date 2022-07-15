<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />
    <div class="top-div"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
    },
  },
  methods: {
    //navbar 左侧返回键
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="less">
:deep(.nav-bar) {
  background-color: rgb(48, 185, 124);

  .van-nav-bar__title {
    color: #fff;
  }

  .van-icon-arrow-left:before {
    color: #fff !important;
  }

  .van-ellipsis {
    font-size: 18px;
  }
}
</style>