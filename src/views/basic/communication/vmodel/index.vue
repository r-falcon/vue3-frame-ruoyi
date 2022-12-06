<template>
  <div style="color: red">
    <h3>v-model:</h3>
    <p>
      vue2中传递value属性，监听input事件；vue3中传递modelValue属性，监听update:modelValue事件
    </p>
    <p>
      .sync实现父子组件数据之间的双向绑定，原理是update:value；vue2中v-model只能有一个，.sync可以有多个;vue3中取消了.sync修饰，v-model和.sync合并，所以可以多次出现
    </p>
  </div>

  <Child v-model:name="name" v-model:count="count" v-model:salary="salary" />
</template>

<script setup>
import Child from "./Child.vue";

const name = ref("falcon");
const count = ref(0);
const salary = ref(3000);
</script>
