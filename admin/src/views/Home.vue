<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-active="$route.path" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">物品</template>
            <!-- <router-link to="/items/create"> -->
            <el-menu-item index="/items/create">新建物品</el-menu-item>
            <!-- </router-link> -->
            <!-- <router-link to="/items/list"> -->
            <el-menu-item index="/items/list">物品列表</el-menu-item>
            <!-- </router-link> -->
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">英雄</template>
            <!-- <router-link to="/heroes/create"> -->
            <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
            <!-- </router-link> -->
            <!-- <router-link to="/heroes/list"> -->
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
            <!-- </router-link> -->
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <!-- <router-link to="/articles/create"> -->
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <!-- </router-link> -->
            <!-- <router-link to="/articles/list"> -->
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
            <!-- </router-link> -->
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <!-- <router-link to="/categories/create"> -->
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <!-- </router-link> -->
            <!-- <router-link to="/categories/list"> -->
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
            <!-- </router-link> -->
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">广告位</template>
            <!-- <router-link to="/ads/create"> -->
            <el-menu-item index="/ads/create">新建广告</el-menu-item>
            <!-- </router-link> -->
            <!-- <router-link to="/ads/list"> -->
            <el-menu-item index="/ads/list">广告列表</el-menu-item>
            <!-- </router-link> -->
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>系统管理
          </template>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <!-- <router-link to="/admin_users/create"> -->
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <!-- </router-link> -->
            <!-- <router-link to="/admin_users/list"> -->
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
            <!-- </router-link> -->
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>
<style scoped>
.el-aside {
  color: #333;
}
a {
  text-decoration: none;
}
</style>