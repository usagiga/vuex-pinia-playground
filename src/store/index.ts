import { createStore, createLogger } from 'vuex';
import { module as colorSchemeModule } from './modules/color-scheme';

export type RootState = {};

export const store = createStore({
  modules: {
    colorScheme: colorSchemeModule,
  },
  strict: true,
  plugins: [createLogger()],
});
