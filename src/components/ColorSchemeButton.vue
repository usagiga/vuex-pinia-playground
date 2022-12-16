<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const isDark = computed(() => store.state.colorScheme.isDark);

changeColorScheme();

function toggleColorScheme() {
    store.commit('colorScheme/toggleColorScheme');
    changeColorScheme();
}

function changeColorScheme() {
    if (isDark.value) {
        console.log('turn off');
        document.documentElement.classList.add('dark');
    } else {
        console.log('turn on');
        document.documentElement.classList.remove('dark');
    }
}
</script>

<template>
    <button @click="toggleColorScheme">Toggle Color Scheme</button>
</template>
