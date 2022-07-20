<template>
  <div style="background-color: #f6f5f6; padding: 0 0 70px 0">
    <!-- navBar -->
    <navBar :title="navBarTitle"></navBar>
    <div class="main" style="padding-top: 46px">
      <!-- 房源信息单元格 -->
      <van-cell title="房源信息" class="top" />
      <!-- 小区名称单元格 -->
      <van-cell title="小区名称" clickable>
        <span>请输入小区名称</span><van-icon name="arrow" />
      </van-cell>
      <!-- 租金 -->
      <van-cell-group>
        <van-field v-model="price" placeholder="请输入租金/月">
          <template #label>
            <span>租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金</span>
          </template>
          <template #right-icon>
            <span>￥/月</span>
          </template>
        </van-field>
      </van-cell-group>
      <!-- 建筑面积 -->
      <van-cell-group>
        <van-field v-model="acreage" placeholder="请输入建筑面积">
          <template #label>
            <span>建筑面积</span>
          </template>
          <template #right-icon>
            <span>㎡</span>
          </template>
        </van-field>
      </van-cell-group>
      <!-- 户型 -->
      <van-cell clickable @click="houseType = true">
        <template #title
          >户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</template
        >
        <span>{{ roomType || "请选择" }}</span
        ><van-icon name="arrow" />
      </van-cell>
      <!-- 所在楼层 -->
      <van-cell clickable @click="floor = true">
        <template #title>所在楼层</template>
        <span>{{ loucheng || "请选择" }}</span
        ><van-icon name="arrow" />
      </van-cell>
      <!-- 朝向 -->
      <van-cell clickable class="orientation" @click="oriented = true">
        <template #title
          >朝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;向</template
        >
        <span>{{ caoxiang || "请选择" }}</span
        ><van-icon name="arrow" />
      </van-cell>
      <!-- 房源信息单元格 -->
      <van-cell title="房屋标题" />
      <!-- 房屋标题的内容 -->
      <van-cell-group>
        <van-field
          v-model="roomTitle"
          placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
          class="roomTitle"
        />
      </van-cell-group>
      <!-- 房屋图像 -->
      <van-cell-group>
        <van-cell title="房屋图像" />
      </van-cell-group>
      <div style="background-color: #fff">
        <van-uploader :after-read="afterRead" />
      </div>
      <!-- 房屋配置 -->
      <van-cell-group>
        <van-cell title="房屋配置" />
      </van-cell-group>
      <div>
        <!-- 房屋配置的十个图标 -->
        <van-grid square column-num="5" border class="icons">
          <!-- 每一个icon图标  01 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color01 }"
            @click="changeColor(1)"
          >
            <template #icon>
              <span class="iconfont icon-yigui-hui"></span>
            </template>
            <template #text>
              <span class="myText">衣柜</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 02 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color02 }"
            @click="color02 = !color02"
          >
            <template #icon>
              <span class="iconfont icon-xiyiji"></span>
            </template>
            <template #text>
              <span class="myText">洗衣机</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 03 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color03 }"
            @click="color03 = !color03"
          >
            <template #icon>
              <span class="iconfont icon-kongtiao"></span>
            </template>
            <template #text>
              <span class="myText">空调</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 04 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color04 }"
            @click="color04 = !color04"
          >
            <template #icon>
              <span class="iconfont icon-meiqitianranqi"></span>
            </template>
            <template #text>
              <span class="myText">天然气</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 05 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color05 }"
            @click="color05 = !color05"
          >
            <template #icon>
              <span class="iconfont icon-bingxiang"></span>
            </template>
            <template #text>
              <span class="myText">冰箱</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 06 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color06 }"
            @click="color06 = !color06"
          >
            <template #icon>
              <span class="iconfont icon-nuanqi-"></span>
            </template>
            <template #text>
              <span class="myText">暖气</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 07 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color07 }"
            @click="color07 = !color07"
          >
            <template #icon>
              <span class="iconfont icon-dianshiji"></span>
            </template>
            <template #text>
              <span class="myText">电视</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 08 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color08 }"
            @click="color08 = !color08"
          >
            <template #icon>
              <span class="iconfont icon-haofangtuo400iconfont2reshuiqi"></span>
            </template>
            <template #text>
              <span class="myText">热水器</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 09 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color09 }"
            @click="color09 = !color09"
          >
            <template #icon>
              <span class="iconfont icon-Wi-Fi"></span>
            </template>
            <template #text>
              <span class="myText">宽带</span>
            </template>
          </van-grid-item>
          <!-- 每一个icon图标 10 -->
          <van-grid-item
            class="iconfonts"
            :class="{ changeColor: color10 }"
            @click="color10 = !color10"
          >
            <template #icon>
              <span class="iconfont icon-shafa"></span>
            </template>
            <template #text>
              <span class="myText">沙发</span>
            </template>
          </van-grid-item>
        </van-grid>
        <!-- 房屋信息描述 -->
        <van-cell-group>
          <van-cell title="房屋描述" />
          <!-- 具体描述文字信息 -->
        </van-cell-group>
        <van-field
          v-model="message"
          rows="5"
          autosize
          type="textarea"
          placeholder="请输入房屋描述信息"
          maxlength="200"
          class="textarea"
          border
        />
      </div>
    </div>
    <van-tabbar>
      <van-tabbar-item>取消</van-tabbar-item>
      <van-tabbar-item style="background-color: #30b97c">提交</van-tabbar-item>
    </van-tabbar>
    <!-- 户型弹出层 -->
    <van-popup v-model="houseType" position="bottom" :style="{ height: '40%' }">
      <van-picker
        show-toolbar
        :columns="HUXING[0]"
        @confirm="HXAffirm"
        @cancel="houseType = false"
      ></van-picker>
    </van-popup>
    <!-- 楼层弹出层 -->
    <van-popup v-model="floor" position="bottom" :style="{ height: '40%' }">
      <van-picker
        show-toolbar
        :columns="LOUCHENG[0]"
        @confirm="floorAffirm"
        @cancel="floor = false"
      ></van-picker>
    </van-popup>
    <!-- 朝向弹出层 -->
    <van-popup v-model="oriented" position="bottom" :style="{ height: '40%' }">
      <van-picker
        show-toolbar
        :columns="CHAOXIANIG[0]"
        @confirm="orientedAffirm"
        @cancel="oriented = false"
      ></van-picker>
    </van-popup>
  </div>
</template>

<script>
// navBar
import navBar from "@/components/navBar";
// API
import { releaseRoom } from "@/apis";
export default {
  name: "releaseRoom",
  data() {
    return {
      navBarTitle: "发布房源",
      // 租金/月
      price: "",
      // 占地面积
      acreage: "",
      //  房间类型
      roomTitle: "",
      // 描述信息
      message: "",
      // 户型弹出层数据
      HUXING: [[], []],
      roomType: "",
      // 楼层弹出层数据
      LOUCHENG: [[], []],
      loucheng: "",
      // 朝向弹出层数据
      CHAOXIANIG: [[], []],
      caoxiang: "",
      // 房屋类型 选择后显示
      roomType: "",
      // 户型 弹框 显示与否
      houseType: false,
      // 楼层 弹框 显示与否
      floor: false,
      // 朝向 弹框 显示与否
      oriented: false,
      // 发布房源所端口 data中需要的所有信息
      roomInfo: {},
      color01: false,
      color02: false,
      color03: false,
      color04: false,
      color05: false,
      color06: false,
      color07: false,
      color08: false,
      color09: false,
      color10: false,
    };
  },
  // 组件
  components: {
    navBar,
  },
  methods: {
    // 发布房屋所需的条件
    async releaseRoom() {
      try {
        const res = await releaseRoom();
        console.log(res);
        // 房屋类型的数据
        res.data.body.roomType.forEach((item) => {
          this.HUXING[0].push(item.label);
          this.HUXING[1].push(item.value);
        });
        // 楼层的数据
        res.data.body.floor.forEach((item) => {
          this.LOUCHENG[0].push(item.label);
          this.LOUCHENG[1].push(item.value);
        });
        // 朝向的数据
        res.data.body.oriented.forEach((item) => {
          this.CHAOXIANIG[0].push(item.label);
          this.CHAOXIANIG[1].push(item.value);
        });
      } catch (error) {
        console.log(error);
      }
    },
    // 上传图片
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 户型 底部弹出层 确认按钮
    HXAffirm(value, index) {
      console.log(value, index);
      // 修改显示/选中字段
      this.roomType = value;
      // 保存房屋类型 的唯一标识
      this.roomInfo.roomType = this.HUXING[1][index];
      // 关闭底部弹出层
      this.houseType = false;
    },
    // 楼层 底部弹出层 确认按钮
    floorAffirm(value, index) {
      console.log(value, index);
      // 修改显示/选中字段
      this.loucheng = value;
      // 保存楼层 的唯一标识
      this.roomInfo.floor = this.LOUCHENG[1][index];
      this.floor = false;
    },
    // 朝向 底部弹出层  确认按钮
    orientedAffirm(value, index) {
      console.log(value, index);
      // 修改显示/选中字段
      this.caoxiang = value;
      // 保存朝向 的唯一标识
      this.roomInfo.oriented = this.CHAOXIANIG[1][index];
      this.oriented = false;
    },
    // 字体图标 类的切换
    changeColor(val) {
      console.log(11);
      let str = "color0" + val;
      console.log(str);
      this.str = !this.str
    },
  },
  // 创建后
  created() {
    this.releaseRoom();
  },
};
</script>

<style lang="less" scoped>
.main {
  .top {
    color: #21b97a;
    font-size: 15px;
  }

  .van-cell {
    border-bottom: 1px solid #ccc;
  }

  :deep(.van-icon-arrow) {
    font-size: 16px;
    margin-left: 8px;
  }
}
.orientation {
  border: 0 !important;
}
// 房屋标题  placeholder 位置
.roomTitle {
  border: 0 !important;
}
.icons {
  margin-bottom: 30px;
}
//  是个iconfonts
.iconfonts {
  .iconfont {
    font-size: 24px;
  }
  .myText {
    font-size: 14px;
  }
}
:deep(.van-picker__toolbar) {
  button {
    font-size: 18px;
    color: #108ee9;
  }
}
.changeColor {
  color: #21b97a;
}
</style>