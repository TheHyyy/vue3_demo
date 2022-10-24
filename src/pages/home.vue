<template>
  <div>
    ssssasdasd
    <zizujian xxx="父组件来的">
      真是日了狗了
      <template v-slot:xxx>是是是</template>
    </zizujian>
  </div>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";
import { onMounted, ref, getCurrentInstance } from "vue";
import zizujian from "./zizujian.vue";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
const { proxy } = getCurrentInstance(); //来获取全局 globalProperties 中配置的信息
onMounted: {
  proxy.$axios
    .get("url")
    .then(function (res) {
      alert(res);
    })
    .catch(function (err) {
      console.log("🚀 ~ ", err);
    });
}
</script>
<style>
/* .gaga-enter-to {
  opacity: 0.5;
} */
</style>
