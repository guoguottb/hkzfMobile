<template>
  <div>
    <!-- navbar -->
    <van-nav-bar
      :title="huoseInfo.community || `未知名称`"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />
    <!-- banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in huoseInfo.houseImg" :key="index">
        <img :src="`http://liufusong.top:8080${item}`" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 房屋详情 -->
    <div class="houseDetails">
      <div class="inside">
        <p class="houseName">{{ huoseInfo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getParticulars } from "@/apis";
export default {
  name: "HouseInfo",
  data() {
    return {
      huoseInfo: [],
    };
  },
  // 方法
  methods: {
    // 获取房屋详情
    async getParticulars() {
      try {
        const res = await getParticulars(this.$store.state.housesCode);
        if (res.data.status === 200) {
          this.$toast.success("获取房屋信息成功");
          console.log(res);
          this.huoseInfo = res.data.body;
          console.log(this.huoseInfo);
        } else {
          // 获取信息失败提示
          this.$toast.fail("获取房屋信息失败");
          // 自动跳转回去
          this.onClickLeft();
        }
      } catch (error) {
        // 获取信息失败提示
        this.$toast.fail("获取房屋信息失败");
        // 自动跳转回去
        this.onClickLeft();
      }
    },
    //navbar 左侧返回键
    onClickLeft() {
      this.$router.back();
    },
  },
  // 计算属性
  computed: {},
  // 创建后
  created() {
    this.getParticulars();
  },
};
</script>

<style lang="less" scoped>
// navBar
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
// banner
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 206px;
  width: 100%;
  text-align: center;
  background-color: #39a9ed;
}
// 房屋详情
.houseDetails {
  width: 100%;
  height: 270px;
  background-color: #fff;
  padding: 15px;

  .inside {
    width: 100%;
    height: 100%;
    background-color: orange;
    
    .houseName {
      font-size: 16px;
      color: rgb(51, 51, 51);
    }
  }
}
</style>