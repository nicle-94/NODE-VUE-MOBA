<template>
  <div class="nav-menu w-100 bg-white">
    <div class="d-flex flex-wrap ai-center">
      <div class="menu-item">
        <i class="sprite sprite-fact"></i>
        <div class="font-s">爆料站</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-story"></i>
        <div class="font-s">故事站</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-store"></i>
        <div class="font-s">周边商城</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-experience"></i>
        <div class="font-s">体验服</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-new"></i>
        <div class="font-s">新人专区</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-inheritance"></i>
        <div class="font-s">荣耀传承</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-fan"></i>
        <div class="font-s">同人社区</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-king"></i>
        <div class="font-s">王者营地</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-public"></i>
        <div class="font-s">公众号</div>
      </div>
      <div class="menu-item">
        <i class="sprite sprite-fact"></i>
        <div class="font-s">版本介绍</div>
      </div>
    </div>
    <div class="btn text-center bg-grey-3">
      <i class="sprite sprite-pack"></i>
      <span>收起</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "navMenu"
};
</script>
<style lang="scss" scoped>
.nav-menu {
  .menu-item {
    width: 25%;
    text-align: center;
    margin: 1.0154rem 0;
    border-right: 1px solid #d4d9de;
    cursor: pointer;
    &:nth-child(4n) {
      border-right: none;
    }
  }
  .btn {
    height: 2.3077rem;
    line-height: 2.3077rem;
  }
}
</style>