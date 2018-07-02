<template>
  <div>
    <span class="font18" @click="handle">{{title}}</span>
  </div>
</template>
<script>
import Action from "./action.js";
export default {
  name: "DemoList",
  components: {},
  data() {
    return {
      title: "我是列表,点我",
      platformList:[]
    };
  },
  created() {
    Action.init(this);
  },
  mounted() {
    this.getAllPlatform();
  },
  methods: {
    ...Action
  }
};
</script>
<style lang="scss">
@import "./style.scss";
</style>