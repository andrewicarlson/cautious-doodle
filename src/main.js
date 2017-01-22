// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import App from './App';

Vue.use(
  VueMaterial,
  VueResource
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
