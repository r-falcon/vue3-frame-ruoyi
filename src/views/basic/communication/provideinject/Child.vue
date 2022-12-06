<template>
  <p>子组件接受：name,{{ user.name }}</p>
  <GrandChild />
</template>

<script setup>
import GrandChild from "./GrandChild.vue";

const user = inject("user");
</script>
