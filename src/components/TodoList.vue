<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="addTodo">添加哦</button>
    <button @click="clear">清除已做</button>
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据...</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
      allDone：{{ allDone }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMouse } from "../utils/mouse";
let { x, y } = useMouse();
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();

function useTodos() {
  let title = ref("");
  let todos = ref([{ title: "哥们是来学习Vue3的", done: false }]);

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }
  function clear() {
    todos.value = todos.value.filter((item) => !item.done);
  }

  let all = computed(() => todos.value.length);
  let active = computed(() => todos.value.filter((item) => item.done).length);
  let allDone = computed({
    get: function () {
      return active.value === all.value;
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value;
      });
    },
  });
  return { title, todos, addTodo, clear, active, all, allDone };
}
</script>

<style scoped>
.done {
  color: #eee;
}
</style>
