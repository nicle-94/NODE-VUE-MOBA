<template>
  <div class="bg-white">
    <div class="mx-3 my-3 pt-3 d-flex ai-center">
      <i class="sprite" :class="`sprite-${icon}`"></i>
      <span class="font-xl flex-1 ml-2">{{title}}</span>
      <el-button style="float: right; padding: 3px 0" class="sprite sprite-more" type="text"></el-button>
    </div>
    <div class="border-bottom m-3">
      <slot></slot>
    </div>
    <div class="nav">
      <div class="nav-container jc-between mx-3 mb-3">
        <a
          class="nav-item"
          :class="{active:active === i}"
          v-for="(item,i) in categories"
          :key="i"
          @click="$refs.mySwiper.swiper.slideTo(i)"
        >{{item.name}}</a>
      </div>
    </div>
    <div>
      <swiper
        ref="mySwiper"
        :options="{autoHeight:true}"
        @slide-change="()=>active=$refs.mySwiper.swiper.realIndex"
      >
        <!-- slides -->
        <swiper-slide v-for="(category,i) in categories" :key="i">
          <!-- category传到外层 -->
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "listCard",
  data() {
    return {
      pagination: {
        el: ".pagination-home"
      },
      swiperSlides: [1, 2, 3],
      active: 0
    };
  },
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    categories: {
      type: Array
    }
  }
};
</script>
<style>
</style>