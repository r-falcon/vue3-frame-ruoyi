<template>
  <div style="color: red">
    <h3>ref/expose:</h3>
    <p>
      通过ref获取指定的DOM元素或组件，结合defineExpose暴露出来的属性和方法实现通信
    </p>
  </div>

  <div>title:{{ title }}</div>
  <Child ref="child" />
  <el-button type="primary" size="small" @click="add">count++</el-button>
  <el-button type="primary" size="small" @click="sub">count--</el-button>
  <el-button type="primary" size="small" @click="receive"
    >receive msg</el-button
  >
</template>

<script setup>
import Child from "./Child.vue";

const child = ref(null);
const title = ref("暂无数据");
const add = () => child.value.add();
const sub = () => child.value.sub();
const receive = () => (title.value = child.value.msg);
</script>
