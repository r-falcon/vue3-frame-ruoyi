/**
 * 实时获取鼠标点击时的坐标
 * @param {*} initValue
 * @returns
 */

const usePoint = () => {
  const state = reactive({
    x: 0,
    y: 0,
  });

  function print(e) {
    state.x = e.pageX;
    state.y = e.pageY;
  }

  onBeforeMount(() => {
    window.addEventListener("click", print);
  });

  onMounted(() => {
    window.removeEventListener("click", print);
  });

  return state;
};

export default usePoint;
