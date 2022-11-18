<template>
  <div class="app-container">
    <div></div>
    <AsyncDemo />
  </div>
</template>

<script setup>
import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "./ErrorComponent.vue";

const time = (t, callback = () => {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, t);
  });
};

const AsyncDemo = defineAsyncComponent({
  // 要加载的组件
  // loader: () => import("./Demo1.vue"),
  loader: () => {
    return new Promise((resolve) => {
      (async function () {
        await time(3000);
        const res = await import("./Demo1.vue");
        resolve(res);
      })();
    });
  },
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 加载失败时使用组件
  errorComponent: ErrorComponent,
  // 加载延迟（在显示loadingComponent之前的延迟），默认200
  delay: 0,
  // 超时显示组件错误，默认永不超时
  timeout: 5000,
});
</script>
