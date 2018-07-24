import Vue from 'vue';
import MyPlugin from '@/types/MyPlugin';

declare module 'vue/types/vue' {
    interface Vue {
        $myPlugin: MyPlugin;
    }
}