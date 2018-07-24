import { VueConstructor } from 'vue';
import MyPlugin from '@/types/MyPlugin';

export default function myPlugin(Vue: VueConstructor): void {
  const plug: MyPlugin = { one: 1, two: 2 };
  Vue.prototype.$myPlugin = plug;
}
