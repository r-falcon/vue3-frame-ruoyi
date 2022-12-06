<template>
  <p>
    子组件接受到的v-model参数：name,{{ name }},count,{{ count }},salary,{{
      salary
    }}
  </p>
  <el-button type="primary" size="small" @click="changeCount"
    >count++</el-button
  >
  <el-button type="primary" size="small" @click="changeSalary"
    >salary1000+</el-button
  >
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: () => "",
  },
  count: {
    type: Number,
    default: () => "",
  },
  salary: {
    type: Number,
    default: () => "",
  },
});

const emits = defineEmits(["update:count", "update:salary"]);
const changeCount = () => emits("update:count", props.count + 1);
const changeSalary = () => emits("update:salary", props.salary + 1000);
</script>
