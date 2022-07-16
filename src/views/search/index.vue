<template>
  <div>
    <!-- navBar -->
    <div class="top">
      <span class="icon1">
        <van-icon name="arrow-left" />
      </span>
      <div class="searchDiv">
        <div class="text">
          北京<span class="iconfont icon-xiajiantou"></span>
        </div>
        <div class="inputFather">
          <span class="iconfont icon-sousuo1"></span>
          <input type="text" placeholder="请输入小区或地址" />
        </div>
      </div>
      <span class="iconfont icon-ditu"></span>
    </div>
    <!-- tabs -->
    <div class="tabs">
      <div :class="{ greenColor: colorG === 1 }" @click="changeColor(1)">
        <span>区域</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      <div :class="{ greenColor: colorG === 2 }" @click="changeColor(2)">
        <span>方式</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      <div :class="{ greenColor: colorG === 3 }" @click="changeColor(3)">
        <span>租金</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      <div :class="{ greenColor: colorG === 4 }" @click="changeColor(4)">
        <span>筛选</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorG: 3,
    };
  },
  methods: {
    changeColor(val) {
      this.colorG = val;
    },
  },
};
</script>

<style lang="less" scoped>
// navBar
.top {
  background-color: #21b97a;
  height: 50px;
  width: 100%;
  position: relative;
  display: flex;

  .icon1 {
    text-align: center;
    line-height: 50px;
    color: #fff;
  }

  > span {
    flex: 1;
    background-color: #30b97c;
  }

  .searchDiv {
    flex: 5;
    display: flex;
    height: 34px;
    border-radius: 3px;
    background-color: #fff;
    margin-top: 8px;
    justify-content: space-around;

    .text {
      flex: 2;
      text-align: center;
      line-height: 34px;
      font-size: 14px;
    }

    .inputFather {
      flex: 7;
      position: relative;

      input {
        width: 100%;
        height: 100%;
        padding-left: 40px;
        font-size: 13px;
        color: #9c9fa1;
        line-height: 34px;
        position: relative;
        top: -5px;
        border-radius: 3px;
      }

      .icon-sousuo1 {
        position: absolute;
        left: 12px;
        top: 6px;
        z-index: 2;
      }
    }
  }

  .icon-ditu {
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    color: #fff;
  }
}
// tabs
.tabs {
  display: flex;
  width: 100%;
  height: 40px;
  border-bottom: 1px #e4e6f0 solid;

  > div {
    flex: 1;
    background-color: #fff;
    font-size: 17px;
    text-align: center;
    line-height: 40px;

    > .iconfont {
      margin-left: 4px;
    }
  }

  .greenColor {
    color: #21b97a;
  }
}
</style>