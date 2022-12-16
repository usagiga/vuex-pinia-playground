import { defineStore } from 'pinia';

interface State {
  isDark: boolean;
}

export const useColorSchemeStore = defineStore('colorScheme', {
  state: (): State => ({
    isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  }),
  getters: {},
  actions: {
    toggleColorScheme() {
      this.isDark = !this.isDark;
    },
  },
});
