import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $gameData: object;
    }
}