<template>
    <app-layout :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <div class="header">
                            <h2 ref="projectHeader">Projects</h2>
                        </div>
                        <div class="main-content my-4">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-4 mb-4" ref="projectCard"  v-for="proj in data" :key="proj._id">
                                        <ProjectCard :proj="proj" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </app-layout>
    <router-view />
</template>

<script lang="ts" setup>
    import AppLayout from '../layouts/AppLayout.vue';
    import ProjectCard from '../components/cards/ProjectCard.vue';

    import { onMounted, ref } from 'vue';
    import { gsap } from 'gsap';

    import useProjectsStore from '../stores/projectStore';

    const appLayout = AppLayout;
    const projectCardComponent = ProjectCard;

    const projectHeader = ref(null);
    const projectCard = ref(null);

    const store = useProjectsStore();
    store.fetchProjectsData();

    console.log(store.projectContent);

    let data: any[] = [];
    data = store.projectContent;

    onMounted(() => { 
        const tl = gsap.timeline({ delay: 0.50, ease: "ease-in" });
        tl.from(projectHeader.value, { x: '+55', autoAlpha: 0, duration: 0.50 });
        tl.from(projectCard.value, { y: '+30', autoAlpha: 0, duration: 0.50, stagger: 0.20});       
      
    });

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
