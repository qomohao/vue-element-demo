<template>
  <div class="fruit-machine">
    <h1>水果机</h1>
    <div class="fruit-box">
      <div class="flex">
        <fruit-item
          :class="activityNum === 1 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '橘子', double: 2, sort: 1 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 2 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大橘子', double: 2, sort: 2 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 3 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '橘子', double: 2, sort: 3 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 4 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '苹果', double: 2, sort: 4 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 5 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 5 }"
        ></fruit-item>
      </div>
      <div class="flex justify-between">
        <fruit-item
          :class="activityNum === 16 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 16 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 6 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 6 }"
        ></fruit-item>
      </div>
      <div class="flex justify-between">
        <fruit-item
          :class="activityNum === 15 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 15 }"
        ></fruit-item>
        <div
          class="qwe centerInfo flex justify-center align-center"
          @click="go()"
        >
          <div class="qwee">
            <p>我是正中心</p>
            <p>可用积分 9999</p>
          </div>
        </div>
        <fruit-item
          :class="activityNum === 7 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 7 }"
        ></fruit-item>
      </div>
      <div class="flex justify-between">
        <fruit-item
          :class="activityNum === 14 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 14 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 8 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 8 }"
        ></fruit-item>
      </div>
      <div class="flex">
        <fruit-item
          :class="activityNum === 13 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 13 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 12 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 12 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 11 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 11 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 10 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 10 }"
        ></fruit-item>
        <fruit-item
          :class="activityNum === 9 ? 'activity-fruit' : ''"
          :fruitInfo="{ name: '大苹果', double: 2, sort: 9 }"
        ></fruit-item>
      </div>
    </div>
  </div>
</template>

<script>
import fruitItem from "./fruit-item.vue";
export default {
  name: "fruit-machine",
  data() {
    return {
      activityNum: 5,
      fruitArr: [],
      timer: null,
    };
  },

  components: { fruitItem },

  computed: {},

  mounted() {
    console.log(document.getElementsByClassName("fruit-item"));
    this.fruitArr = document.getElementsByClassName("fruit-item");
  },

  methods: {
    go() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.timer = setInterval(() => {
          if (this.activityNum >= this.fruitArr.length) {
            this.activityNum = 0;
          }
          this.activityNum += 1;
        }, 50);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.fruit-machine {
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
}
</style>
