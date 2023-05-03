<template>
    <app-layout :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <h1>Hi</h1>
                </div>
            </div>
        </main>
    
    </app-layout>
</template>

<script setup lang="ts">
import AppLayout from '../layouts/AppLayout.vue';

const appLayout = AppLayout;

console.log('On route');

</script>

<style lang="scss" scoped>
main {
    height: 100vh;
    .container {
        height: 100%;
        overflow: scroll;
        .content-wrapper {
            padding: 7em 0;
        }
    }
}
</style>