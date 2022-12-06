<template>
  <div style="color: red">
    <h3>provide/inject:</h3>
    <p>祖先向下级传递参数，无论层级多深，都可以传递</p>
  </div>

  <Child />
</template>

<script setup>
import Child from "./Child.vue";

const user = reactive({
  name: "falcon",
  age: 20,
});
provide("user", user);
</script>
