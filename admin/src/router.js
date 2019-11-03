import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'
import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'
import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'
import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'
import AdEdit from './views/AdEdit.vue'
import AdList from './views/AdList.vue'
import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '/categories/create', name: 'categoryedit', component: CategoryEdit },
        { path: '/categories/edit/:id', component: CategoryEdit, props: true },
        { path: '/categories/list', name: 'categorylist', component: CategoryList },

        { path: '/items/create', name: 'itemedit', component: ItemEdit },
        { path: '/items/edit/:id', component: ItemEdit, props: true },
        { path: '/items/list', name: 'itemlist', component: ItemList },

        { path: '/heroes/create', name: 'heroedit', component: HeroEdit },
        { path: '/heroes/edit/:id', component: HeroEdit, props: true },
        { path: '/heroes/list', name: 'herolist', component: HeroList },

        { path: '/articles/create', name: 'articledit', component: ArticleEdit },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', name: 'articlelist', component: ArticleList },

        { path: '/ads/create', name: 'adedit', component: AdEdit },
        { path: '/ads/edit/:id', component: AdEdit, props: true },
        { path: '/ads/list', name: 'adlist', component: AdList },

        { path: '/admin_users/create', name: 'adminuserdit', component: AdminUserEdit },
        { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
        { path: '/admin_users/list', name: 'adminuserlist', component: AdminUserList }
      ]
    },
    { path: '/login', component: Login, meta: { isPublic: true } }
  ]
})

//导航守卫
router.beforeEach((to, from, next) => {
  // //要去的页面不是公开的且没有token
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router