<template>
  <div class="app-container">
    <p style="color: red">
      ref、reactive、toRef、toRefs、shallowReactive、isRef、unRef、readonly
    </p>
    <el-divider />

    <h3>ref</h3>
    <div style="color: red">
      <p>基本类型生成RefImpl实例；复合类型生成Proxy实例</p>
      <p>
        基本类型通过es5的Object.defineProperty()劫持；复合类型使用es6的Proxy代理整个对象拦截各种变化
      </p>
      <p>js中修改通过.value调用，html中渲染直接使用</p>
    </div>
    <p>count:{{ count }},name:{{ user.name }},age:{{ user.age }}</p>
    <el-button type="primary" @click="addCount">count++</el-button>
    <el-button type="primary" @click="addAge">age++</el-button>
    <el-divider />

    <h3>reactive</h3>
    <div style="color: red">
      <p>reactive 只能定义对象类型的数据，通过Proxy监听变化</p>
      <p>shallowReactive 生成非递归响应数据，只监听第一层数据的变化</p>
    </div>
    <p>No:{{ stu.No }},major:{{ stu.major }},score:{{ stu.score }}</p>
    <el-button type="primary" @click="addScore">score++</el-button>
    <el-divider />

    <h3>toRef</h3>
    <div style="color: red">
      <p>toRef 单个变量变成响应式</p>
      <p>unref 语法糖，参数是ref返回其value值，不是则返回参数本身</p>
    </div>
    <p>sort:{{ sort }}</p>
    <el-button type="“primary”" @click="addSort">sort++</el-button>
    <el-divider />

    <h3>toRefs</h3>
    <p style="color: red">toRefs 多个变量变成响应式</p>
    <p>rest:{{ rest }},price:{{ price }},title:{{ title }}</p>
    <el-button type="primary" @click="addRest">rest++</el-button>
    <el-divider />

    <h3>readonly</h3>
    <div style="color: red">
      <p>readonly 创建一个只读对象（递归只读）</p>
      <p>isReadonly 判断是否是readonly对象</p>
      <p>shallowReadonly 只对最外层响应式只读，深层次不转换</p>
    </div>
    <p>status:{{ status }},roleId:{{ info.role.roleId }}</p>
    <el-button type="primary" @click="changeStatus">status</el-button>
    <el-button type="primary" @click="changeRole">roleId</el-button>
  </div>
</template>

<script setup>
import { shallowReadonly } from "@vue/reactivity";
import { toRefs } from "@vueuse/core";

/**
 * ref
 *    基本类型生成RefImpl实例；复合类型生成Proxy实例
 *    基本类型通过es5的Object.defineProperty()劫持；复合类型使用es6的Proxy代理整个对象拦截各种变化
 *    js中修改通过.value调用，html中渲染直接使用
 */
const count = ref(0);
const user = ref({
  name: "falcon",
  age: 20,
});
const addCount = () => count.value++;
const addAge = () => user.value.age++;

/**
 * reactive
 *    只能定义对象类型的数据，通过Proxy监听变化
 * shallowReactive
 *    生成非递归响应数据，只监听第一层数据的变化
 */
const stu = reactive({
  No: "20211615",
  major: "Chinese",
  score: 80,
});
const addScore = () => stu.score++;

/**
 * toRef()、toRefs()、unref()
 *    toRef() 单个转化为响应式
 *    toRefs() 多个转化为响应式
 *    unref() 是 val = isRef(val) ? val.value : val 的语法糖；如果参数是一个 ref 则返回它的 value，否则返回参数本身
 */
const sortObj = reactive({
  sort: 121,
});
let sort = toRef(sortObj, "sort");
const addSort = () => sortObj.sort++;

const productObj = reactive({
  rest: 20171819,
  price: "￥209",
  title: "商品名称",
});
const { rest, price, title } = { ...toRefs(productObj) };
const addRest = () => productObj.rest++;

/**
 * readonly 创建一个只读对象（递归只读）
 * isReadonly 判断是否是readonly对象
 * shallowReadonly 只对最外层响应式只读，深层次不转换
 */
let status = readonly(true);
let info = reactive({
  username: "falcon",
  password: "123456",
  role: {
    roleId: 123,
    roleName: "系统管理员",
  },
});
info = shallowReadonly(info);
const changeStatus = () => (status = !status);
const changeRole = () => {
  info.role.roleId++;
};
</script>
