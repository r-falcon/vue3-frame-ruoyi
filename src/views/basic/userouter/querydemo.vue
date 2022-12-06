<template>
  <div class="app-container">
    <p>接受query参数,刷新不丢失：</p>
    <p>name:{{ route.query?.name }}</p>
    <p>age:{{ route.query?.age }}</p>
    <p>sex:{{ route.query?.sex }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
