<template>
  <div class="page-article" v-if="model">
    <div class="d-flex text-info-2 font-md ai-center p-2 border-bottom">
      <i class="iconfont icon-back" @click="$router.back(-1)"></i>
      <strong class="flex-1 text-ellipsis">{{model.title}}</strong>
      <div class="text-grey-2 font-s">2019-09-11</div>
    </div>
    <div v-html="model.body" class="px-4 body font-xl"></div>
    <div class="px-3 py-3 about">
      <div class="d-flex ai-center font-xl">
        <i class="iconfont icon-xiangguan"></i>
        <strong class="text-info-2 ml-1">相关资讯</strong>
      </div>
      <div class="mt-3 mb-4">
        <div class="py-1 d-flex ai-center" v-for="item in model.related" :key="item._id">
          <router-link
            class="flex-1 text-ellipsis"
            tag="div"
            :to="`/articles/${item._id}`"
          >{{item.title}}</router-link>
          <div class="text-grey-2 font-s">2019-10-11</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexArticle",
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: {}
    };
  },
  created() {
    this.fetch();
  },
  //监听改变
  watch: {
    //id变化执行fetch
    id() {
      this.fetch();
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>
<style lang="scss">
.body {
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    line-height: 1.5rem;
    margin: 1.3846rem 0;
  }
  iframe {
    width: 100%;
    height: auto;
  }
}
</style>