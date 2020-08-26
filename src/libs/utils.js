import Clipboard from 'clipboard';
export default{

// 复制
copy() {
    var clipboard = new Clipboard(".copy-btn");
    clipboard.on("success", e => {
      this.$message.success("复制成功");
      // 释放内存
      clipboard.destroy();
    });
    clipboard.on("error", e => {
      // 不支持复制
      this.$message.warning("该浏览器不支持自动复制");
      // 释放内存
      clipboard.destroy();
    });
  }


}