<template>
  <div class="app-container">
    <div style="color: red">
      <p>v-bind的优先级：</p>
      <p>vue3 就近原则</p>
      <p>vue2 单独声明优先，并且重复定义会发出警告</p>
    </div>
    <input type="text" v-bind:disabled="false" :disabled="disabled" />
    <input type="text" :disabled="disabled" v-bind:disabled="false" />
  </div>
</template>

<script setup>
const disabled = ref(true);
</script>
