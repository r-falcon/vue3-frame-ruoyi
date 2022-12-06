<template>
  <div class="app-container">
    <p>接受params参数,刷新丢失：</p>
    <p>name:{{ route.params?.name }}</p>
    <p>age:{{ route.params?.age }}</p>
    <p>sex:{{ route.params?.sex }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
