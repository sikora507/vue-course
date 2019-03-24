<template>
  <div class="container">
    <div class="holder">
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Enter new TODO item..." v-model="newTodo" name="newTodo">
      </form>
      <ul>
        <li v-for="(todo, index) in thingsToDo" :key="index">
            {{todo}}
            <a class="remove-button" @click="function(){removeTodo(todo);}"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      thingsToDo: ["Learn VUE", "Learn React", "Refresh JS knowledge"]
    };
  },
  methods: {
    addTodo() {
      this.thingsToDo.push(this.newTodo);
      this.newTodo = "";
    },
    removeTodo(todo){
        this.thingsToDo = this.thingsToDo.filter(x => x!=todo);
    }
  }
};
</script>

<style scoped>
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

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

.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.remove-button{
    display: none;
    position:absolute;
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
  background-color:  #3eb3f6;
  color: white;
}
.remove-button:after {
  content: "\00d7";
}
</style>
