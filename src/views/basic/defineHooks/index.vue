<template>
  <div class="app-container">
    <div style="color: red">
      <p>自定义Hooks/可组合函数（mixin的替代方案）</p>
      <p>
        传统mixin的痛点：命名冲突；不清楚property来源；隐式的跨mixin交流；可用性有限
      </p>
      <p>将可复用的功能抽离为外部的js文件</p>
      <p>命名：约定用驼峰命名，且以“use”开头</p>
      <p>引用时将定义的属性和方法响应式地解构暴露出来</p>
      <p>
        vue3
        通过hooks或自定义hooks将模块功能分开写，避免vue2的碎片化，实现低内聚高耦合
      </p>
    </div>
    <p>count:{{ count }}</p>
    <p>multiple:{{ multiple }}</p>
    <el-button type="primary" @click="addCount">count++</el-button>
    <el-button type="primary" @click="subCount">count--</el-button>
    <el-button type="primary" @click="resetCount">reset</el-button>
  </div>
</template>

<script setup>
import useCount from "@/hooks/useCount";

const { count, multiple, increase, decreas, reset } = useCount(10);
const addCount = () => increase();
const subCount = () => decreas();
const resetCount = () => reset();
</script>
