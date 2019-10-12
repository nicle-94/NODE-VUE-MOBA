<template>
  <div class="page-hero" v-if="model">
    <topBar>
      <div class="title ml-2 flex-1">
        <span class="font-md text-white">王者荣耀</span>
        <span class="font-md text-white ml-3">攻略站</span>
      </div>
      <router-link to="/" tag="div" class="download font-s text-white">更多英雄 &gt;</router-link>
    </topBar>
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white font-s d-flex flex-col h-100 jc-end p-3">
        <div class="pb-1">{{model.title}}</div>
        <h2 class="pb-1">{{model.name}}</h2>
        <div class="pb-1">{{model.categories.map(v=>v.name).join('/')}}</div>
        <div class="d-flex jc-between ai-center">
          <div class="scores" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary-1">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-info-3">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-primary-2">{{model.scores.attach}}</span>
            <span>生存</span>
            <span class="badge bg-grey-5">{{model.scores.survive}}</span>
          </div>
          <div>
            <span class="font-xs text-grey-2">皮肤 7 &gt;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../../components/TopBar";
export default {
  name: "indexHero",
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: {
        scores: {},
        categories: []
      }
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    }
  },
  components: {
    topBar
  }
};
</script>
<style lang="scss" scoped>
.page-hero {
  .download {
    cursor: pointer;
  }
  .top {
    height: 13.0769rem;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>