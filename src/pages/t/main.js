
import Vue from 'vue/dist/vue.esm.js';
import Test from './components/Test.vue';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
window.vm = new Vue({
  el: '#app',
  render(h) {
    return h(Test)
  }
})