<template>
  <div>
    <!-- <h1>这是首页</h1> -->
    <!-- <TodoListVue></TodoListVue>

    <h1 @click="toggle">click</h1> -->
    <Rate v-model="score"></Rate>
  </div>
</template>

<script setup>
import TodoListVue from "../components/TodoList.vue";
import Rate from "../components/Rate1.vue";

import { useFullscreen } from "@vueuse/core";
import { ref } from "vue";
const { isFullscreen, enter, exit, toggle } = useFullscreen();

let score = ref(3.5);
</script>
