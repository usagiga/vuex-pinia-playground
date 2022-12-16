<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useColorSchemeStore } from '@/stores/color-scheme';

const store = useStore();
const colorSchemeStore = useColorSchemeStore();

const isDarkVuex = computed(() => store.state.colorScheme.isDark);
const isDarkPinia = computed(() => colorSchemeStore.isDark);

changeColorSchemePinia();

function toggleColorSchemeVuex() {
    store.commit('colorScheme/toggleColorScheme');
    changeColorSchemeVuex();
}

function changeColorSchemeVuex() {
    if (isDarkVuex.value) {
        console.log('turn off');
        document.documentElement.classList.add('dark');
    } else {
        console.log('turn on');
        document.documentElement.classList.remove('dark');
    }
}

function toggleColorSchemePinia() {
    colorSchemeStore.toggleColorScheme();
    changeColorSchemePinia();
}

function changeColorSchemePinia() {
    if (isDarkPinia.value) {
        console.log('turn off');
        document.documentElement.classList.add('dark');
    } else {
        console.log('turn on');
        document.documentElement.classList.remove('dark');
    }
}
</script>

<template>
    <button @click="toggleColorSchemeVuex">Toggle Color Scheme (Vuex)</button>
    <button @click="toggleColorSchemePinia">Toggle Color Scheme (Pinia)</button>
</template>
