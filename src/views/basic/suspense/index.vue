<template>
  <div class="app-container">
    <div style="color: red">
      <p>允许程序在等待一些异步组件时加载一些后备内容</p>
      <p>
        在异步加载请求网络数据的时候，使用suspense组件，可以很好的实现loading效果
      </p>
      <p>#default,初始化模板组件；#fallback，异步请求中处理的UI</p>
    </div>

    <Suspense>
      <template #default>
        <SyncApi />
      </template>
      <template #fallback>
        <h3 style="color: blue">数据加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import SyncApi from "./SyncApi.vue";
</script>
