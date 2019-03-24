<template>
  <div class="container">
    <div class="holder">
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Enter new TODO item..." v-model="newTodo" name="newTodo">
      </form>
      <ul>
        <Todo
          v-for="(todo, index) in todos"
          :key="index"
          :data="todo"
          v-on:removeTodo="removeTodo"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  components: {
    Todo
  },
  data() {
    return {
      newTodo: "",
      todos: [
        { title: "Refresh JS knowledge", completed: true },
        { title: "Learn VUE", completed: false },
        { title: "Learn React", completed: false }
      ]
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ completed: false, title: this.newTodo });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(x => x != todo);
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

.container {
  box-shadow: 0px 0px 40px lightgray;
  width: 50%;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>
