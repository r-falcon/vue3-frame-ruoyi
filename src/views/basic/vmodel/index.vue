<template>
  <div class="app-container">
    <div style="color: red">
      <p>
        vue2中的.sync修饰符可以实现子组件与父组件的双向绑定；并且可以实现子组件同步修改父组件的值
      </p>
      <p>vue3中去掉.sync修饰符，加入到v-model中</p>
    </div>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <Son v-model:name="name" v-model:age="age" />
  </div>
</template>

<script setup>
import Son from "./Son.vue";

const user = reactive({
  name: "falcon",
  age: 20,
});
const { name, age } = toRefs(user);
</script>
