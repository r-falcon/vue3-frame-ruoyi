<template>
  <div class="app-container">
    <p style="color: red">
      自定义指令：全局自定义(main.js)、局部自定义(自身组件)
    </p>
    <input type="text" v-focus />
  </div>
</template>

<script setup>
const vFocus = {
  mounted: (el) => el.focus(),
};
</script>
