<template>
  <div class="nav bg-primary">
    <div class="nav-container nav-inverse jc-around">
      <router-link
        tag="div"
        :to="item.to"
        class="nav-item"
        v-for="(item,i) in model"
        :key="i"
      >{{item.title}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "navi",
  data() {
    return {
      model: [
        { title: "首页", to: "/" },
        { title: "攻略中心", to: "/strategyCenter" },
        { title: "赛事中心", to: "/matchIndex" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.nav {
  padding: 0.8846rem;
  .router-link-exact-active {
    border-bottom-color: #fff;
  }
}
</style>