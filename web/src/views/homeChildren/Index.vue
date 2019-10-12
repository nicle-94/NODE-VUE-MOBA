<template>
  <div>
    <swiperNav></swiperNav>
    <div class="menu">
      <navMenu></navMenu>
    </div>
    <div class="card">
      <listCard title="新闻资讯" icon="news" :categories="newsCats">
        <!-- 在父组件中直接拿到子组件中某个循环体的变量 -->
        <template #items="{category}">
          <router-link
            tag="div"
            :to="`/articles/${news._id}`"
            v-for="(news,i) in category.newsList"
            :key="i"
            class="font-lg mx-3 d-flex jc-between pb-1"
          >
            <span class="text-info-1 pl-1 mb-3">[{{news.categoryName}}]</span>
            <span class="mb-3">|</span>
            <span class="flex-1 mb-3 text-ellipsis">{{news.title}}</span>
            <span class="text-grey-4 font-md mb-3">{{news.createdAt | date}}</span>
          </router-link>
        </template>
      </listCard>
    </div>
    <div class="card">
      <listCard title="英雄列表" icon="hero" :categories="heroCats">
        <img
          style="width:100%;margin: 0.3846rem 0 0.7692rem 0;"
          src="../../assets/images/20381481560634.jpg"
          alt
        />
        <!-- 在父组件中直接拿到子组件中某个循环体的变量 -->
        <template #items="{category}">
          <div class="d-flex flex-wrap mx-1">
            <router-link
              :to="`/heroes/${item._id}`"
              tag="div"
              v-for="(item,i) in category.heroList"
              :key="i"
              class="p-2 text-center"
              style="width:20%;"
            >
              <img :src="item.avatar" alt class="w-100" />
              <div>{{item.name}}</div>
            </router-link>
          </div>
        </template>
      </listCard>
    </div>
  </div>
</template>
<script>
import swiperNav from "../../components/SwiperNav";
import navMenu from "../../components/NavMenu";
import listCard from "../../components/ListCard";
import dayjs from "dayjs";
export default {
  name: "index",
  data() {
    return {
      newsCats: [],
      heroCats: []
    };
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  },
  components: {
    swiperNav,
    navMenu,
    listCard
  }
};
</script>
<style lang="scss" scoped>
.menu {
  margin-top: 0.7692rem;
  border-bottom: 1px #d4d9de solid;
  border-top: 1px #d4d9de solid;
}
.card {
  margin-top: 0.9615rem;
}
</style>