<template>
  <div style="color: red">
    <p>vue3Mixin混入</p>
    <p>vue3中建议使用可组合函数完成组件间的通信和复用</p>
  </div>
  <p>name:{{ name }},count:{{ count }}</p>
  <el-button @click="addCount" type="primary" size="small">count++</el-button>
  <el-button @click="subCount" type="primary" size="small">count--</el-button>
</template>

<script setup>
import mixins from "./mixin";
const { count, name, addCount, subCount } = mixins;
</script>
