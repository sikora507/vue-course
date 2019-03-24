<template>
  <div>
    <h1>To do list</h1>
    <ul>
      <li v-for="(todo, index) in thingsToDo" :key="index">{{todo}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thingsToDo: ["Learn VUE", "Learn React", "Refresh JS knowledge"]
    };
  }
};
</script>

<style>
</style>
