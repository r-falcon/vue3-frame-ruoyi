<template>
  <div style="color: red">
    <h3>attrs:</h3>
    <p>
      传递属性或方法给子组件下级组件，传递子组件中没有被props定义的属性，传递子组件中没有被emits定义的方法
    </p>
  </div>

  <Child :count="count" :name="name" :age="age" @add="add" @sub="sub" />
</template>

<script setup>
import Child from "./Child.vue";

const count = ref(0);
const user = reactive({
  name: "falcon",
  age: 20,
});

const add = () => count.value++;
const sub = () => count.value--;

const { name, age } = toRefs(user);
</script>
