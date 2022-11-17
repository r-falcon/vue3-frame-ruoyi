<template>
  <div class="app-container">
    vue3 组件的生命周期
    <p>count:{{ count }}</p>
    <el-button @click="addCount">count++</el-button>
    <p>num:{{ num }}</p>
  </div>
</template>

<script>
import {
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from "@vue/runtime-core";
export default {
  setup() {
    console.log("执行setup函数");

    const count = ref(0);
    const num = ref(1);
    const addCount = () => count.value++;
    let time = null;
    time = setInterval(() => {
      num.value++;
    }, 1000);

    onBeforeMount(() => {
      console.log("onBeforeMount:组件挂载之前");
    });

    onMounted(() => {
      console.log("onMounted:DOM挂载之后");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate:DOM更新之前");
    });

    onUpdated(() => {
      console.log("onUpdated:DOM更新之后");
    });

    onActivated(() => {
      console.log("onActivated:keep-alive激活后");
    });

    onDeactivated(() => {
      console.log("onDeactivated:keep-alive停用后");
    });

    // errorCaptured 是组件内部钩子，可捕捉本组件与子孙组件抛出的错误，接收 error、vm、info 三个参数，return false 后可以阻止错误继续向上抛出。
    //  errorHandler 为全局钩子，使用 Vue.config.errorHandler 配置，接收参数与 errorCaptured 一致，2.6 后可捕捉 v-on 与 promise 链的错误，可用于统一错误处理与错误兜底。
    onErrorCaptured((err, vm, info) => {
      console.log("errorCaptured:捕获一个来自子孙组件的错误时调用");
    });

    onRenderTracked(({ key, target, type }) => {
      console.log("renderTracked:调试钩子，响应式依赖被收集时调用");
    });

    onRenderTriggered(({ key, target, type }) => {
      console.log("renderTriggered:调试钩子，响应式依赖被触发时调用");
    });

    onServerPrefetch(() => {
      console.log("onServerPrefetch:SSR only，组件实例在服务器上被渲染前调用");
    });

    // 在组件卸载之前，清空页面中的定时器和一些订阅消息
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount:组件卸载之前");
      console.log("清除time之前");
      clearInterval(time);
      console.log("清除time之后");
    });

    onUnmounted(() => {
      console.log("onUnmounted:组件卸载之后");
    });

    return {
      count,
      addCount,
      time,
      num,
    };
  },
};
</script>
