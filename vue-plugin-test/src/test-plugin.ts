import _Vue from 'vue';

export default function myPlugin(Vue: typeof _Vue): void {
  Vue.prototype.$myPlugin = { one: 1, two: 2 };
}
