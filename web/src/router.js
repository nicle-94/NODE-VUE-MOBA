import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('./views/homeChildren/Index.vue'),
        },
        {
          path: '/articles/:id',
          name: 'indexArticle',
          component: () => import('./views/indexChildren/IndexArticle.vue'),
          props: true
        },
        {
          path: '/strategyCenter',
          name: 'strategyCenter',
          component: () => import('./views/homeChildren/StrategyCenter.vue')
        },
        {
          path: '/matchIndex',
          name: 'matchIndex',
          component: () => import('./views/homeChildren/MatchIndex.vue')
        }
      ]
    },
    {
      path: '/heroes/:id',
      name: 'indexHero',
      component: () => import('./views/indexChildren/IndexHero.vue'),
      props: true
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
