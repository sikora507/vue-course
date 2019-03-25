import Vue from 'vue'
import App from './App.vue'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate);
const dictionary = {
  en: {
    messages:{
      min: (fieldName, params) => `${fieldName} must be at least ${params[0]} characters long.`
    },
    attributes:{
      item: 'TODO item'
    }
  }
};
Validator.localize(dictionary);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
