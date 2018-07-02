<template>
  <div>
    <span class="font18" @click="handle">点我</span>
  </div>
</template>
<script>
import Action from "./action.js";
export default {
  name: "DemoList",
  components: {},
  data() {
    return {
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