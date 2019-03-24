<template>
  <div id="app">
    <div class="img">
      <img alt="Vue logo" src="./assets/logo.png">
    </div> 
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'app',
  components: {
    ToDoList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: start;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
.img{
  text-align: center;
}
</style>
