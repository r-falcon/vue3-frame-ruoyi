<template>
  <div class="app-container">
    <PropsEmits />
    <el-divider />
    <Attrs />
    <el-divider />
    <Vmodel />
    <el-divider />
    <RefExpose />
    <el-divider />
    <ProvideInject />
    <el-divider />
    <Mixin />
    <el-divider />
    <Mitt />
    <el-divider />
    <div style="color: red">
      <p>状态管理库pinia，详细使用见本页中样例</p>
    </div>
  </div>
</template>

<script setup>
import PropsEmits from "./propsemits";
import Attrs from "./attrs";
import Vmodel from "./vmodel";
import RefExpose from "./refexpose";
import ProvideInject from "./provideinject";
import Mixin from "./mixin";
import Mitt from "./mitt";
</script>
