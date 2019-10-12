<template>
  <div class="top-container bg-black d-flex ai-center px-3">
    <div class="sprite sprite-avatar"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "topBar"
};
</script>
<style lang="scss" scoped>
.top-container {
  width: 100%;
  height: 3.4615rem;
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>