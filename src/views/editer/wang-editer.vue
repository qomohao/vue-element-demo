<template>
  <div class="wang-editer">
    <div id="editerDom"></div>
    <h3>相关操作</h3>
    <div class="act-box">
      <el-button @click="getEditorData">获取当前内容</el-button>
      <el-button type="primary" @click="clearEditorData">清空当前内容</el-button>
    </div>
    <h3>内容预览</h3>
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 8 }"
      placeholder="富文本内容"
      v-model="editorData"
    >
    </el-input>
  </div>
</template>

<script>
// 引入 wangEditor
import wangEditor from "wangeditor";
export default {
  name: "wang-editer",
  data() {
    return {
      editor: null,
      editorData: ""
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const editor = new wangEditor(`#editerDom`);
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
        this.editorData = newHtml;
      };
      editor.config.zIndex = 50
      // 创建编辑器
      editor.create();
      editor.txt.html('<p>文档：<a href="https://doc.wangeditor.com/" target="_blank">https://doc.wangeditor.com/</a></p>')
      this.editor = editor;
    },
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html();
      this.$alert(data, '编辑器内容', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    },
    clearEditorData () {
      this.editor.txt.clear()
    }
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },
};
</script>
<style lang="less" scoped>
.wang-editer {
  .act-box {
    padding: 10px 0;
  }
}
</style>
