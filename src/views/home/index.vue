<template>
  <div>
    <!-- input 搜索框 -->
    <div class="topSearch" @click="$router.push('/citylist')">
      <!-- flex 布局 左侧盒子 -->
      <div class="left">
        <!-- 左侧省份和icon -->
        <div class="leftMin">
          <span class="address">{{ city }} </span
          ><span class="iconfont icon-xiajiantou"></span>
        </div>
        <!-- 右侧搜索icon 和搜索框 -->
        <div class="rightMin">
          <span class="iconfont icon-sousuo1"></span
          ><span type="text" class="addressText" style="font-size: 14px"
            >请输入小区或地址</span
          >
        </div>
      </div>
      <!-- flex 布局右侧盒子 -->
      <div class="right">
        <span class="iconfont icon-ditu"></span>
      </div>
    </div>
    <!-- banner -->
    <div class="bannerShow" v-if="swiper.length === 0"></div>
    <div v-else>
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        height="212px"
      >
        <van-swipe-item v-for="item in swiper" :key="item.id">
          <template>
            <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
          </template>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- icon 整租 合租 地图找房 去租房-->
    <div>
      <ul id="icon">
        <li @click="$router.push('/hkzf/search')">
          <div>
            <span class="iconfont icon-31shouye"></span>
          </div>
          <p>整租</p>
        </li>
        <li @click="$router.push('/hkzf/search')">
          <div>
            <span class="iconfont icon-friend"></span>
          </div>
          <p>合租</p>
        </li>
        <li @click="$router.push('/maphouse')">
          <div>
            <span class="iconfont icon-dituzhaofang"></span>
          </div>
          <p>地图找房</p>
        </li>
        <li @click="$router.push('/releaseRoom')">
          <div>
            <span class="iconfont icon-fangwu"></span>
          </div>
          <p>去出租</p>
        </li>
      </ul>
    </div>
    <!-- 租房小组 -->
    <div id="tenement">
      <!-- title -->
      <div>
        <p id="titleName">
          <span>租房小组</span>
          <i>更多</i>
        </p>
      </div>
    </div>
    <!-- body -->
    <div class="mainList">
      <div class="List" v-for="item in GroupList" :key="item.id">
        <div class="pic">
          <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
        </div>
        <div class="text">
          <p>{{ item.desc }}</p>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getSwiper,
  getCityId,
  setLocalCityId,
  getLocalCityId,
  rentingGroup,
} from "@/apis";
export default {
  name: "Home",
  data() {
    return {
      //轮播图
      swiper: [],
      city: "北京",
      GroupList: [],
    };
  },
  // 方法
  methods: {
    // 跳转到城市列表
    toCityList() {},
    // 首页轮播图
    async getSwiper() {
      try {
        const res = await getSwiper();
        this.swiper = res.data.body;
        console.log(this.swiper);
      } catch (error) {
        console.log(error);
      }
    },
    // 获取存储本城市的id到本地存储
    async getCityId() {
      try {
        const res = await getCityId(this.city);
        console.log(res.data.body.value);
        setLocalCityId(res.data.body.value);
      } catch (error) {
        console.log(error);
      }
    },
    // 租房小组数据
    async rentingGroup() {
      try {
        const res = await rentingGroup(getLocalCityId());
        this.GroupList = res.data.body;
        console.log(res, "租房小组");
      } catch (error) {
        console.log(error, "租房小组出错了");
      }
    },
  },
  // 创建后
  created() {
    // 调用接口 获取轮播图数据
    this.getSwiper();
    // 调用接口获取城市id
    this.getCityId();
    // 租房小组数据
    this.rentingGroup();
  },
};
</script>


<style scoped lang="less">
// 顶部搜索框样式
.topSearch {
  width: 100%;
  height: 36px;
  // background-color: orange;
  padding: 0 15px;
  position: absolute;
  top: 30px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 左侧大搜索框
  .left {
    width: 310px;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    padding: 8px 0;
    display: flex;

    .leftMin {
      width: 80px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 14px;
      border-right: 1px solid #ccc;
    }

    .rightMin {
      height: 20px;
      display: flex;
      line-height: 20px;
      text-align: center;

      .iconfont {
        font-size: 14px;
        width: 40px;
      }

      .addressText {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  // 右侧地图图标
  .right {
    width: 30px;
    height: 30px;
    // background-color: pink;
    display: flex;
    align-items: center;

    .iconfont {
      font-size: 30px;
      color: #fff;
    }
  }
}
// 组件banner 的相关样式
:deep(.my-swipe .van-swipe-item) {
  color: #fff;
  font-size: 20px;
  line-height: 212px;
  text-align: center;
  // background-color: #39a9ed;
}
// banner 组件没获取到图片时候展示内容
.bannerShow {
  width: 100%;
  height: 212px;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 60px;
      height: 60px;
      background-color: rgb(242, 251, 247);
      border-radius: 50%;
      text-align: center;
      line-height: 60px;

      span {
        color: rgb(30, 174, 104);
        font-size: 28px;
      }
    }

    p {
      font-size: 14px;
      margin-top: 6px;
    }
  }
}

// 租房小组 title
#tenement {
  background-color: rgb(246, 245, 246);
  padding: 0 10px;

  // 租房小组 title
  #titleName {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 16px;
    padding: 15px 0 15px 10px;

    // 文字 租房小组
    span {
      font-weight: 900;
    }

    //更多
    i {
      font-size: 14px;
      color: rgb(120, 125, 130);
    }
  }
}

// 租房小组body数据
.mainList {
  width: 100%;
  height: 140px;
  background-color: #F6F5F6;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;

  .List {
    width: 172px;
    height: 60px;
    margin: 0 10px 10px 0;
    background-color: #fff;
    border-radius: 5px;
    display: flex;

    .pic {
      width: 50px;
      height: 50px;
      // background-color: orange;
      margin: 0 10px;
    }

    .text {
      width: 70px;
      height: 50px;
      // background-color: green;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 14px;
      }
    }
  }
}
</style>