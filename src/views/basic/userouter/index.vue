<template>
  <div class="app-container">
    <div style="color: red">
      <h3>query VS params</h3>
      <p>query传参配置path，params传参配置name，且params中配置path无效</p>
      <p>query传参显示在地址栏，params传参不会</p>
      <p>query传参刷新页面数据不会消失，params传参刷新页面消失</p>
      <p>
        params可以使用动态参数("/path/:params")，动态参数会显示在地址栏中，且刷新页面数据不会消失
      </p>
      <p>name为路由中定义的name属性值，严格区分大小写</p>
      <p>路由跳转：前进-router.go(1);后退-router.go(-1);刷新-router.go(0)</p>
    </div>
    <p>不同类型的传参方式</p>
    <el-button type="primary" size="small" @click="TransByQuery"
      >通过query传参</el-button
    >
    <el-button type="primary" size="small" @click="TransByParams"
      >通过params传参</el-button
    >
    <el-button type="primary" size="small" @click="TransByDynamic"
      >动态传递参数</el-button
    >
  </div>
</template>

<script setup>
const queryParams = reactive({
  name: "falcon",
  age: 20,
  sex: "female",
});
const id = ref("20221206-happyending");

const router = useRouter();

const TransByQuery = () => {
  router.push({
    path: "/basic/querydemo",
    query: queryParams,
  });
};

const TransByParams = () => {
  router.push({
    name: "ParamsDemo",
    params: queryParams,
  });
};

const TransByDynamic = () => {
  router.push({
    name: "DynamicDemo",
    params: { id: id.value },
  });
};
</script>
