<template>
  <div>
    <!-- navbar -->
    <navBar :title="title"></navBar>
    <!-- form表单 -->
    <van-form @submit="onSubmit" class="form-list">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="form-btn"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="btn-a">
      <a href="#javascript:;">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { login } from "@/apis/user/login";
//引入navbar
import navBar from "@/components/navBar.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      title: "账号登录",
    };
  },
  methods: {
    async onSubmit() {
      // Toast.success("成功文案");
      // Toast.fail("失败文案");
      const res = await login(this.username, this.password);
      if (res.data.status !== 200) {
        return Toast.fail("用户名或密码错误");
      }
      // localStorage.setItem("token", res.data.body.token);
      localStorage.setItem("token", JSON.stringify(res.data.body.token));
      this.$router.push({
        name: "home",
      });
      Toast.success("登录成功");
    },
  },
  //复用组件
  components: {
    navBar,
  },
};
</script>

<style lang="less" scoped>
.form-list {
  margin: 0 15px;
  margin-top: 22px;

  .van-cell {
    padding: 2px 0;
    border-bottom: 1px solid #ddd;

    :deep(.van-field__control) {
      //input输入框
      height: 60px;
      width: 100%;
      padding: 2px 0;
      border: 0;
      color: #000;
      font-size: 16px;
      background-color: transparent;
    }
  }
}
.form-btn {
  background-color: #1cb676;
  border: 1px solid #1cb676;
  border-radius: 2px;
  height: 50px;
  font-size: 18px;
}

.btn-a {
  margin-top: 30px;
  text-align: center;
  font-family: "Microsoft YaHei";
  font-size: 0.175rem;
  a {
    color: #666;
  }
}
</style>