<template>
  <div>
    <!-- 默认 -->
    <slot />
    <!-- 具名 -->
    <slot name="slotName" />
    <!-- 作用域 -->
    <slot :data="user" name="propsSlot" />
  </div>
</template>

<script setup>
const user = reactive({
  name: "falcon",
  age: 20,
});
</script>
