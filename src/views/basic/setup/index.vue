<template>
  <div class="app-container">
    <p>num:{{ totalValue }}</p>
    <el-button @click="handleSub">num--</el-button>
    <Com
      ref="com"
      :msg="msg"
      :count="count"
      @changeMsg="changeMsg"
      @addCount="addCount"
    >
      <div>这是子组件插槽部分的内容</div>
    </Com>
  </div>
</template>

<script>
import Com from "./component.vue";

export default {
  components: {
    Com,
  },
  setup() {
    const msg = ref("hello");
    const count = ref(0);
    const changeMsg = (value) => {
      msg.value = value;
    };
    const addCount = () => count.value++;
    const com = ref(null);
    // console.log(com.value); 【注】这里直接获取不到com.value的值，点击处理函数中可以正确获取
    const totalValue = ref(0);
    const handleSub = () => {
      totalValue.value = com.value.total;
      com.value.subTotal();
      console.log(com.value.total);
      console.log(com.value.subTotal);
    };

    return {
      msg,
      count,
      changeMsg,
      addCount,
      com,
      totalValue,
      handleSub,
    };
  },
};
</script>
