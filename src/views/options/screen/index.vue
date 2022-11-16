<script setup>
import {
  Widget,
  LineChart,
  BarChart,
  PieChart,
  FunnelChart,
} from "./components";

// 画布实际宽高 1280*720、1920*1080
const canvasWidth = ref(1920);
const canvasHeight = ref(1080);
// 960*540、640*360
const widgetWidth = ref(960);
const widgetHeight = ref(540);

// 1.固定尺寸:宽高小于屏幕宽高则在屏幕中居中；适用于尺寸固定且在后期不会改变的可视化
const canvasLeft = ref(0);
const canvasTop = ref(0);
const fixedSize = () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  if (windowWidth > canvasWidth.value) {
    canvasLeft.value = (windowWidth - canvasWidth.value) / 2;
  }
  if (windowHeight > canvasHeight.value) {
    canvasTop.value = (windowHeight - canvasHeight.value) / 2;
  }
};

// 2.自适应宽度:宽度适应屏幕，高度不变。缺点：垂直方向上会出现滚动条
const originCanvasWidth = ref(canvasWidth.value);
const ratioWidth = ref(1);
const widthAuto = () => {
  let windowWidth = window.innerWidth;
  canvasWidth.value = windowWidth;
  ratioWidth.value = windowWidth / originCanvasWidth.value;
};

// 3.自适应屏幕。宽高都是自适应，刚好铺满整个屏幕,没有水平和垂直的溢出
// 保留原始画布的高度
const originCanvasHeight = ref(canvasHeight.value);
// 高度缩放比例
const ratioHeight = ref(1);
const screenAuto = () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  canvasWidth.value = windowWidth;
  canvasHeight.value = windowHeight;
  ratioWidth.value = windowWidth / originCanvasWidth.value;
  ratioHeight.value = windowHeight / originCanvasHeight.value;
};

// 4.整体等比缩放。通过css的transform属性来对容器canvas进行整体缩放，保持原比例，在屏幕中居中显示
let canvasStyle = reactive({
  transform: "scale(1,1)",
  transformOrigin: `left top`,
});
const equalScale = () => {
  // 当前窗口宽高比例
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windowRatio = windowWidth / windowHeight;

  // 画布原始宽高比例
  const canvasRatio = canvasWidth.value / canvasHeight.value;

  // 计算画布适应后的新宽高
  let newCanvasWidth = 0;
  let newCanvasHeight = 0;
  if (canvasRatio > windowRatio) {
    // 画布的宽高比大于屏幕的宽高比，画布宽度调整为屏幕的宽度
    newCanvasWidth = windowWidth;
    // 画布高度根据画布原比例进行缩放
    newCanvasHeight = windowWidth / canvasRatio;
  } else {
    // 画布的宽高比小于屏幕的宽高比，画布的宽度调整为屏幕的宽度
    newCanvasHeight = windowHeight;
    // 画布宽度根据画布原比例进行缩放
    newCanvasWidth = windowHeight * canvasRatio;
  }
  // 相当于画布原始宽高的缩放比例
  const scaleX = newCanvasWidth / canvasWidth.value;
  const scaleY = newCanvasHeight / canvasHeight.value;
  // 居中
  const translateX = (windowWidth - newCanvasWidth) / 2 / scaleX;
  const translateY = (windowHeight - newCanvasHeight) / 2 / scaleY;
  canvasStyle.transform = `scale(${scaleX}, ${scaleY}) translate(${translateX}px, ${translateY}px)`;
};

// 复位
const reset = () => {
  canvasWidth.value = 1920;
  canvasHeight.value = 1080;
  canvasLeft.value = 0;
  canvasTop.value = 0;
  originCanvasWidth.value = canvasWidth.value;
  originCanvasHeight.value = canvasHeight.value;
  canvasStyle.transform = "scale(1,1)";
  canvasStyle.transformOrigin = `left top`;
  ratioWidth.value = 1;
  ratioHeight.value = 1;
};

// 当前类型
const currentType = ref("fixedSize");
const fit = () => {
  reset();
  switch (currentType.value) {
    case "fixedSize":
      fixedSize();
      break;
    case "widthAuto":
      widthAuto();
      break;
    case "screenAuto":
      screenAuto();
      break;
    case "equalScale":
      equalScale();
      break;
    default:
      break;
  }
};

watchEffect(() => {
  fit();
});

window.addEventListener("resize", () => {
  fit();
});
let canvasBoxOverflowStyle = computed(() => {
  switch (currentType.value) {
    case "fixedSize":
      return { overflow: "auto" };
    case "widthAuto":
      return { overflow: "hidden" };
    default:
      return { overflow: "hidden" };
  }
});
</script>

<template>
  <div class="canvasBox" :style="canvasBoxOverflowStyle">
    <div
      class="canvas"
      :style="{
        width: canvasWidth + 'px',
        height: canvasHeight + 'px',
        left: canvasLeft + 'px',
        top: canvasTop + 'px',
        ...canvasStyle,
      }"
    >
      <Widget
        :width="widgetWidth"
        :height="widgetHeight"
        :left="0"
        :top="0"
        :ratioWidth="ratioWidth"
        :ratioHeight="ratioHeight"
        :type="currentType"
      >
        <LineChart />
      </Widget>

      <Widget
        :width="widgetWidth"
        :height="widgetHeight"
        :left="widgetWidth"
        :top="0"
        :ratioWidth="ratioWidth"
        :ratioHeight="ratioHeight"
        :type="currentType"
      >
        <BarChart />
      </Widget>

      <Widget
        :width="widgetWidth"
        :height="widgetHeight"
        :left="0"
        :top="widgetHeight"
        :ratioWidth="ratioWidth"
        :ratioHeight="ratioHeight"
        :type="currentType"
      >
        <PieChart />
      </Widget>

      <Widget
        :width="widgetWidth"
        :height="widgetHeight"
        :left="widgetWidth"
        :top="widgetHeight"
        :ratioWidth="ratioWidth"
        :ratioHeight="ratioHeight"
        :type="currentType"
      >
        <FunnelChart />
      </Widget>
    </div>
  </div>

  <div class="typeList">
    <div
      class="typeItem"
      @click="currentType = 'fixedSize'"
      :class="{ active: currentType == 'fixedSize' }"
    >
      固定尺寸
    </div>

    <div
      class="typeItem"
      @click="currentType = 'widthAuto'"
      :class="{ active: currentType === 'widthAuto' }"
    >
      自适应宽度
    </div>

    <div
      class="typeItem"
      @click="currentType = 'screenAuto'"
      :class="{ active: currentType === 'screenAuto' }"
    >
      自适应屏幕
    </div>

    <div
      class="typeItem"
      @click="currentType = 'equalScale'"
      :class="{ active: currentType === 'equalScale' }"
    >
      整体等比例缩放
    </div>
  </div>
</template>

<style scoped>
.canvasBox {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.canvas {
  position: absolute;
}

.typeList {
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  display: flex;
  height: 30px;
  border-radius: 5px;
}

.typeItem {
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #73c0de;
  border-right: none;
  white-space: nowrap;
  color: #73c0de;
}

.typeItem.active {
  background-color: #73c0de;
  color: #fff;
}

.typeItem:last-of-type {
  border-right: 1px solid #73c0de;
}
</style>
