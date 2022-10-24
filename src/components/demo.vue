<script setup>
import { ref, onMounted, defineProps } from "vue";

let props = defineProps({
  demoProp1: { type: String, default: "demoProp1" },
});
const counter = ref(props.demoProp1);
// 响应式状态
const count = ref(0);
const attributeName = ref("我是额外name");

// 用来修改状态、触发更新的函数
function increment() {
  count.value++;
  console.log("🚀 ~ file: demo.vue ~ line 10 ~ increment ~ ount.value", count.value);
}

// 生命周期钩子
onMounted(() => {
  console.log("🚀 ~ file: demo.vue ~ line 9 ~ demoProp1", props.demoProp1);
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>
