<template>
  <p>子组件</p>
  <input type="text" :value="name" @input="onNameInput" />
  <input type="number" :value="age" @change="onAgeInput" />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: () => "",
  },
  age: {
    type: String,
    default: () => "",
  },
});

const emit = defineEmits(["update:name", "update:age"]);

const onNameInput = (e) => {
  emit("update:name", e.target.value);
};

const onAgeInput = (e) => {
  emit("update:age", e.target.value);
};
</script>
