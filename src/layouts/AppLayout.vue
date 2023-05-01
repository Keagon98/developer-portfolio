<template>
        <div class="app-layout" :class="backgroundColor">
            <app-header :class="backgroundColor"></app-header>
            <Transition name="fade" mode="out-in" appear>
                <slot></slot>
            </Transition>
            <app-footer :class="backgroundColor"></app-footer>
        </div>
</template>

<script lang="ts" setup>
    import AppHeader from '../components/common/AppHeader.vue';
    import AppFooter from '../components/common/AppFooter.vue';

    const appFooter = AppFooter;
    const appHeader = AppHeader;

    const props = defineProps({
        backgroundColor: String
    });
</script>

<style scoped>
.app-layout {
    overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>