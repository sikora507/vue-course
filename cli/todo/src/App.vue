<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    TodoList
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  display: grid;
  justify-items: center;
  align-items: start;
}
</style>
