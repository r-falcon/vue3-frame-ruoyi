<template>
  <p>接受到的参数为：name,{{ name }},age,{{ age }},count,{{ count }}</p>
  <el-button type="primary" size="small" @click="add">count++</el-button>
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
  count: {
    type: Number,
    default: () => 0,
  },
});

const emits = defineEmits(["add", "sub"]);

const add = () => emits("add");
const sub = () => emits("sub");
</script>
