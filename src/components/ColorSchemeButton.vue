<script setup lang="ts">
import { computed } from 'vue';
import { useColorSchemeStore } from '@/stores/color-scheme';

const colorSchemeStore = useColorSchemeStore();

const isDark = computed(() => colorSchemeStore.isDark);

changeColorScheme();

function toggleColorScheme() {
    colorSchemeStore.toggleColorScheme();
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
