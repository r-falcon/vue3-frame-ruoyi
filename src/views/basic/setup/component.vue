<template>
  <div>
    <!-- 
    1.setup函数为使用composition api提供了统一的入口
    2.setup函数在beforeCreate、created钩子之前执行，vue3中废除了这两个钩子;因为此时vue对象还没有建立，所以vue3无法访问this，是undefined（如何访问this？vue中的getCurrentInstance方法返回了proxy和ctx）
    3.setup函数的参数:props[父组件传递过来的值],context{attrs[没有被props定义的属性],slots[插槽],emit[触发事件]}
    4.【注】子组件在接受attrs时：只有一个根元素的情况下，默认绑定到根元素；有两个根元素的情况下，默认都不绑定，需要使用在对应的根元素上添加v-bind="$attrs"
    5.子组件通过expose向父组件暴露方法或属性，父组件通过在子组件定义ref调用子组件的方法或属性
    6.setup函数中return的内容，可以在模板中直接使用，包括变量和方法
    7.setup函数中的数据不具备响应式，使其具有响应式，使用ref和reactive等定义使用
   -->
    <!-- <div>{{ msg }}-只有一个根元素，默认绑定</div>
    <div v-bind="$attrs">{{ msg }}有两个以上根元素,绑定所有attrs</div>
    <div v-bind="$attrs.style">{{ msg }}有两个以上根元素,绑定attrs特定属性</div> -->
    <p>这是子组件</p>
    <p>接受的信息：msg:{{ msg }},count:{{ $attrs.count }}</p>
    <el-button type="primary" @click="handleClick">change msg</el-button>
    <el-button @click="$attrs.onAddCount()">add count</el-button>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "setup函数的使用",
      num: 20,
    };
  },
  props: { msg: String },
  emits: ["changeMsg"],
  setup(props, context) {
    // this 为 undefined
    console.log("执行setup钩子", 1, this);
    const { proxy } = getCurrentInstance();
    console.log(proxy);
    console.log(props); //msg
    console.log(context.emit); //changeMsg
    const handleClick = () => {
      context.emit("changeMsg", "battle for hot");
    };
    console.log(context.attrs);
    console.log(context.slots.default());

    let total = ref(10);
    let subTotal = () => total.value--;
    context.expose({
      total,
      subTotal,
    });

    return {
      handleClick,
      total,
      subTotal,
    };
  },
  beforeCreate() {
    console.log("执行beforeCreate钩子", 2);
  },
  created() {
    console.log("执行created钩子", 3);
  },
};
</script>
