<template>
  <div class="app-container">
    <div style="color: red">
      <p>默认只改变数据的值，如果想改变后的值具有响应性，利用其set()方法</p>
      <p>vue3.x中移除过滤器filter，建议使用computed</p>
      <p>回调函数必须return，结果是计算结果</p>
      <p>计算属性依赖的数据项发生变化时，重新计算，具有缓存性</p>
      <p>不能进行异步操作</p>
    </div>
    <div>firstName: <el-input v-model="firstName" /></div>
    <div>lastName: <el-input v-model="lastName" /></div>
    <div>fullName: <el-input v-model="fullName" /></div>
  </div>
</template>

<script setup>
const names = reactive({
  firstName: "",
  lastName: "",
  // fullName: "",
});

// 通过此种方式定义的fullName,想要修改的时候后台警告：Write operation failed: computed value is readonly；想要修改fullName，通过set()方法
// const fullName = computed(() => {
//   return names.firstName + " " + names.lastName;
// });

// names.fullName = computed({
//   get() {
//     return names.firstName + " " + names.lastName;
//   },
//   set(value) {
//     let nameList = value.split(" ");
//     names.firstName = nameList[0];
//     names.lastName = nameList[1];
//   },
// });

const fullName = computed({
  get() {
    return names.firstName + " " + names.lastName;
  },
  set(value) {
    let nameList = value.split(" ");
    names.firstName = nameList[0];
    names.lastName = nameList[1];
  },
});

// const { firstName, lastName, fullName } = toRefs(names);
const { firstName, lastName } = toRefs(names);
</script>
