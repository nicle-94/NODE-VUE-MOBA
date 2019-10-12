<template>
  <div class="nav bg-primary">
    <div class="nav-container nav-inverse jc-around">
      <router-link target="div" to="/" class="nav-item active">首页</router-link>
      <router-link target="div" to="/strategyCenter" class="nav-item">攻略中心</router-link>
      <router-link target="div" to="/matchIndex" class="nav-item">赛事中心</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "navi"
};
</script>
<style lang="scss" scoped>
.nav {
  padding: 0.8846rem;
}
</style>