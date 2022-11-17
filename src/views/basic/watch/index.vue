<template>
  <div class="app-container">
    <div style="color: red">
      监听ref定义的变量(一个属性、多个属性、监听对象[监听整个对象需要开启deep:true，且只能监听到变化后的值，监听不到变化之前的值；可以选择监听对象的一个或几个属性])
    </div>
    <p>
      count:{{ count }},num:{{ num }},current0:{{
        refWatchObj.current0
      }},current1:{{ refWatchObj.level.current1 }},current2:{{
        refWatchObj.level.inner.current2
      }},arr:{{ refWatchObj.level.inner.arr }}
    </p>
    <el-button type="primary" @click="addCount">count++</el-button>
    <el-button type="primary" @click="addNum">num++</el-button>
    <el-button type="primary" @click="refChange">change obj</el-button>
    <el-divider />

    <div style="color: red">
      监听reactive定义的变量(一个属性、多个属性、监听对象[监听整个对象需要开启deep:true，且只能监听到变化后的值，监听不到变化之前的值；可以选择监听对象的一个或几个属性])
    </div>
    <p>age:{{ user.age }},total:{{ user.total }},subInfo:{{ user.subInfo }}</p>
    <el-button type="primary" @click="addAge">age++</el-button>
    <el-button type="primary" @click="addTotal">total++</el-button>
    <el-button type="primary" @click="reactiveChange">change obj</el-button>
    <el-divider />

    <div style="color: red">
      <p>reactive 定义的响应式数据强制开启了深度监听，无法正确获取oldValue</p>
      <p>reactive 定义的响应式数据中某个属性不会开启深度监听，需要手动开启</p>
      <p>
        数据量非常大的时候，可以借助shallowRef、shallowReactive实现非递归监听
      </p>
    </div>
    <el-divider />

    <div style="color: red">
      <p>watch vs watchEffect</p>
      <p>1.watch需要传递侦听源，watchEffect自动收集数据源作为依赖</p>
      <p>
        2.watch能监听到属性变化前后的值，watchEffect只能监听到属性变化后的值
      </p>
      <p>
        3.watch默认是惰性的，属性值变化时执行，watchEffect默认执行一次,自动收集依赖变更时执行一次
      </p>
      <p>4.watchEffect无法完成监听整个对象，但是可以监听对象的某个属性</p>
      <p>
        5.watchEffect副作用：DOM挂载或者更新之前会触发，涉及到DOM操作或ref获取，放到mounted周期[此时DOM已经挂载完成]
      </p>
    </div>
    <el-divider />

    <div style="color: red">
      <p>停止监听</p>
      <p>组件创建的watch侦听，默认会在组件销毁时自动停止</p>
      <p>如果想提前终止侦听，可以定义终止函数并执行</p>
    </div>
  </div>
</template>

<script setup>
const count = ref(0);
const addCount = () => count.value++;
const num = ref(0);
const addNum = () => num.value++;
const refWatchObj = ref({
  current0: 1,
  level: {
    current1: 1,
    inner: {
      current2: 1,
      arr: [1, 2, 3],
    },
  },
});
const refChange = () => {
  refWatchObj.value.current0++;
  refWatchObj.value.level.current1++;
  refWatchObj.value.level.inner.current2++;
  refWatchObj.value.level.inner.arr.push(
    refWatchObj.value.level.inner.arr.length + 1
  );
};

// ref-监听一个属性
watch(count, (newValue, oldValue) => {
  console.log("ref监听一个值：count", newValue, oldValue);
});
// ref-监听多个属性
watch([count, num], (newValue, oldValue) => {
  console.log("ref监听多个值：[count,num]", newValue, oldValue);
});
// ref-监听对象
// 监听整个对象监听不到变化，但监听具体的属性值(一个或多个)可以
// immediate:true 监听立即执行；deep:true 开启深度监听
// watch(
//   () => refWatchObj,
//   (newValue, oldValue) => {
//     // 监听不到，不起作用
//     console.log("ref监听对象", newValue, oldValue);
//   }
// );
watch(
  () => refWatchObj.value.current0,
  (newValue, oldValue) => {
    console.log("ref监听对象的某个属性值：", newValue, oldValue);
  }
);
watch(
  [
    () => refWatchObj.value.current0,
    () => refWatchObj.value.level.current1,
    () => refWatchObj.value.level.inner.current2,
    () => refWatchObj.value.level.inner.arr,
  ],
  (newValue, oldValue) => {
    console.log("ref监听对象的某几个属性值：", newValue, oldValue);
  }
  // {
  //   immediate: true,
  //   deep: true,
  // }
);
watch(
  () => refWatchObj.value.level.inner,
  (newValue, oldValue) => {
    // 此时视图发生变化，但是却监听不到对象值的变化
    console.log("ref监听整个对象的变化：", newValue, oldValue);
  },
  {
    // 开启 deep:true 后可以监听到对象值的变化，但是newValue和oldValue一样，只能监听到变化后的值，变化之前的值监听不到
    deep: true,
  }
);

const user = reactive({
  name: "falcon",
  age: 20,
  total: 10,
  subInfo: {
    nickName: "eileen",
    type: 2,
    arr: [1, 2],
  },
});
const addAge = () => user.age++;
const addTotal = () => user.total++;
const reactiveChange = () => {
  user.subInfo.type++;
  user.subInfo.arr.push(user.subInfo.arr.length + 1);
};

// reactive-监听一个属性
watch(
  () => user.age,
  (newValue, oldValue) => {
    console.log("reactive监听一个值：", newValue, oldValue);
  }
);
// reactive-监听多个属性
watch([() => user.age, () => user.total], (newValue, oldValue) => {
  console.log("reactive监听多个值：", newValue, oldValue);
});
// reactive-监听属性对象/定义的整个对象
watch(
  () => user.subInfo,
  (newValue, oldValue) => {
    // 此时视图发生变化，但是却监听不到对象值的变化
    console.log("reactive监听对象的变化", newValue, oldValue);
  },
  {
    // 开启 deep:true 后可以监听到对象值的变化，但是newValue和oldValue一样，只能监听到变化后的值，变化之前的值监听不到
    deep: true,
  }
);

watchEffect(() => {
  console.log("watchEffect：");
  console.log(count.value);
  console.log(num.value);
  console.log(refWatchObj.value.current0);
  console.log(refWatchObj.value.level.current1);
  console.log(refWatchObj.value.level.inner.current2);
  console.log(user.age);
  console.log(user.subInfo.type);
  // 监听不到这些对象的变化
  // console.log(refWatchObj.value);
  // console.log(user);
  // console.log(user.subInfo);
});

// 停止监听
// const stopWatch = watch(
//   () => job.content.pencil,
//   (newValue, oldValue) => {
//     // 过3s后便不再进行监听
//     console.log("监听属性值变化，3s有效", newValue, oldValue);
//   },
//   { deep: true }
// );
// setTimeout(() => {
//   stopWatch();
// }, 3000);
// const stopWatchEffect = watchEffect(() => {
//   /*... */
// });
// setTimeout(() => {
//   stopWatchEffect();
// }, 3000);
</script>
