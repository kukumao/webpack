<template>
  <header>
    <div>
      <h1> VUETEST管理系统</h1>
    </div>
  </header>
</template>
<script>
module.exports = {
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
@import "../../../assets/style/mixin.scss";
header {
  width: 100%;
  background-color: #409eff;
  height: 70px;
  color: #fff;
}
h1 {
  display: inline-block;
  height: 30px;
  margin-left: 47px;
  line-height: 30px;
  font-size: 30px;
  font-weight: 400;
}
</style>
