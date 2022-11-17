<template>
  <div v-for="(people, index) in peoples.results" :key="index">
    {{ people.name }} {{ people.birth_year }}
  </div>
</template>

<script setup>
const peoples = ref({
  results: [],
});
const headers = { "Content-Type": "application/json" };
const fetchPeoples = await fetch("https://swapi.dev/api/people", {
  headers,
});
peoples.value = await fetchPeoples.json();
</script>
