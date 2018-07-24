import Vue from 'vue';
import App from '@/App.vue';
import MyPlugin from '@/test-plugin';

Vue.config.productionTip = false;

Vue.use(MyPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
