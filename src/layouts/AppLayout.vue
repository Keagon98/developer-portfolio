<template>
    <div class="app-layout" :class="backgroundColor">
        <app-header :class="backgroundColor"></app-header>
            <slot></slot>
        <app-footer :class="backgroundColor"></app-footer>
    </div>
</template>

<script lang="ts">
import AppHeader from '../components/common/AppHeader.vue';
import AppFooter from '../components/common/AppFooter.vue';

export default {
    components: { 
        AppFooter,
        AppHeader
    },
    props: {
        backgroundColor: {
            type: String,
            required: true
        }
    },
    setup() {

    }
}
</script>

<style scoped>
.app-layout {
    overflow: hidden;
}
</style>