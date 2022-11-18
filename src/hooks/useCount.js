/**
 * 实现对count值的加、减、倍数和重置
 * @param {*} initValue
 * @returns
 */

const useCount = (initValue = 1) => {
  const count = ref(initValue);

  const increase = (delta) => {
    if (typeof delta !== "undefined") {
      count.value += delta;
    } else {
      count.value++;
    }
  };

  const multiple = computed(() => count.value * 2);

  const decrease = (delta) => {
    if (typeof delta !== "undefined") {
      count.value -= delta;
    } else {
      count.value--;
    }
  };

  const reset = () => (count.value = initValue);

  return {
    count,
    multiple,
    increase,
    decrease,
    reset,
  };
};

export default useCount;
