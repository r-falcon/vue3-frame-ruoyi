<template>
  <p>brother2 接受事件</p>
  <p>title:{{ title }}</p>
  <p>user:name,{{ name }},age,{{ age }}</p>
</template>

<script setup>
import mybus from "./bus.js";

const title = ref("");
const user = reactive({
  name: "",
  age: null,
});

mybus.on("title", (data) => {
  title.value = data.title;
});
mybus.on("user", (data) => {
  user.name = data.user.name;
  user.age = data.user.age;
});

const { name, age } = toRefs(user);
</script>
