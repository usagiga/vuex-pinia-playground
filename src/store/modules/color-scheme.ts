import type { Module } from 'vuex';
import type { RootState } from '@/store';

interface ColorSchemeState {
  isDark: boolean;
}

const state: ColorSchemeState = {
  isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

const getters = {};

const actions = {};

const mutations = {
  toggleColorScheme(state: ColorSchemeState) {
    state.isDark = !state.isDark;
  },
};

export const module: Module<ColorSchemeState, RootState> = {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
