<template>
  <div class="canvas-sector qwee">
    <canvas id="sector-canvas" :style="canvasStyle" width="300" height="300"></canvas>
    <i class="iconfont icon-huodong center-btn" @click="go()"></i>
  </div>
</template>

<script>
export default {
  name: "canvas-sector",
  data() {
    return {
      // 奖品数量
      prizeNum: 6,
      canvasStyle: {
        width: 300,
        height: 300
      },
      sectorGifts: [{
          name: '谢谢参与',
          id: 1
      },{
          name: '22222',
          id: 2
      },{
          name: '111111',
          id: 1
      },{
          name: '233333333',
          id: 2
      },{
          name: '谢谢参与',
          id: 1
      },{
          name: '66666 ',
          id: 2
      }],
      sectorColors: ["#AE3EFF","#4D3FFF","#FC262C","#3A8BFF","#EE7602","#FE339F"],
      sectorIcon: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1804334714,3300233087&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2264468991,2128073396&fm=26&gp=0.jpg",
        require('@/assets//imgs/avatar.png')
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {
    window.onload = this.drawCanvas();
  },

  methods: {
    drawCanvas() {
        const num = this.prizeNum
        // 初始化画布
        let canvas = document.getElementById("sector-canvas");
        if (!canvas.getContext) {
            alert("抱歉！浏览器不支持。");
            return;
        }
        let ctx = canvas.getContext("2d");
        for (let i = 0; i < num; i++) {
            // 保存当前状态
            ctx.save();
            // 开始一条新路径
            ctx.beginPath();
            // 位移到圆心，下面需要围绕圆心旋转
            ctx.translate(this.canvasStyle.width / 2, this.canvasStyle.height / 2);
            // 从(0, 0)坐标开始定义一条新的子路径
            ctx.moveTo(0, 0);
            // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
            ctx.rotate((360 / num * i + 360 / num / 2) * Math.PI/180);
            // 绘制圆弧
            ctx.arc(0, 0, 150, 0, (2 * Math.PI) / num, false);
            ctx.fillStyle = this.sectorColors[i]
            // 填充扇形
            ctx.fill();
            // 绘制边框
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = this.prizeNum === 1 ? "transparent" : 'red';
            ctx.stroke();
            // 文字
            ctx.fillStyle = "#fff";
            ctx.font = "16px sans-serif";
            ctx.fillText(this.sectorGifts[i].name + i, -ctx.measureText(this.sectorGifts[i].name).width / 2, 100, 60);
            let img = new Image();
            img.onload = function(){
                // 将图片画到canvas上
                ctx.drawImage(img,100,50, 30, 30);
            }
            img.src = this.sectorIcon[i];
            // 恢复前一个状态
            ctx.restore();
        }
    },
    go () {
        let canvas = document.getElementById("sector-canvas");
        canvas.rotate({
        angle: 0,
        animateTo: 60 + 360 * 5, // 这里多旋转了5圈，圈数越多，转的越快
        duration: 8000,
        callback: function() { // 回调
            //弹出中奖提示
            // turnWheel.bRotate = !turnWheel.bRotate;
        }
    });
    }
  },
};
</script>
<style lang="less" scoped>
.canvas-sector {
  position: relative;
  .center-btn {
    position: absolute;
    left: 120px;
    top: 120px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    line-height: 60px;
    text-align: center;
  }
  .center-btn:after {
    position: absolute;
    display: block;
    content: "";
    left: 10px;
    top: -32px;
    width: 0;
    height: 0;
    overflow: hidden;
    border-width: 20px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: #fff;
  }
}
</style>
