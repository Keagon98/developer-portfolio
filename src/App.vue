<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
    import useAboutStore from './stores/aboutStore';
    import useProjectsStore from './stores/projectStore';

    const storeAbout = useAboutStore();
    const storeProject = useProjectsStore();

    storeAbout.fetchAboutData();
    storeAbout.fetchExperienceData();
    storeProject.fetchProjectsData();
</script>

