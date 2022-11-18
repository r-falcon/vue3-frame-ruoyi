<template>
  <div class="app-container">
    <div style="color: red">
      <p>不建议 v-for 与 v-if 一起使用</p>
      <p>
        【vue2 v-for 高于
        v-if】:过滤列表中的项目，computed;条件判断隐藏列表，v-if 提前，包裹
        v-for 循环
      </p>
      <p>【vue3 v-if 高于 v-for】</p>
    </div>

    <div v-if="flag">
      <div v-for="item in dataList" :key="item.id">
        {{ item.id }} - {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
const flag = ref(true);
const dataList = reactive([
  { id: 1, label: "list-01" },
  { id: 2, label: "list-02" },
  { id: 3, label: "list-03" },
  { id: 4, label: "list-04" },
  { id: 5, label: "list-05" },
]);
</script>
