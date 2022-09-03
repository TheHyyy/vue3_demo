<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
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
