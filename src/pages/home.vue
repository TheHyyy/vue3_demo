<template>
  <div>
    <!-- <h1>这是首页</h1> -->
    <TodoListVue></TodoListVue>

    <h1 @click="toggle">click</h1>
  </div>
</template>

<script setup>
import TodoListVue from "../components/TodoList.vue";
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
