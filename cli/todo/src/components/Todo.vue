<template>
  <li>
    <input type="checkbox" v-model="data.completed" />
    {{data.title}}
    <a class="remove-button" @click="$emit('removeTodo', data)"></a>
  </li>
</template>
<script>
export default {
  props: ["data"]
};
</script>
<style scoped>
ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
  position: relative;
  padding-right: 40px;
}
ul li:hover a {
  display: inherit;
}
.remove-button {
  display: none;
  position: absolute;
  right: 5px;
  top: 15px;
  width: 25px;
  height: 25px;
  text-align: center;
  border: 2px solid #3eb3f6;
  border-radius: 25px;
  background-color: white;
  cursor: pointer;
  transition-duration: 0.4s;
  content: "aa";
}
.remove-button:hover {
  background-color: #3eb3f6;
  color: white;
}
.remove-button:after {
  content: "\00d7";
}
</style>


