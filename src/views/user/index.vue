<template>
  <div>
    <!--  -->
    <div id="header">
      <img
        :src="
          isShow
            ? `http://liufusong.top:8080${userInfo.avatar}`
            : `http://liufusong.top:8080/img/profile/bg.png`
        "
        alt=""
      />
      <template v-if="isShow">
        <div id="mytitle">
          <div class="block">
            <img :src="`http://liufusong.top:8080${userInfo.avatar}`" alt="" />
          </div>
          <p>{{ userInfo.nickname }}</p>
          <div>
            <button @click="btnClear" class="btn">退出</button>
          </div>
        </div>
      </template>
      <template v-else>
        <div id="mytitle">
          <div class="block">
            <img
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt=""
            />
          </div>
          <p>游客</p>
          <div>
            <button @click="btn" class="btn">去登陆</button>
          </div>
        </div></template
      >
    </div>
    <!-- 我的收藏等6个图标 -->
    <div id="icon">
      <ul>
        <li @click="goMyAvorite">
          <van-icon name="star-o" size="20px" />
          <span>我的收藏</span>
        </li>
        <li @click="myRentOut">
          <van-icon name="wap-home-o" size="20px" /> <span>我的出租</span>
        </li>
        <li><van-icon name="clock-o" size="20px" /> <span>看房记录</span></li>
      </ul>
      <ul>
        <li><van-icon name="notes-o" size="20px" /> <span>成为房主</span></li>
        <li><van-icon name="contact" size="20px" /> <span>个人资料</span></li>
        <li><van-icon name="service-o" size="20px" /> <span>联系我们</span></li>
      </ul>
    </div>
    <!-- img -->
    <div id="img-bottom">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
// 引入API
import { getUserInfo } from "@/apis";
export default {
  data() {
    return {
      userInfo: [],
    };
  },
  // 方法
  methods: {
    //去登陆按钮
    btn() {
      this.$router.push({
        name: "login",
      });
    },
    //退出账号按钮
    btnClear() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否确认退出",
        })
        .then(() => {
          // on confirm
          this.$store.commit("setUser", "");
        })
        .catch(() => {
          // on cancel
        });
    },
    // 我的收藏 按钮
    goMyAvorite() {
      if (this.isShow) {
        this.$router.push({
          name: "myavorite",
        });
      } else {
        this.$router.push("/login");
      }
    },
    // 我的出租 按钮
    myRentOut() {
      if (this.isShow) {
        this.$router.push("/myrentout");
      } else {
        this.$router.push("/login");
      }
    },
    // 获取用户信息
    async getUserInfo() {
      try {
        const res = await getUserInfo();
        this.userInfo = res.data.body;
        console.log(this.userInfo);
      } catch (error) {
        console.log(error);
      }
    },
  },
  // 计算属性
  computed: {
    isShow() {
      return !!this.$store.state.user;
    },
  },
  // 创建后
  created() {
    console.log(this);
    if (this.isShow) {
      this.getUserInfo();
    }
  },
};
</script>

<style scoped lang="less">
#header {
  width: 100%;
  height: 300px;
}

#mytitle {
  width: 279px;
  height: 166px;
  background-color: #fff;
  left: 48px;
  top: 134px;
  position: absolute;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 0;

  p {
    font-size: 14px;
    line-height: 14px;
    transform: translateY(-100%);
  }

  .block {
    width: 70px;
    height: 70px;
    position: relative;
    left: 105px;
    background-color: #fff;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: 0 2px 2px #bdbdbd;
    border: 5px solid #f5f5f5;
  }

  .btn {
    width: 69px;
    height: 30px;
    background-color: #21b97a;
    line-height: 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    color: #fff;
  }
}
#icon ul {
  display: flex;
  li {
    flex: 1;
    height: 95px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px 0 15px 0;
    text-align: center;

    span {
      font-size: 14px;
      line-height: 14px;
      margin-top: 12px;
    }
  }
}
#img-bottom {
  padding: 8px 15px;
}
</style>