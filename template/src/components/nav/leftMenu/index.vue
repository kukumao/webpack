<template>
  <div class="sidebar">
    <dl v-for="menu in menus" :key="menu.menuId">
      <dt class="h2 mt10">{{menu.name}}</dt>
      <template v-if="menu.sub.length>0">
        <dd v-for="menuChild in menu.sub" v-bind:class="[activeMenu==menuChild.url?'active':'']" @click="activeMenu=menuChild.url" :key="menuChild.id">
          <router-link :to="{path:menuChild.url}">{{menuChild.name}}</router-link>
        </dd>
      </template>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          menuId: 0,
          name: "DEMO管理",
          url: "/home/demo",
          sub: []
        }
      ],
      activeMenu: ""
    };
  },
  mounted() {
    var hash = window.location.hash;
    var list = hash.split("/");
    if (list && list.length >= 3) {
      var str = "/" + list[1] + "/" + list[2];
      this.activeMenu = str;
    }
  }
};
</script>
<style lang="scss">
.sidebar {
  border-right: 1px solid #eee;
  min-height: 100%;
  dt {
    height: 60px;
    line-height: 60px;
    color: red;
    padding:0 20px 0 47px;
    border-bottom: 1px solid #dbe1e5;
    cursor: pointer;
  }

  dd {
    height: 50px;
    line-height: 50px;
    color: red;
    font-size: 14px;
    &:hover {
      background-color: red;
    }
    &.active {
      background-color: red;
      color: #fff;
    }

    a {
      color: inherit;
      padding-left: 47px;
      width: 100%;
      display: inline-block;
      height: 50px;
      color: inherit;
      box-sizing: border-box;
    }
    h2 {
      height: 75px;
      line-height: 75px;
      color: #121212;
      padding: 0 20px 0 47px;
      border-bottom: 1px solid #dbe1e5;
    }
  }
}
</style>
