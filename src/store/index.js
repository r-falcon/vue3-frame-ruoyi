const store = createPinia();

// 全局监听pinia实例上所有store的变化
watch(
  store.state,
  (state) => {
    console.log("pinia实例上的store发生变化");
  },
  { deep: true }
);

export default store;
