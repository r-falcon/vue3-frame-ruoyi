const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doublePlusOne: () => this.doubleCount + 1,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// 第二种定义方式
// const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

export default useCounterStore;
