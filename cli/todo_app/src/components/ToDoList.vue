<template>
  <div class="container">
    <div class="holder">
      <form @submit.prevent="addTodo">
        <input
          type="text"
          placeholder="Enter new TODO item..."
          v-model="newTodo"
          v-validate="'min:5'"
          name="newTodo"
        >
        <p class="alert" v-if="errors.has('newTodo')">{{errors.first('newTodo')}}</p>
      </form>
      <ul>
        <li v-for="(todo, index) in thingsToDo" :key="index">{{todo}}</li>
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
      this.$validator.validateAll().then(result => {
        if (result) {
          this.thingsToDo.push(this.newTodo);
          this.newTodo = "";
        }
      });
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
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
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
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
</style>
