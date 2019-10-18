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
    <div class="card">
      <listCard title="精彩视频" icon="video" :categories="videoCats">
        <template #items="{category}">
          <div class="d-flex flex-wrap mx-1">
            <router-link
              :to="`/heroes/${item._id}`"
              tag="div"
              v-for="(item,i) in category.heroList"
              :key="i"
              class="p-2 pb-3"
              style="width:50%;"
            >
              <img :src="item.avatar" alt class="w-100" style="height:7.3077rem;" />
              <div class="font-md video-title" style>{{item.title}}</div>
              <div class="d-flex font-xs pt-2 pb-3 text-grey-2">
                <div class="sprite sprite-video video"></div>
                <div class="flex-1">{{item.view}}</div>
                <div>{{item.date}}</div>
              </div>
            </router-link>
            <div class="text-grey-2 text-center w-100 p-3">加载更多内容</div>
          </div>
        </template>
      </listCard>
    </div>
    <div class="card">
      <listCard title="图文攻略" icon="graphic" :categories="picCats">
        <template #items="{category}">
          <div>
            <router-link
              :to="`/heroes/${item._id}`"
              tag="div"
              v-for="(item,i) in category.heroList"
              :key="i"
              class="p-2 pb-3"
              style="width:100%;"
            >
              <div class="d-flex">
                <img :src="item.avatar" style="height:5.3846rem;" />
                <div class="pl-3 d-flex flex-col jc-between w-100">
                  <div class="font-xl video-title pic-title" style>{{item.title}}</div>
                  <div class="font-s text-grey-4">{{item.section}}</div>
                  <div class="font-xs pt-2 text-grey-2">
                    <div>{{item.date}}</div>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="text-grey-2 text-center w-100 p-3">加载更多内容</div>
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
      heroCats: [],
      videoCats: [
        {
          heroList: [
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191009/53873bcaec5c3fe56e9d681410452d30.1570608389.c0d724d482255fc3912e801693f5cba7.230x140_8523.jpg",
              title: "【王者克制论】上天入地韩跳跳，教你技巧来压倒",
              view: "19.7万",
              date: "10-11"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191008/d9f1d17a128e6a3a2c047678c6189817.1570530395.5a4dc80288d4174b3849a3db8e17c32e.900x500_67945.jpg",
              title: "【百星王者带你飞】第110期：飞鹰急袭驰骋峡谷,娜...",
              view: "520.7万",
              date: "10-09"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/9e8f408ce4eadd446b5b3a54d42f32e9/0/?width=230&height=140",
              title: "【峡谷情报局】第83期：机关造物火力压制，全副武装爆...",
              view: "433.8万",
              date: "10-08"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191003/a8f73a12cdddf0f835c47d97c73a52de.1570113387.592fac757fbe30b38ed2328a00162349.230x140_9734.jpg",
              title: "【新天下王者】第1期：流光飞影 黑白无常 弈星辅助流...",
              view: "713.6万",
              date: "10-04"
            }
          ],
          name: "精品栏目"
        },
        {
          heroList: [
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191009/53873bcaec5c3fe56e9d681410452d30.1570608389.c0d724d482255fc3912e801693f5cba7.230x140_8523.jpg",
              title: "【王者克制论】上天入地韩跳跳，教你技巧来压倒",
              view: "19.7万",
              date: "10-11"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191008/d9f1d17a128e6a3a2c047678c6189817.1570530395.5a4dc80288d4174b3849a3db8e17c32e.900x500_67945.jpg",
              title: "【百星王者带你飞】第110期：飞鹰急袭驰骋峡谷,娜...",
              view: "520.7万",
              date: "10-09"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/9e8f408ce4eadd446b5b3a54d42f32e9/0/?width=230&height=140",
              title: "【峡谷情报局】第83期：机关造物火力压制，全副武装爆...",
              view: "433.8万",
              date: "10-08"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191003/a8f73a12cdddf0f835c47d97c73a52de.1570113387.592fac757fbe30b38ed2328a00162349.230x140_9734.jpg",
              title: "【新天下王者】第1期：流光飞影 黑白无常 弈星辅助流...",
              view: "713.6万",
              date: "10-04"
            }
          ],
          name: "英雄攻略"
        },
        {
          heroList: [
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191009/53873bcaec5c3fe56e9d681410452d30.1570608389.c0d724d482255fc3912e801693f5cba7.230x140_8523.jpg",
              title: "【王者克制论】上天入地韩跳跳，教你技巧来压倒",
              view: "19.7万",
              date: "10-11"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191008/d9f1d17a128e6a3a2c047678c6189817.1570530395.5a4dc80288d4174b3849a3db8e17c32e.900x500_67945.jpg",
              title: "【百星王者带你飞】第110期：飞鹰急袭驰骋峡谷,娜...",
              view: "520.7万",
              date: "10-09"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/9e8f408ce4eadd446b5b3a54d42f32e9/0/?width=230&height=140",
              title: "【峡谷情报局】第83期：机关造物火力压制，全副武装爆...",
              view: "433.8万",
              date: "10-08"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191003/a8f73a12cdddf0f835c47d97c73a52de.1570113387.592fac757fbe30b38ed2328a00162349.230x140_9734.jpg",
              title: "【新天下王者】第1期：流光飞影 黑白无常 弈星辅助流...",
              view: "713.6万",
              date: "10-04"
            }
          ],
          name: "赛事精品"
        },
        {
          heroList: [
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191009/53873bcaec5c3fe56e9d681410452d30.1570608389.c0d724d482255fc3912e801693f5cba7.230x140_8523.jpg",
              title: "【王者克制论】上天入地韩跳跳，教你技巧来压倒",
              view: "19.7万",
              date: "10-11"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191008/d9f1d17a128e6a3a2c047678c6189817.1570530395.5a4dc80288d4174b3849a3db8e17c32e.900x500_67945.jpg",
              title: "【百星王者带你飞】第110期：飞鹰急袭驰骋峡谷,娜...",
              view: "520.7万",
              date: "10-09"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/9e8f408ce4eadd446b5b3a54d42f32e9/0/?width=230&height=140",
              title: "【峡谷情报局】第83期：机关造物火力压制，全副武装爆...",
              view: "433.8万",
              date: "10-08"
            },
            {
              avatar:
                "https://itea-cdn.qq.com/file/tgl/20191003/a8f73a12cdddf0f835c47d97c73a52de.1570113387.592fac757fbe30b38ed2328a00162349.230x140_9734.jpg",
              title: "【新天下王者】第1期：流光飞影 黑白无常 弈星辅助流...",
              view: "713.6万",
              date: "10-04"
            }
          ],
          name: "赛事视频"
        }
      ],
      picCats: [
        {
          heroList: [
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              section: "虎扑赛事",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            }
          ],
          name: "最新"
        },
        {
          heroList: [
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            }
          ],
          name: "英雄"
        },
        {
          heroList: [
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            }
          ],
          name: "新手"
        },
        {
          heroList: [
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            }
          ],
          name: "官方"
        },
        {
          heroList: [
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            },
            {
              avatar:
                "https://shp.qpic.cn/cfwebcap/0/f2ebaed334fb6aac1a25c4afba5013e8/0/?width=230&height=140",
              title: "[虎扑KPL黑榜]koko加入K...",
              date: "10-14"
            }
          ],
          name: "同人"
        }
      ]
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
      console.log(this.heroCats);
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
  .video-title {
    width: 99%;
    line-height: 1.5385rem;
    height: 3.0769rem;
    overflow: hidden;
  }
  .sprite-video.video {
    height: 11px;
  }
  .pic-title {
    width: 99%;
    line-height: 1.1538rem;
    height: 1.1538rem;
    overflow: hidden;
  }
}
</style>