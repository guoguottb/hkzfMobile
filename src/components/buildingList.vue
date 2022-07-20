<template>
  <div id="collect" @click="particulars">
    <div class="left">
      <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
    </div>
    <div class="right">
      <h3>{{ item.title }}</h3>
      <div class="location">{{ item.desc }}</div>
      <div class="tags">
        <span>{{ item.tags[0] }}</span>
      </div>
      <div class="price">
        <span>{{ item.price }}</span
        ><i> 元/月</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // 父传子
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    // 点击跳转到房屋详情
    particulars() {
      console.log(this.isShow);
      if (this.isShow) {
        // 存储 房屋id
        this.$store.commit("setHousesCode", this.item.houseCode);
        console.log("ok");
        this.$router.push(`/details/${this.item.houseCode}`);
      } else {
        this.$router.push("/login");
      }
    },
    // 获取房屋详情的接口
    getParticulars() {},
  },
  computed: {
    // 判断是否有token
    isShow() {
      return !!this.$store.state.user;
    },
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
  .left {
    float: left;
    width: 106px;
    height: 80px;

    img {
      width: 106px;
      height: 80px;
    }
  }

  .right {
    overflow: hidden;
    line-height: 22px;
    padding-left: 12px;

    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      margin: 0;
      font-size: 15px;
      color: #394043;
    }

    .location {
      font-size: 12px;
      color: #afb2b3;
    }

    .tags {
      color: #39becd;
      background: #e1f5f8;
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 5px;
      margin-right: 5px;
      line-height: 12px;
    }

    .price {
      font-size: 12px;
      color: #fa5741;

      span {
        font-size: 16px;
        font-weight: bolder;
      }
    }
  }
}
</style>