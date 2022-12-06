<template>
  <p>子组件：count,{{ count }}</p>
</template>

<script setup>
const count = ref(0);
const msg = "expose message";
const add = () => count.value++;
const sub = () => count.value--;

defineExpose({
  msg,
  add,
  sub,
});
</script>
