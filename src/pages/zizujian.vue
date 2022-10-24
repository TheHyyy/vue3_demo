<template>
  <div>
    {{ xxx }}

    <slot>我是默认内容 </slot>
    <slot name="xxx">我是默认内容2 </slot>
  </div>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";

import { ref, onMounted, defineProps } from "vue";

let props = defineProps({
  xxx: { type: String, default: "demoProp1" },
});
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
<style>
/* .gaga-enter-to {
  opacity: 0.5;
} */
</style>
