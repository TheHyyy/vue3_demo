<template>
  <!-- <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in"> <component :is="Component" /> </transition>
    </router-view>
  </div> -->

  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <div><router-link to="/"> Home</router-link></div>
        <div><router-link to="/about">About</router-link></div>
      </el-aside>
      <el-container>
        <el-main> <router-view></router-view> </el-main>
      </el-container> </el-container
  ></el-container>
</template>

<script setup></script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
