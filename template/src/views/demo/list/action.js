import Api from 'api/demo/index';

let _this;
// 初始化
const init = (that) => {
  _this = that;
};
// 平台列表
const getAllPlatform = () => {
  Api.getAllPlatform().then((rs) => {
    if (rs.status) {
      _this.platformList = rs.content;
    } else {
      _this.$message({
        showClose: true,
        message: rs.error.errMsg,
        type: 'error',
        duration: 3000
      });
    }
  });
};
const handle = () => {
  _this.title = '点我干嘛';
};

export default {
  init,
  getAllPlatform,
  handle
};
