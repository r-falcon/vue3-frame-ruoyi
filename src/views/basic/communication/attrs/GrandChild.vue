<template>
  <p>孙组件接受：name，{{ name }},age,{{ age }}</p>
  <el-button type="primary" size="small" @click="sub">count--</el-button>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: () => "",
  },
  age: {
    type: Number,
    default: () => 0,
  },
});

const emits = defineEmits(["sub"]);

const sub = () => emits("sub");
</script>
