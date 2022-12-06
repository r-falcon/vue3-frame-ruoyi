<template>
  <p>子组件接收：{{ count }}</p>
  <el-button type="primary" size="small" @click="add">count++</el-button>
  <GrandChild v-bind="$attrs" />
</template>

<script setup>
import GrandChild from "./GrandChild.vue";

defineProps({
  count: {
    type: Number,
    default: () => 0,
  },
});

const emits = defineEmits(["add"]);

const add = () => emits("add");
</script>
