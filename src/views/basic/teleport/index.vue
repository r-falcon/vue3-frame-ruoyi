<template>
  <div class="app-container">
    <p style="color: red">
      Teleport，瞬移组件，能将我们的元素移动到DOM中vue
      app之外的其他位置,(有时用于页面需要弹框且弹框不影响布局的情况，相对于body进行定位)
    </p>
    <el-button type="primary" @click="showToast">打开弹框</el-button>
  </div>
  <teleport to="body">
    <div v-if="visible" class="modal_class">
      A man who has not climbed the granted wall is not a true man
      <el-button
        style="width: 50%; margin-top: 20px"
        type="primary"
        @click="closeToast"
        >关闭弹框</el-button
      >
    </div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const showToast = () => {
  visible.value = true;
};
const closeToast = () => {
  visible.value = false;
};
</script>

<style scoped>
.modal_class {
  position: absolute;
  width: 300px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 30px;
}
</style>
