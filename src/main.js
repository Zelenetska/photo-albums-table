import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import axios from 'axios';
import Vuelidate from 'vuelidate';
import App from './App.vue'

Vue.use(Vuelidate);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
