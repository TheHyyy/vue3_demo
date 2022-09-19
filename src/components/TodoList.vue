<template>
  <div style="height: 1000px">
    <span class="dustbin"> 🗑 </span>
    <div class="animate-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="animate" v-show="animate.show">📋</div>
      </transition>
    </div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="addTodo">添加哦</button>
    <button @click="clear">清除已做</button>
    <ul>
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }"> {{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, index)"> ❌ </span>
        </li>
      </transition-group>
    </ul>
    <div style="500px;">
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
    </div>
    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">哥，你啥也没输入！</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed, reactive } from "vue";
import { useMouse } from "../utils/mouse";
let { x, y } = useMouse();
let {
  title,
  todos,
  addTodo,
  clear,
  active,
  all,
  allDone,
  showModal,
  removeTodo,
  animate,
  beforeEnter,
  enter,
  afterEnter,
} = useTodos();

function useStorage(name, value = []) {
  let data = ref(JSON.parse(localStorage.getItem(name) || value));
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}

function useTodos() {
  let title = ref("");
  let todos = useStorage("storageTodos");
  let showModal = ref(false);
  function addTodo() {
    if (!title.value) {
      console.log("1");
      showModal.value = true;
      setTimeout(() => {
        showModal.value = false;
      }, 1500);
      return;
    }
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }

  function clear() {
    todos.value = todos.value.filter((item) => !item.done);
  }
  let animate = reactive({ show: false, el: null });
  function beforeEnter(el) {
    let dom = animate.el;
    let rect = dom.getBoundingClientRect();
    let x = window.innerWidth - rect.left - 60;
    let y = rect.top - 10;
    el.style.transform = `translate(-${x}px, ${y}px)`;
  }
  function enter(el, done) {
    document.body.offsetHeight;
    el.style.transform = `translate(0,0)`;
    el.addEventListener("transitionend", done);
  }
  function afterEnter(el) {
    animate.show = false;
    el.style.display = "none";
  }
  function removeTodo(e, i) {
    animate.el = e.target;
    animate.show = true;
    todos.value.splice(i, 1);
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
  return {
    title,
    todos,
    addTodo,
    clear,
    active,
    all,
    allDone,
    showModal,
    removeTodo,
    animate,
    beforeEnter,
    enter,
    afterEnter,
  };
}
</script>

<style scoped>
.done {
  color: #eee;
}
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}
.dustbin {
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>
