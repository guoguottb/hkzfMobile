<template>
  <div>
    <!-- <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      class="searchInput"
    /> -->
    <!-- banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="http://liufusong.top:8080/img/swiper/1.png"
          alt=""
          style="width: 100%; height: 212px; vertical-align: top"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://liufusong.top:8080/img/swiper/2.png"
          alt=""
          style="width: 100%; height: 212px; vertical-align: top"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://liufusong.top:8080/img/swiper/3.png"
          alt=""
          style="width: 100%; height: 212px; vertical-align: top"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- icon 整租 合租 地图找房 去租房-->
    <div>
      <ul id="icon">
        <li>
          <van-icon name="wap-home-o" size="40px" />
          <p>整租</p>
        </li>
        <li>
          <van-icon name="friends-o" size="40px" />
          <p>合租</p>
        </li>
        <li>
          <van-icon name="wap-home-o" size="40px" />
          <p>地图找房</p>
        </li>
        <li>
          <van-icon name="wap-home-o" size="40px" />
          <p>去租房</p>
        </li>
      </ul>
    </div>
    <!-- 租房小组 -->
    <div id="tenement">
      <div>
        <p id="titleName">
          <span>租房小组</span>
          <i>更多</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      input3: "",
      select:"北京"
    };
  },
};
</script>

<style scoped lang="less">
.searchInput {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
}
// banner
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 212px;
  text-align: center;
  background-color: #39a9ed;
}
// 整租 合租 地图找房 去租房
#icon {
  width: 100%;
  height: 122px;
  display: flex;
  justify-content: space-between;
  li {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    span {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 14px;
    }
  }
}

#tenement {
  background-color: rgb(246, 245, 246);
  padding: 0 10px;
  #titleName {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 16px;
    padding: 15px 0 15px 10px;

    span {
      font-weight: 900;
    }

    i {
      font-size: 14px;
      color: rgb(120, 125, 130);
    }
  }
}
</style>