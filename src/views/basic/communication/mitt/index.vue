<template>
  <div style="color: red">
    <h3>vue3兄弟之间的通信：</h3>
    <p>
      vue3中被废除的api：$on\$once\$off[event hub
      中，emit发送，on接受，off关闭]，不再支持Event Bus；$children,$listeners
    </p>
    <p>vue3中没有了EventBus跨组件通信，选用替代方案mitt.js,原理还是EventBus</p>
  </div>
  <Brother1 />
  <Brother2 />
</template>

<script setup>
import Brother1 from "./Brother1.vue";
import Brother2 from "./Brother2.vue";
</script>
