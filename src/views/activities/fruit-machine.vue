<template>
  <div class="fruit-machine">
    <div class="fruit-box">
      <div class="flex">
        <fruit-item
          :class="activityNum === 1 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '苹果', id: 1, icon:'icon-king'}"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 2 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '小王', id: 2 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 3 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: 'King', id: 3 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 4 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大王', id: 4 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 5 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', id: 5 }"
        ></fruit-item>
      </div>
      <div class="flex justify-between">
        <fruit-item
          :class="activityNum === 16 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '西瓜', id: 16 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 6 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大西瓜', id: 6 }"
        ></fruit-item>
      </div>
      <div class="flex justify-between">
        <fruit-item
          :class="activityNum === 15 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '苹果', id: 15 }"
        ></fruit-item>
        <div
          class="qwe centerInfo flex justify-center align-center pointer"
          @click="go()"
        >
          <div class="qwe">
            <div>中奖信息： 
              <div>水果：{{winInfo ? winInfo.name : '--'}}</div>
              <div>奖金：{{winInfo ? winInfo.num  + '(倍数*' + winInfo.double + ')=' + winInfo.num * winInfo.double : '--'}}</div>
            </div>
          </div>
        </div>
        <fruit-item
          :class="activityNum === 7 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '苹果', id: 7 }"
        ></fruit-item>
      </div>
      <div class="flex justify-between">
        <fruit-item
          :class="activityNum === 14 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', id: 14 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 8 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '柠檬', id: 8 }"
        ></fruit-item>
      </div>
      <div class="flex">
        <fruit-item
          :class="activityNum === 13 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大柠檬', id: 13 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 12 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '樱桃', id: 12 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 11 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大樱桃', id: 11 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 10 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '杨桃', id: 10 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 9 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大杨桃', id: 9 }"
        ></fruit-item>
      </div>
    </div>
    <div class="params-box">
      运行速度：
      <el-select v-model="changeSpeed" placeholder="请选择速度" :disabled="progressStatus">
        <el-option
          v-for="item in gameOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="params-box">
      押注：
      <el-checkbox-group v-model="checkList" :disabled="progressStatus">
        <el-checkbox :label="v.name" v-for="(v, i) in fruitList" :key="i"></el-checkbox>
      </el-checkbox-group>
      <p>已选中：{{checkList}}</p>
    </div>
  </div>
</template>

<script>
import fruitItem from "./fruit-item.vue";
export default {
  name: "fruit-machine",
  data() {
    return {
      // activityNum: Math.ceil(Math.random() * 16),
      activityNum: 1,
      fruitArr: [],
      timer: null,
      // 速度 --ms
      changeSpeed: 200,
      // 游戏是否进行中
      progressStatus: false,
      // 参数值 -- 速度
      gameOptions: [
        {
          value: 200,
          label: "正常速度 200ms",
        },
        {
          value: 100,
          label: "较快 100ms",
        },
        {
          value: 50,
          label: "很快 50ms",
        },
        {
          value: 20,
          label: "非常快 10ms",
        },
      ],
      // 中奖信息
      winInfo: null,
      // 水果列表
      fruitList: [
        {
          name:'小王',
          num:2, // 单注
          double:25, // 倍数
        },
        {
          name:'大王',
          num:2, // 单注
          double:50, // 倍数
        },
        {
          name:'King',
          num:2, // 单注
          double:100, // 倍数
        },
        {
          name:'苹果',
          num:2, // 单注
          double:2, // 倍数
        },
        {
          name:'西瓜',
          num:10, // 单注
          double:3, // 倍数
        },
        {
          name:'柠檬',
          num:6, // 单注
          double:4, // 倍数
        },{
          name:'杨桃',
          num:10, // 单注
          double:2, // 倍数
        },{
          name:'樱桃',
          num:5, // 单注
          double:2, // 倍数
        },
      ],
      // 选中水果
      checkList: []
    };
  },

  components: { fruitItem },

  computed: {},

  mounted() {
    console.log(document.getElementsByClassName("fruit-item"));
    this.fruitArr = document.getElementsByClassName("fruit-item");
  },

  methods: {
    // 转动水果机
    go() {
      this.winInfo = null
      this.progressStatus = !this.progressStatus
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.timeCount = 0;
        //获取中奖信息
        this.getwinInfo()
      } else {
        this.timer = setInterval(() => {
          if (this.activityNum >= this.fruitArr.length) {
            this.activityNum = 0;
          }
          this.activityNum += 1;
        }, this.changeSpeed);
      }
    },
    // 获取中奖信息
    getwinInfo () {
      this.$children.forEach(v => {
        if(v.$el.className.indexOf('activity-fruit') > -1) {
          // 选中的Dom props信息   name、id
          let winName = v.$options.propsData.fruitInfo.name
          // 选中Dom，对应详细信息
          let winFruit = this.fruitList.filter(v => winName.indexOf(v.name) > -1)
          // 中奖
          if (winFruit.length && this.checkList.indexOf(winFruit[0].name) > -1){
            // “大”水果 奖金倍数*2
            if (winName.indexOf('大') > -2) {
              winFruit[0].double = winFruit[0].double * 2
            }
            this.winInfo = Object.assign(winFruit[0], v.$options.propsData.fruitInfo)
          }
        }
      })
    }
  },
};
</script>
<style lang="less" scoped>
.fruit-machine {
  padding: 20px 0;
  .fruit-box {
    width: 500px;
  }
  .centerInfo {
    padding: 10px;
    text-align: center;
  }
  .activity-fruit {
    border: 3px solid red;
    background: red;
  }
  .params-box {
    margin-top: 20px;
  }
}
</style>
