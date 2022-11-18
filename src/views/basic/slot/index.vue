<template>
  <div class="app-container">
    <p style="color: red">插槽：默认插槽、具名插槽、作用域插槽</p>
    <Son>
      <template #default><div>默认插槽内容</div> </template>

      <template #slotName> <div>具名插槽内容</div> </template>

      <template #propsSlot="scope">
        <div>
          作用域插槽内容 name:{{ scope.data.name }},age:{{ scope.data.age }}
        </div>
      </template>
    </Son>
  </div>
</template>

<script setup>
import Son from "./Son.vue";
</script>
