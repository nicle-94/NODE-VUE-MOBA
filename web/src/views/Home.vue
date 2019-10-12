<template>
  <div class="home">
    <topBar>
      <div class="title ml-2 flex-1">
        <h1 class="font-md text-white">王者荣耀</h1>
        <p class="font-xs text-grey-1 mt-1">团队成就更多</p>
      </div>
      <div class="download sprite sprite-btn"></div>
    </topBar>
    <navi></navi>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import topBar from "../components/TopBar";
import navi from "../components/Navi";

export default {
  name: "home",
  components: {
    topBar,
    navi
  }
};
</script>
<style lang="scss" scoped>
.home {
  .download {
    cursor: pointer;
  }
}
</style>