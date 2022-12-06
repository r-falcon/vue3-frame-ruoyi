<template>
  <div class="app-container">
    <p>接受params动态参数,刷新不丢失：</p>
    <p>id:{{ route.params?.id }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
