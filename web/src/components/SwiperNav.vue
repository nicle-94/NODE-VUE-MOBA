<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img class="w-100" src="../assets/images/8daa3e2de015c88c3c8ea34e75a163e2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/5bd399890e0ddca258ada7793cacb747.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/d143b71ec124a6b4fb62d60d2ff30a52.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "swiperNav",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false
        },
        pagination: {
          el: ".pagination-home"
        }
      },
      swiperSlides: [1, 2, 3]
    };
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    width: 0.6538rem;
    height: 0.6538rem;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
</style>