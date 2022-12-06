<template>
  <p>孙组件接受：age,{{ user.age }}</p>
</template>

<script setup>
const user = inject("user");
</script>
